// Install dependencies: react-webcam, axios
// npm install react-webcam axios

import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const FacialExpression = () => {
  const webcamRef = useRef(null);
  const [expression, setExpression] = useState(''); // Store the analyzed expression
  const [isProcessing, setIsProcessing] = useState(false); // State to track the processing status

  // Capture a frame from the webcam and send it to the FastAPI backend
  const captureAndSendFrame = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc); // Debugging: Check if base64 string is valid

      if (!imageSrc) {
        console.error("Failed to capture image from webcam.");
        return; // Exit if no image is captured
      }

      setIsProcessing(true); // Set processing state to true

      try {
        // Send the captured image to the FastAPI backend
        const response = await axios.post('http://localhost:8000/analyze_expression', { image: imageSrc });

        // Set the expression received from the backend
        setExpression(response.data.expression);
      } catch (error) {
        console.error('Error analyzing expression:', error);
        setExpression('Error analyzing expression'); // Set error message if the request fails
      } finally {
        setIsProcessing(false); // Reset the processing state
      }
    }
  }, [webcamRef]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Facial Expression Analyzer</h1>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={{ width: 1280, height: 720, facingMode: "user" }}
        style={{ borderRadius: '10px', border: '2px solid #ccc' }}
      />
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={captureAndSendFrame} 
          style={{ padding: '10px 20px', fontSize: '16px' }}
          disabled={isProcessing} // Disable button while processing
        >
          {isProcessing ? 'Analyzing...' : 'Analyze Expression'}
        </button>
      </div>
      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        <strong>Detected Expression:</strong> {expression || 'No expression detected'}
      </div>
    </div>
  );
};

export default FacialExpression;
