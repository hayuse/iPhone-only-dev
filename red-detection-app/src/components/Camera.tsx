import React, { useRef, useState } from 'react';

interface CameraProps {
    onDetectionResult: (result: boolean) => void;
}

const Camera: React.FC<CameraProps> = ({ onDetectionResult }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const startCamera = async () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        }
    };

    const captureImage = () => {
        if (videoRef.current) {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const context = canvas.getContext('2d');
            context?.drawImage(videoRef.current, 0, 0);
            setImageSrc(canvas.toDataURL('image/png'));

            // Simulate red detection logic
            const redDetected = Math.random() > 0.5; // Replace with actual detection logic
            onDetectionResult(redDetected);
        }
    };

    return (
        <div>
            <video ref={videoRef} autoPlay onLoadedMetadata={startCamera} />
            <button onClick={captureImage}>Capture</button>
            {imageSrc && <img src={imageSrc} alt="Captured" />}
        </div>
    );
};

export default Camera;