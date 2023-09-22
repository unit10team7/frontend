import { useEffect, useRef } from "react";

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          const video = videoRef.current;
          if (video) {
            video.srcObject = stream;
          }
        })
        .catch(function (err) {
          console.log("Something went wrong!", err);
        });
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay />
    </div>
  );
};

export default Camera;
