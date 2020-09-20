import React, { useEffect, useRef, useState } from 'react'
import oceanLofi from '../img/ocean-lofi.mp4'

const VideoBackground = () => {
  const href = typeof window !== `undefined` ? window.location.href : ''
  const [isBlogPage, setIsBlogPage] = useState(href.includes('/blog'))
  const [isConnectPage, setIsConnectPage] = useState(href.includes('/connect'))
  const [isCataloguePage, setIsCataloguePage] = useState(
    href.includes('/catalogue')
  )
  const [isJoyPage, setIsJoyPage] = useState(href.includes('/joy'))
  const videoElementRef = useRef(null)

  useEffect(() => {
    if (videoElementRef.current) {
      videoElementRef.current.playbackRate = 0.1
    }
  }, [])

  useEffect(() => {
    if (href.includes('/blog') && !isBlogPage) {
      setIsBlogPage(true)
    }

    if (href.includes('/connect') && !isConnectPage) {
      setIsConnectPage(true)
    }

    if (href.includes('/catalogue') && !isCataloguePage) {
      setIsCataloguePage(true)
    }

    if (href.includes('/joy') && !isJoyPage) {
      setIsJoyPage(true)
    }
  }, [href, isBlogPage, isConnectPage, isCataloguePage])

  return (
    <div
      className={`video-image-color-fill ${
        isBlogPage ? 'blog-background' : ''
      } ${isConnectPage ? 'connect-background' : ''}${
        isCataloguePage ? 'catalogue-background' : ''
      }${isJoyPage ? 'joy-background' : ''}`}
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
        <source src={oceanLofi} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoBackground

{
  /* <source src="polina.webm" type="video/webm" /> */
}
