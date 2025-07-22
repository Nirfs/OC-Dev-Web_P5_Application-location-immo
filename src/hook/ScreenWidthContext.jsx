import React, { createContext, useContext, useEffect, useState } from "react"

const ScreenWidthContext = createContext()

export function ScreenWidthProvider({ children }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      {children}
    </ScreenWidthContext.Provider>
  )
}

export function useScreenWidth() {
  const context = useContext(ScreenWidthContext)

  return context
}
