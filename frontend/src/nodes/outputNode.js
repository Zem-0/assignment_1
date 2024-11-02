// outputNode.js

import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const config = {
    title: 'Output',
    width: 240,
    height: 180,
    inputs: [
      { id: 'value', label: 'Input' }
    ],
    controls: [
      {
        type: 'text',
        id: 'outputName',
        label: 'Name',
        default: id.replace('customOutput-', 'output_')
      },
      {
        type: 'select',
        id: 'outputType',
        label: 'Type',
        default: 'Text',
        options: [
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'Image' }
        ]
      }
    ]
  };

  return <BaseNode id={id} data={data} config={config} />;
};
