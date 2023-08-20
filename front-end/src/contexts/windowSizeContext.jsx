import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
const WindowSizeContext = createContext(0)

const WindowSizeContextProvider = ({children})=>{
  const [windowSize,setWindowSize] = useState(window.innerWidth)

  useEffect(()=>{
    function handleResize(){
      setWindowSize(window.innerWidth)
    }
    window.addEventListener("resize",handleResize)
    return ()=>{
      window.removeEventListener("resize",handleResize)
    }
  })
  // console.log(windowSize)
  return(
    <>
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
    </>
  )
}

WindowSizeContextProvider.propTypes={
  children: PropTypes.element,
}

export default WindowSizeContext
export {WindowSizeContextProvider}
