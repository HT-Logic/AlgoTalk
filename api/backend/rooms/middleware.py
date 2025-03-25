import jwt
from django.conf import settings
from django.contrib.auth import get_user_model
from urllib.parse import parse_qs
from channels.auth import BaseMiddleware
from asgiref.sync import sync_to_async

User = get_user_model()

class JWTAuthMiddleware(BaseMiddleware):
    async def __call__(self, scope, receive, send):
        # Extract token from query params or headers
        query_params = parse_qs(scope["query_string"].decode())
        token = query_params.get("token", [None])[0]  # Get ?token=<JWT> from URL

        if not token:
            headers = dict(scope["headers"])
            auth_header = headers.get(b'authorization', b'').decode()  # Get Authorization header
            if auth_header.startswith("Bearer "):
                token = auth_header.split("Bearer ")[1]

        if token:
            try:
                # Decode JWT token
                decoded_data = jwt.decode(token, options={"verify_signature": False})
                user = await sync_to_async(User.objects.get)(id=decoded_data["user_id"])  # Fetch user from DB
                
                scope["user"] = user  # Attach authenticated user to scope
            except (jwt.ExpiredSignatureError, jwt.InvalidTokenError, User.DoesNotExist) as e:
                scope["user"] = None  # Invalid token or user not found

        return await super().__call__(scope, receive, send)
