import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
