import React from 'react'
import RandomUser from './components/randomuser/RandomUser'
import Navbar from './components/navbar/Navbar'
import SearchField from './components/searchbar/SearchField'

const App = () => {
  return (
    <div className=' relative flex flex-col'>
      <div className='  top-0 fixed left-0 w-screen z-10 mb-6'>
        <Navbar />
      </div>

      <div className=' mt-16'>
        <SearchField />
      </div>

      <div className=' my-10 mt-32'>
        <RandomUser />
      </div>

    </div>
  )
}

export default App