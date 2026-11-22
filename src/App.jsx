import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import HowToPlay from './assets/pages/HowToPlay'
import Stats from './assets/pages/Stats'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='how-to-play' element= {<HowToPlay />} />
      <Route path='/stats' element= {<Stats />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App