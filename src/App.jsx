import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import HowToPlay from './assets/pages/HowToPlay'
import Stats from './assets/pages/Stats'
import Play from './assets/pages/Play'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='how-to-play' element= {<HowToPlay />} />
      <Route path='/stats' element= {<Stats />} />
      <Route path='/play' element= {<Play />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App