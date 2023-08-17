from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

class TaskListCreateView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    def get_queryset(self):
        user = self.request.user
        return Task.objects.filter(user=user.id)

class TaskRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    def get_queryset(self):
        user = self.request.user
        return Task.objects.filter(user=user.id)
