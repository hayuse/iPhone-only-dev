import React, { useState } from 'react';
import Camera from '../components/Camera';

const Home = () => {
  const [redDetected, setRedDetected] = useState(false);

  const handleDetectionResult = (result: boolean) => {
    setRedDetected(result);
  };

  return (
    <div>
      <h1>赤色検出アプリ</h1>
      <Camera onDetectionResult={handleDetectionResult} />
      {redDetected && <p>赤色が検出されました！</p>}
      {!redDetected && <p>赤色は検出されませんでした。</p>}
    </div>
  );
};

export default Home;