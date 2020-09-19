import React, { useEffect, useRef, useState } from 'react'

const VideoBackground = () => {
  const [isBlogPage, setIsBlogPage] = useState(
    window.location.href.includes('/blog')
  )
  const [isConnectPage, setIsConnectPage] = useState(
    window.location.href.includes('/connect')
  )
  const videoElementRef = useRef(null)
  useEffect(() => {
    if (videoElementRef.current) {
      console.log('setting playback rate')
      videoElementRef.current.playbackRate = 0.1
    }
  }, [])

  useEffect(() => {
    if (window.location.href.includes('/blog') && !isBlogPage) {
      setIsBlogPage(true)
    }

    if (window.location.href.includes('/connect') && !isConnectPage) {
      setIsConnectPage(true)
    }
  }, [])

  return (
    <div
      className={`video-image-color-fill ${
        isBlogPage ? 'blog-background' : ''
      } ${isConnectPage ? 'connect-background' : ''}`}
    >
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
        <source src="/img/ocean.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoBackground

{
  /* <source src="polina.webm" type="video/webm" /> */
}
