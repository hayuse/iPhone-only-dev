import React, { useRef, useState } from 'react';

const Camera: React.FC = () => {
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