import React from 'react'

import Search from '../components/Search'
import CreatePin from '../components/CreatePin'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'
import PinDetails from '../components/PinDetails'


function Pins() {

  const[searchTerm, setSearchTerm] = useState("")

  return (
    <div className = "px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar searchTerm = {searchTerm}
        setSearchTerm = {setSearchTerm}
        user = {user && user}
        />
        
        </div> 
        <div className="h-full">
          <Routes>
            <Route path = "/" element = {<Feed/>} />
            <Route path = "/category/:categoryId" element = {<Feed/>} />
            <Route path = "/pin-detail/:pinId" element = {<PinDetails user = {user && user} />} />
            <Route path = "/create-pin" element = {<CreatePin user = {user && user}/>} />
            <Route path = "/search" element = {<Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} user = {user && user}/>} />
          </Routes>
        </div>
      
      
    </div>
  )
}

export default Pins