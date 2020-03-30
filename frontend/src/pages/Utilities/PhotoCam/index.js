import React from "react";
import Camera from "../../../components/Camera";

const PhotoCam = () => {
  return (
    <div>
      <Camera
        ref={camera => {
          this.camera = camera;
        }}
      />
      <p>
        Esta pagina tendrá una funcionalidad para sacarse fotos. Ahora es una
        practica pero la intencion es que los usuarios se puedan sacar fotos de
        perfil
      </p>
    </div>
  );
};
export default PhotoCam;
