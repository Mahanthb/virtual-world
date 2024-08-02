import React, { useState, useRef } from 'react';
import '@google/model-viewer';
import './ARViewer.css';

const ARViewer = () => {
  const [modelSrc, setModelSrc] = useState('');
  const inputFileRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.name.endsWith('.glb') || file.name.endsWith('.gltf'))) {
      const url = URL.createObjectURL(file);
      setModelSrc(url);
    } else {
      alert('Please upload a .glb or .gltf file');
    }
  };

  const triggerFileInput = () => {
    inputFileRef.current.click();
  };

  return (
    <div className="ar-viewer-container">
      <button className="upload-button" onClick={triggerFileInput}>Upload 3D Model</button>
      <input
        type="file"
        accept=".glb,.gltf"
        style={{ display: 'none' }}
        ref={inputFileRef}
        onChange={handleFileUpload}
      />
      
      {modelSrc && (
        <div className="model-viewer-container">
          <model-viewer
            src={modelSrc}
            alt="A 3D model"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            auto-rotate
            style={{ width: '100%', height: '500px' }}
          >
            <button className="ar-button" slot="ar-button">View in AR</button>
            <button className="vr-button" slot="ar-button" onClick={() => window.location.href = modelSrc + '#vr'}>View in VR</button>
          </model-viewer>
        </div>
      )}
    </div>
  );
};

export default ARViewer;
