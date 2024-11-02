// submit.js

import { useCallback } from 'react';
import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = useCallback(async () => {
        try {
            const API_URL = 'http://localhost:8000/pipelines/parse';
            
            console.log('Sending data:', { nodes, edges });
            
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Received data:', data);
            
            const message = `Pipeline Analysis:
• Number of Nodes: ${data.num_nodes}
• Number of Edges: ${data.num_edges}
• Is Valid DAG: ${data.is_dag ? 'Yes' : 'No'}

${!data.is_dag ? '\nWarning: Your pipeline contains cycles!' : ''}`;

            alert(message);

        } catch (error) {
            console.error('Error details:', error);
            alert('Failed to analyze pipeline. Please check the console for details.');
        }
    }, [nodes, edges]);

    return (
        <button
            onClick={handleSubmit}
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                padding: '10px 20px',
                backgroundColor: '#3B82F6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 1000,
            }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2563EB';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#3B82F6';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}
        >
            <span>Analyze Pipeline</span>
            <svg 
                width="16" 
                height="16" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: '4px' }}
            >
                <path 
                    d="M10 4L18 12L10 20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};
