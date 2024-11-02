// draggableNode.js

const getNodeStyle = (type) => {
  const baseStyle = {
    cursor: 'grab', 
    width: '100%',
    height: '60px',
    display: 'flex', 
    alignItems: 'center', 
    borderRadius: '8px',
    justifyContent: 'center', 
    flexDirection: 'column',
    padding: '0 15px',
    textAlign: 'center',
    backgroundColor: '#2D3748',
    border: '1px solid #475569',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.2s ease',
    color: '#E2E8F0',
    fontSize: '0.875rem',
    fontWeight: 500
  };

  return baseStyle;
};

export const DraggableNode = ({ type, label, icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    const baseStyle = {
        cursor: 'grab',
        width: '100%',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        padding: '0 15px',
        backgroundColor: '#2D3748',
        border: '1px solid #475569',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        color: '#E2E8F0',
        fontSize: '0.875rem',
        fontWeight: 500,
        position: 'relative',
        overflow: 'hidden'
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={baseStyle}
        draggable
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          e.currentTarget.style.backgroundColor = '#3D4A5C';
          e.currentTarget.style.borderColor = '#60A5FA';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
          e.currentTarget.style.backgroundColor = '#2D3748';
          e.currentTarget.style.borderColor = '#475569';
        }}
      >
        {/* Background gradient effect */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent 0%, rgba(96, 165, 250, 0.1) 100%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
        }} />

        {/* Icon */}
        <span
            style={{
                marginRight: '12px',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px'
            }}>
                {icon}
            </span>

        {/* Label */}
        <span style={{
            flex: 1,
            textAlign: 'center'
        }}>
            {label}
        </span>
      </div>
    );
};
  