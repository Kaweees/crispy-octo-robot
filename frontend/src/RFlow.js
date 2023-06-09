import React from 'react';
import ReactFlow from 'reactflow';

import 'reactflow/dist/style.css';

function RFlow() {
    const initialNodes = [
      { id: '1', position: { x: 0, y: 0 }, data: { label: 'React Flow' } },
      { id: '2', position: { x: 0, y: 100 }, data: { label: 'Works' } },
    ];
    const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
    
      return (
          <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow nodes={initialNodes} edges={initialEdges} />
          </div>
      );
}

export default RFlow;
