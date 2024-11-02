// textNode.js

import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  // Track variables found in text
  const [variables, setVariables] = useState(new Set());
  // Track text content for size calculations
  const [textContent, setTextContent] = useState(data?.text || '{{input}}');

  // Function to extract variables from text
  const extractVariables = (text) => {
    const regex = /{{([^}]+)}}/g;
    const vars = new Set();
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      const varName = match[1].trim();
      if (isValidJavaScriptVariable(varName)) {
        vars.add(varName);
      }
    }
    
    return vars;
  };

  // Validate JavaScript variable names
  const isValidJavaScriptVariable = (name) => {
    try {
      Function('var ' + name);
      return true;
    } catch {
      return false;
    }
  };

  // Calculate node dimensions based on content
  const calculateDimensions = (text) => {
    const baseWidth = 240;
    const baseHeight = 140;
    const charPerLine = 30;
    const lineHeight = 20;

    const lines = Math.ceil(text.length / charPerLine);
    const height = Math.max(baseHeight, 80 + (lines * lineHeight));
    const width = Math.max(baseWidth, Math.min(text.length * 8, 400));

    return { width, height };
  };

  // Update variables when text changes
  const handleTextChange = (text) => {
    setTextContent(text);
    const newVars = extractVariables(text);
    setVariables(newVars);
  };

  // Initial setup
  useEffect(() => {
    handleTextChange(textContent);
  }, []);

  const dimensions = calculateDimensions(textContent);

  const config = {
    title: 'Text',
    width: dimensions.width,
    height: dimensions.height,
    outputs: [
      { id: 'output', label: 'Output' }
    ],
    inputs: Array.from(variables).map(varName => ({
      id: varName,
      label: varName
    })),
    controls: [
      {
        type: 'textarea', // New control type for better text input
        id: 'text',
        label: 'Text',
        default: textContent,
        onChange: handleTextChange
      }
    ]
  };

  return <BaseNode id={id} data={{ ...data, nodeType: 'text' }} config={config} />;
};
