import {BrowserRouter, Route, Routes} from "react-router"
import WelcomePage from "./header/WelcomePage.tsx";
import Foreground from "./foreground/Foreground.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/main" element={<Foreground/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
