import React from 'react'
import Sidebar from './Sidebar'
import Messagecontainer from './Messagecontainer'

function HomePage() {
  return (
    

    <div className=' flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border '>

        <Sidebar/>
        <Messagecontainer/>
    </div>
    
    
  )
}

export default HomePage
