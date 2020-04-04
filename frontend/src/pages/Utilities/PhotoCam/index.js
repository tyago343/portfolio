import React, { useState } from "react";
import Camera from "react-html5-camera-photo";

import ImagePreview from "./ImagePreview";

function PhotoCam(props) {
  const [dataUri, setDataUri] = useState("");

  function handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto");
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  return (
    <div>
      {dataUri ? (
        <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
      ) : (
        <Camera
          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
          isFullscreen={isFullscreen}
        />
      )}
    </div>
  );
}

export default PhotoCam;
