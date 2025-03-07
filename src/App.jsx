// import { useState } from 'react'
import { ToggleSwitch } from 'flowbite-react'
import './App.css'
import LargeCard from './components/LargeCard'

function App() {

  return (
    <div className='relative dark:bg-topVeryDarkBlue text-white mx-32'>
      <div>
        <h2>Social Media Dashboard</h2>
        <h3>Total Followers: 23,004</h3>
      </div>
      <div>
        <ToggleSwitch/>
      </div>
      <div className='grid md:grid-cols-4 md:gap-4 absolute text-white'>

        <LargeCard imgSrc='/assets/images/icon-facebook.svg' imgAlt='Facebook Icon' userName='@nathanf' followers='1987' changeIcon='/assets/images/icon-up.svg' followerChange='12 Today'/>

        <LargeCard imgSrc='/assets/images/icon-facebook.svg' imgAlt='Facebook Icon' userName='@nathanf' followers='1987' changeIcon='/assets/images/icon-up.svg' followerChange='12 Today'/>
        <LargeCard imgSrc='/assets/images/icon-facebook.svg' imgAlt='Facebook Icon' userName='@nathanf' followers='1987' changeIcon='/assets/images/icon-up.svg' followerChange='12 Today'/>
        <LargeCard imgSrc='/assets/images/icon-facebook.svg' imgAlt='Facebook Icon' userName='@nathanf' followers='1987' changeIcon='/assets/images/icon-up.svg' followerChange='12 Today'/>
      </div>
    </div>
  )
}

export default App
