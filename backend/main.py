from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, List
from collections import defaultdict

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    # Create adjacency list
    graph = defaultdict(list)
    for edge in edges:
        graph[edge['source']].append(edge['target'])
    
    # Keep track of visited nodes and nodes in current path
    visited = set()
    path = set()
    
    def has_cycle(node: str) -> bool:
        if node in path:
            return True
        if node in visited:
            return False
            
        path.add(node)
        visited.add(node)
        
        for neighbor in graph[node]:
            if has_cycle(neighbor):
                return True
                
        path.remove(node)
        return False
    
    # Check for cycles starting from each node
    for node in [node['id'] for node in nodes]:
        if node not in visited:
            if has_cycle(node):
                return False
    
    return True

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Dict = Body(...)):
    nodes = pipeline.get('nodes', [])
    edges = pipeline.get('edges', [])
    
    return {
        'num_nodes': len(nodes),
        'num_edges': len(edges),
        'is_dag': is_dag(nodes, edges)
    }
