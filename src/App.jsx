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

      <div className=' mt-20 flex w-screen justify-between items-center container mx-auto h-14'>
        <div className=' text-4xl'>
          100 Contact(s)
        </div>
        <div className=' w-40v h-full'>
          <SearchField />
        </div>
      </div>

      <div className=' my-10 mt-4'>
        <RandomUser />
      </div>

    </div>
  )
}

export default App