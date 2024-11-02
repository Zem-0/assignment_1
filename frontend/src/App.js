import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-container" style={{ 
      display: 'flex', 
      height: '100vh',
      backgroundColor: '#0F172A',
      color: '#E2E8F0'
    }}>
      <PipelineToolbar />
      <div style={{ 
        flexGrow: 1, 
        marginLeft: '240px',  // Increased margin for wider sidebar
        position: 'relative'
      }}>
        <PipelineUI />
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
