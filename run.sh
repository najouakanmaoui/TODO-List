#!/bin/bash

# Run Django backend server
echo "Starting Django backend server..."
cd todo_backend
python manage.py runserver 8081 &

# Run Vue.js frontend server
echo "Starting Vue.js frontend server..."
cd ../todo_frontend
npm run serve &

wait
