import { Handle, Position } from 'reactflow';
import { useState } from 'react';
import { useStore } from '../store';

export const BaseNode = ({ id, data, config }) => {
  const [nodeState, setNodeState] = useState(data?.state || {});
  const removeNode = useStore((state) => state.removeNode);

  const handleInputChange = (key, value, onChange) => {
    const newState = { ...nodeState, [key]: value };
    setNodeState(newState);
    if (onChange) onChange(value);
  };

  const handleDelete = () => {
    removeNode(id);
  };

  return (
    <div style={{
      width: config.width || 240,
      height: config.height || 120,
      border: '1px solid #475569',
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: '#2D3748',
      position: 'relative',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      fontSize: '0.875rem',
      transition: 'width 0.3s ease, height 0.3s ease'
    }}>
      {/* Delete Button */}
      <button
        onClick={handleDelete}
        style={{
          position: 'absolute',
          top: '-12px',
          right: '-12px',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '2px solid #1E293B',
          backgroundColor: '#EF4444',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          padding: 0,
          zIndex: 10,
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#DC2626';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#EF4444';
          e.target.style.transform = 'scale(1)';
        }}
      >
        ×
      </button>

      {/* Dynamic Input Handles */}
      {config.inputs?.map((input, index) => (
        <Handle
          key={`input-${input.id}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${((index + 1) * 100) / (config.inputs.length + 1)}%`,
            backgroundColor: '#60A5FA',
            width: '8px',
            height: '8px',
            border: '2px solid #2563EB'
          }}
        />
      ))}

      {/* Node Title */}
      <div style={{ 
        fontWeight: 600, 
        marginBottom: '12px',
        color: '#E2E8F0'
      }}>
        {config.title}
      </div>

      {/* Node Controls */}
      <div style={{ color: '#E2E8F0' }}>
        {config.controls?.map((control, index) => {
          switch (control.type) {
            case 'textarea':
              return (
                <label key={index} style={{ display: 'block', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                    {control.label}
                  </span>
                  <textarea
                    value={nodeState[control.id] || control.default || ''}
                    onChange={(e) => handleInputChange(control.id, e.target.value, control.onChange)}
                    style={{
                      width: '100%',
                      minHeight: '60px',
                      marginTop: '4px',
                      padding: '8px',
                      borderRadius: '4px',
                      border: '1px solid #475569',
                      backgroundColor: '#1E293B',
                      color: '#E2E8F0',
                      fontSize: '0.875rem',
                      resize: 'vertical',
                      fontFamily: 'monospace'
                    }}
                    placeholder="Enter text here. Use {{variableName}} for variables"
                  />
                </label>
              );
            case 'text':
              return (
                <label key={index} style={{ display: 'block', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{control.label}</span>
                  <input
                    type="text"
                    value={nodeState[control.id] || control.default || ''}
                    onChange={(e) => handleInputChange(control.id, e.target.value)}
                    style={{
                      width: '100%',
                      marginTop: '4px',
                      padding: '6px 8px',
                      borderRadius: '4px',
                      border: '1px solid #475569',
                      backgroundColor: '#1E293B',
                      color: '#E2E8F0',
                      fontSize: '0.875rem'
                    }}
                  />
                </label>
              );
            case 'select':
              return (
                <label key={index} style={{ display: 'block', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{control.label}</span>
                  <select
                    value={nodeState[control.id] || control.default}
                    onChange={(e) => handleInputChange(control.id, e.target.value)}
                    style={{
                      width: '100%',
                      marginTop: '4px',
                      padding: '6px 8px',
                      borderRadius: '4px',
                      border: '1px solid #475569',
                      backgroundColor: '#1E293B',
                      color: '#E2E8F0',
                      fontSize: '0.875rem'
                    }}
                  >
                    {control.options.map((opt, i) => (
                      <option key={i} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </label>
              );
            default:
              return null;
          }
        })}
      </div>

      {/* Output Handles */}
      {config.outputs?.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${((index + 1) * 100) / (config.outputs.length + 1)}%`,
            ...output.style
          }}
        />
      ))}
    </div>
  );
}; 