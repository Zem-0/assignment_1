import { BaseNode } from './BaseNode';
import { nodeConfigs } from './nodeConfigs';

export const ImageProcessorNode = ({ id, data }) => (
  <BaseNode id={id} data={data} config={nodeConfigs.imageProcessor} />
);

export const TextSummarizerNode = ({ id, data }) => (
  <BaseNode id={id} data={data} config={nodeConfigs.textSummarizer} />
);

export const DataTransformerNode = ({ id, data }) => (
  <BaseNode id={id} data={data} config={nodeConfigs.dataTransformer} />
);

export const TranslatorNode = ({ id, data }) => (
  <BaseNode id={id} data={data} config={nodeConfigs.translator} />
);

export const MathOperatorNode = ({ id, data }) => (
  <BaseNode id={id} data={data} config={nodeConfigs.mathOperator} />
); 