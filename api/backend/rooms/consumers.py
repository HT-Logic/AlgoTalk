from channels.generic.websocket import WebsocketConsumer
from rooms.models import Room, Message
from django.shortcuts import get_object_or_404
from asgiref.sync import async_to_sync
from django.contrib.auth import get_user_model
User = get_user_model()
import json

class RoomConsumer(WebsocketConsumer):
    def connect(self):
        self.user = self.scope.get('user')  # Ensure user exists
        self.room_id = self.scope['url_route']['kwargs']['room_id']
        self.room = get_object_or_404(Room, id=self.room_id)

        async_to_sync(self.channel_layer.group_add)(
            self.room_id,
            self.channel_name
        )

        self.accept()
        
    def disconnect(self, close_code):
        if self.user:  # ✅ Prevent crash if self.user is None
            async_to_sync(self.channel_layer.group_discard)(
                self.room_id,
                self.channel_name
            )

        
    def receive(self, text_data):
        print(f"🔹 Received data: {text_data}")  # Debugging
    
        text_data_json = json.loads(text_data)
        content = text_data_json.get('content', '').strip()

        if not content:
            print("❌ Empty message. Ignoring.")
            return

        # Save message in database
        message = Message.objects.create(
            sender=self.user,
            room=self.room,
            content=content
        )

        print(f"✅ Message saved: {message.content}")

        # Send message to WebSocket group
        async_to_sync(self.channel_layer.group_send)(
            self.room_id,
            {
                "type": "chat.message",
                "message": content,
                "user": self.user.username,
                "timestamp": str(message.timestamp)
            }
        )

    def chat_message(self, event):
        # Send the message to WebSocket clients
        self.send(text_data=json.dumps({
            "message": event["message"],
            "user": event["user"],
            "timestamp": event["timestamp"]
        }))