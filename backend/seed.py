import os
import django

# Setup Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "portfolio_backend.settings")
django.setup()

from api.models import Project

projects_data = [
    {
        "title": "Personal AI Assistant",
        "description": "This project is a 21-day build of a Python-powered personal AI assistant that listens, speaks, thinks, and executes tasks through natural voice interaction.",
        "tech_stack": "Python, AI Voice, Task Execution",
        "github_link": "https://github.com/raghavendrac2006/Personal-AI-Assistant",
        "status": "Completed"
    },
    {
        "title": "Vision Guardian",
        "description": "Developed an AI-powered meeting monitoring system capable of processing live captions, keyword detection, Telegram notifications, and automated PDF summary generation.",
        "tech_stack": "Python, Selenium, Gemini AI, Telegram API",
        "github_link": "https://github.com/raghavendrac2006/Vision-Guardian",
        "status": "Completed"
    },
    {
        "title": "Ledger Flow – Business Management",
        "description": "Developed and deployed a Flutter-Firebase application that digitizes paperwork, delivery records, and operational workflows for active businesses.",
        "tech_stack": "Flutter, Firebase, Dart",
        "github_link": "https://github.com/raghavendrac2006/Ledger-Flow",
        "status": "Completed"
    },
    {
        "title": "Smart Bus Tracking System",
        "description": "A GPS-based bus tracking application for students and institutions supporting live tracking, arrival alerts, and delay notifications.",
        "tech_stack": "Flutter, Firebase, OpenStreetMap",
        "github_link": "",
        "status": "In Progress"
    },
    {
        "title": "Banking App",
        "description": "A robust Java-based banking application designed to handle secure financial transactions, account management, and user authentication.",
        "tech_stack": "Java, Object-Oriented Programming",
        "github_link": "https://github.com/raghavendrac2006/Banking-app",
        "status": "Completed"
    },
    {
        "title": "Customer Segmentation",
        "description": "A data science project leveraging Python and machine learning clustering algorithms to analyze and segment customer behavior for targeted marketing strategies.",
        "tech_stack": "Python, Machine Learning",
        "github_link": "https://github.com/raghavendrac2006/customer-segmentation",
        "status": "Completed"
    },
    {
        "title": "Fibonacci Array Generator",
        "description": "A specialized Java utility program focused on algorithmic efficiency for generating and managing Fibonacci sequences within data arrays.",
        "tech_stack": "Java, Algorithms",
        "github_link": "https://github.com/raghavendrac2006/Fibonacci-Array-Generator",
        "status": "Completed"
    }
]

print("Clearing old projects...")
Project.objects.all().delete()

print("Seeding new projects...")
for data in projects_data:
    Project.objects.create(**data)

print("Successfully added all 7 projects to the database!")
