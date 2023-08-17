# Todo List App

This project is a simple Todo List application built using Django (backend) and Vue.js (frontend).

## Project Setup

### Backend Setup (Django)
Navigate to the backend directory:
cd todo_backend

Create a virtual environment and activate it:
python -m venv env
source venv/bin/activate ||  & /env/Scripts/Activate.ps1

Install the required packages:
pip install -r requirements.txt

Create the database:
python manage.py migrate

Create a superuser:
python manage.py createsuperuser

Run the Django development server:
python manage.py runserver 

The Django backend will be accessible at http://localhost:8000/ By default , but your can change the port by providing it after runserver 


### Frontend Setup (Vue.js)

Navigate to the frontend directory:
cd todo_frontend

Install the required dependencies:
npm install

Run the Vue.js development server:
npm run serve


### To run both the Django backend and Vue.js frontend simultaneously, you can use the following command in the root directory:

./run.sh