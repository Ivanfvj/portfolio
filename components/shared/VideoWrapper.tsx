import { useRef, useEffect } from "react";

import { classNames } from "@src/utils";

export const Video = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className={classNames("w-full", className)}>
      <video
        ref={videoEl}
        src={src}
        style={{ maxWidth: "100%", margin: "0 auto" }}
        playsInline
        loop
        muted
        controls
      />
    </div>
  );
};
