import { useContext } from "react"
import { ScreenWidthContext } from "@/hook/ScreenWitdh/ScreenWidthContext"

export function useScreenWidth() {
  return useContext(ScreenWidthContext)
}