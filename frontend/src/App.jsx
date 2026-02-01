import './App.css'
import Body from './components/body'
import DesktopOnlyMessage from './components/DesktopOnlyMessage'
import { Toaster } from "react-hot-toast"
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <DesktopOnlyMessage>
      <div>
        <Analytics />
        <Body />
        <Toaster />
      </div>
    </DesktopOnlyMessage>
  )
}

export default App
