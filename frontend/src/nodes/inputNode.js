// inputNode.js

import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const config = {
    title: 'Input',
    width: 240,
    height: 180,
    outputs: [
      { id: 'value', label: 'Output' }
    ],
    controls: [
      {
        type: 'text',
        id: 'inputName',
        label: 'Name',
        default: id.replace('customInput-', 'input_')
      },
      {
        type: 'select',
        id: 'inputType',
        label: 'Type',
        default: 'Text',
        options: [
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'File' }
        ]
      }
    ]
  };

  return <BaseNode id={id} data={data} config={config} />;
};
