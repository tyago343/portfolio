import React, { useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => {
  const [pic, setPic] = useState(null);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPic(imageSrc);
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        height={300}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={500}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      {pic ? <img src={pic} tab="picture from app" /> : ""}
    </>
  );
};

export default WebcamCapture;
