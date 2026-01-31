import './App.css'
import Body from './components/body'
import DesktopOnlyMessage from './components/DesktopOnlyMessage'
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <DesktopOnlyMessage>
      <div>
        <Body />
        <Toaster />
      </div>
    </DesktopOnlyMessage>
  )
}

export default App
