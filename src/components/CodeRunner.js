// src/components/FaceRecRunner.js
import React, { useState } from 'react';

const FaceRecRunner = () => {
    const [output, setOutput] = useState('');

    const runFaceRec = async () => {
        try {
            const response = await fetch('http://localhost:5000/run_face_rec');
            const data = await response.json();
            setOutput(data.output || data.error || 'Unknown error occurred');
        } catch (error) {
            console.error('Error running face_rec.py:', error);
        }
    };

    return (
        <div>
            <button onClick={runFaceRec}>Run face_rec.py</button>
            <div>
                <h3>Output:</h3>
                <pre>{output}</pre>
            </div>
        </div>
    );
};

export default FaceRecRunner;
