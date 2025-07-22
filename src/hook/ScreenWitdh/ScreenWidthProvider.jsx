import React, {useEffect, useState } from "react"
import { ScreenWidthContext } from "@/hook/ScreenWitdh/ScreenWidthContext"

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