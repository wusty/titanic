import React, { useEffect, useRef } from 'react'

const VideoBackground = () => {
  const videoElementRef = useRef(null)
  useEffect(() => {
    if (videoElementRef.current) {
      console.log('setting playback rate')
      videoElementRef.current.playbackRate = 0.1
    }
  }, [])

  return (
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
      {/* <source src="polina.webm" type="video/webm" /> */}
      <source src="/img/ocean.mp4" type="video/mp4" />
    </video>
  )
}

export default VideoBackground
