import React from 'react'
import Top from './Top'
import Tab1 from './Tab1/Tab1'
import Tab2 from './Tab2/Tab2'
import Tab3 from './Tab3/Tab3'
import LetsPlaybutton from './LetsPlaybutton'


const Main = () => {
  return (
    <main className="w-full px-4 sm:px-6 lg:px-10">

      <Top />

      <div className="
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-5
    max-w-7xl
    mx-auto
    mt-3
">
        <Tab1 />
        <Tab2 />
        <Tab3 />

      </div>
      <LetsPlaybutton />

    </main>
  )
}

export default Main