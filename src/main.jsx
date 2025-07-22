import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '@/routes/AppRouter';
import { ScreenWidthProvider } from "@/hook/ScreenWidthContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScreenWidthProvider>
      <AppRouter/>
    </ScreenWidthProvider>
  </StrictMode>,
)
