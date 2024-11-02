# Pipeline Builder

A visual pipeline builder application with a React frontend and FastAPI backend.

## How to Run

### 1. Backend Setup

Navigate to backend directory
cd backend
Install Python dependencies
pip install fastapi uvicorn
Start the backend server
uvicorn main:app --reload --host 0.0.0.0 --port 8000

### 2. Frontend Setup

Navigate to frontend directory
cd frontend
Install dependencies
npm install
Start development server
npm run dev

### 3. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000

### Features
- Drag and drop nodes to create pipelines
- Connect nodes by dragging between handles
- Click "Analyze Pipeline" button to check:
  - Number of nodes
  - Number of edges
  - If pipeline is a valid DAG (no cycles)
