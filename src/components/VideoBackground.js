import React, { useEffect, useRef } from 'react'
import oceanLofi from '../img/ocean-lofi.mp4'

const VideoBackground = () => {
  const videoElementRef = useRef(null)

  useEffect(() => {
    if (videoElementRef.current) {
      videoElementRef.current.playbackRate = 0.1
    }
  }, [])

  return (
    <div className="video-image-color-fill">
      <video
        ref=""
        className="video-image-container"
        playsInline
        autoPlay
        muted
        loop
        poster="ocean.png"
        id="bgvid"
        ref={videoElementRef}
      >
        <source src={oceanLofi} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoBackground

{
  /* <source src="polina.webm" type="video/webm" /> */
}
