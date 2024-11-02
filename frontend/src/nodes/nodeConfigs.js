export const nodeConfigs = {
  imageProcessor: {
    title: 'Image Processor',
    width: 200,
    height: 100,
    backgroundColor: '#f0f8ff',
    inputs: [
      { id: 'image', label: 'Image Input' }
    ],
    outputs: [
      { id: 'processed', label: 'Processed Image' }
    ],
    controls: [
      {
        type: 'select',
        id: 'mode',
        label: 'Process Mode',
        default: 'resize',
        options: [
          { value: 'resize', label: 'Resize' },
          { value: 'filter', label: 'Apply Filter' },
          { value: 'crop', label: 'Crop' }
        ]
      }
    ]
  },

  textSummarizer: {
    title: 'Text Summarizer',
    backgroundColor: '#fff0f5',
    inputs: [
      { id: 'text', label: 'Text Input' }
    ],
    outputs: [
      { id: 'summary', label: 'Summary' }
    ],
    controls: [
      {
        type: 'select',
        id: 'length',
        label: 'Summary Length',
        default: 'short',
        options: [
          { value: 'short', label: 'Short' },
          { value: 'medium', label: 'Medium' },
          { value: 'long', label: 'Long' }
        ]
      }
    ]
  },

  dataTransformer: {
    title: 'Data Transformer',
    backgroundColor: '#f5fffa',
    inputs: [
      { id: 'data', label: 'Data Input' }
    ],
    outputs: [
      { id: 'json', label: 'JSON' },
      { id: 'csv', label: 'CSV' }
    ],
    controls: [
      {
        type: 'text',
        id: 'delimiter',
        label: 'CSV Delimiter',
        default: ','
      }
    ]
  },

  translator: {
    title: 'Language Translator',
    backgroundColor: '#fff5ee',
    inputs: [
      { id: 'input', label: 'Text Input' }
    ],
    outputs: [
      { id: 'translated', label: 'Translated Text' }
    ],
    controls: [
      {
        type: 'select',
        id: 'targetLang',
        label: 'Target Language',
        default: 'es',
        options: [
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
          { value: 'de', label: 'German' }
        ]
      }
    ]
  },

  mathOperator: {
    title: 'Math Operator',
    backgroundColor: '#f0fff0',
    inputs: [
      { id: 'num1', label: 'Number 1' },
      { id: 'num2', label: 'Number 2' }
    ],
    outputs: [
      { id: 'result', label: 'Result' }
    ],
    controls: [
      {
        type: 'select',
        id: 'operation',
        label: 'Operation',
        default: 'add',
        options: [
          { value: 'add', label: 'Add' },
          { value: 'subtract', label: 'Subtract' },
          { value: 'multiply', label: 'Multiply' },
          { value: 'divide', label: 'Divide' }
        ]
      }
    ]
  }
}; 