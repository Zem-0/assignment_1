// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const config = {
    title: 'LLM',
    width: 240,
    height: 120,
    inputs: [
      { id: 'system', label: 'System' },
      { id: 'prompt', label: 'Prompt' }
    ],
    outputs: [
      { id: 'response', label: 'Response' }
    ],
    controls: [
      {
        type: 'select',
        id: 'model',
        label: 'Model',
        default: 'gpt-3.5-turbo',
        options: [
          { value: 'gpt-3.5-turbo', label: 'GPT-3.5' },
          { value: 'gpt-4', label: 'GPT-4' }
        ]
      }
    ]
  };

  return <BaseNode id={id} data={data} config={config} />;
};
