// toolbar.js

import { DraggableNode } from './draggableNode';
import { useState } from 'react';

export const PipelineToolbar = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div style={{ 
            padding: '20px',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            width: isExpanded ? '240px' : '60px',
            backgroundColor: '#1E293B',
            borderRight: '1px solid #475569',
            overflowY: 'auto',
            zIndex: 100,
            boxShadow: '4px 0 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                color: '#E2E8F0',
                textAlign: 'center',
                padding: '10px',
                borderBottom: '2px solid #3B82F6',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                Pipeline Nodes
            </h2>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '12px',
                padding: '10px'
            }}>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{
                        fontSize: '0.875rem',
                        color: '#94A3B8',
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Basic Nodes
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <DraggableNode type='customInput' label='Input' icon='📥' />
                        <DraggableNode type='llm' label='LLM' icon='🤖' />
                        <DraggableNode type='customOutput' label='Output' icon='📤' />
                        <DraggableNode type='text' label='Text' icon='📝' />
                    </div>
                </div>

                <div>
                    <h3 style={{
                        fontSize: '0.875rem',
                        color: '#94A3B8',
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Advanced Nodes
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <DraggableNode type='imageProcessor' label='Image Processor' icon='🖼️' />
                        <DraggableNode type='textSummarizer' label='Text Summarizer' icon='📊' />
                        <DraggableNode type='dataTransformer' label='Data Transformer' icon='🔄' />
                        <DraggableNode type='translator' label='Translator' icon='🌐' />
                        <DraggableNode type='mathOperator' label='Math Operator' icon='🔢' />
                    </div>
                </div>
            </div>
        </div>
    );
};
