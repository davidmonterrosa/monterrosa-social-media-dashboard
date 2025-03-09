import { useState, useEffect } from 'react'
import './App.css'
import LargeCard from './components/LargeCard'
import SmallCard from './components/SmallCard'
import { storeThemeToggle, getSocialMediaData } from './services/services'
import upArrow from '../public/assets/images/icon-up.svg'
import downArrow from '../public/assets/images/icon-down.svg'


function App() {
  
  const [switch1, setSwitch1] = useState(true);
  const [socialMediaData, setSocialMediaData] = useState([]);
  const fetchData = async () => {
    const dataMetrics = await getSocialMediaData();
    setSocialMediaData(dataMetrics.SocialMedia);
  }

  const isDark = () => {
    if(document.documentElement.classList.contains('dark')) {
      setSwitch1(false);
    }
  }

  useEffect(() => {
    fetchData();
    isDark();
  }, [])



  return (
    <div className='min-h-screen h-full dark:bg-veryDarkBlue bg-white'>
      <div className='flex flex-col lg:flex-row lg:justify-between dark:bg-topVeryDarkBlue bg-topVeryPaleBlue dark:text-white text-veryDarkBlue md:px-40 px-8 pt-10 pb-36 rounded-b-2xl'>

        <div className='pb-4 border-b-[.5px] border-[textDesaturatedBlue] lg:border-none'>
          <h2 className='text-2xl md:text-3xl font-bold font-["Inter"]'>Social Media Dashboard</h2>
          <h4 className='dark:text-textDesaturatedBlue text-darkGrayishBlue'>Total Followers: 23,004</h4>
        </div>

        <div className='lg:place-items-start pt-4'>
          <label className="flex justify-between items-center mb-5 cursor-pointer text-darkGrayishBlue dark:text-textDesaturatedBlue dark:hover:text-white">
            <span className="md:mr-3 text-sm font-normal font-['Inter']">Dark Mode</span>
            <input type="checkbox" value="" className="sr-only peer" checked={switch1} onChange={() => {
              setSwitch1(!switch1)
              storeThemeToggle()
            }}/>
            <div className="relative w-11 h-6 bg-[#aeb3cb] dark:bg-gradient-to-r dark:from-sky-500 dark:to-emerald-500 dark:hover:brightness-110 hover:bg-gradient-to-r hover:from-sky-500 hover:to-emerald-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white dark:after:bg-gray-800 dark:after:border-gray-600 after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 "></div>
          </label>
        </div>
      </div>

      <div className='grid xl:grid-cols-4 xl:gap-8 lg:grid-cols-2 lg:gap-8 gap-6 dark:text-white text-veryDarkBlue md:px-40 px-8 mt-[-100px] mb-12'>
        {
          socialMediaData && socialMediaData.length > 0 ? socialMediaData.map((socialMediaApp, index) => (
              <LargeCard key={index} socialName={socialMediaApp.Name} imgSrc={socialMediaApp.Image} userName={socialMediaApp.Username}   followers={socialMediaApp.FollowerCount} changeIcon={socialMediaApp.ChangeIcon} followerChange={`${socialMediaApp.FollowerChange} Today`} />
            ))
            : null
        }
      </div>

      <h3 className='dark:text-white text-darkGrayishBlue md:px-40 px-8 text-2xl tracking-wider font-bold font-["Inter"]'>Overview - Today</h3>

      <div className='grid xl:grid-cols-4 xl:grid-rows-1 xl:gap-8 lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 gap-4 dark:text-white text-veryDarkBlue md:px-40 px-8 mt-6 pb-12'>
        {
          socialMediaData && socialMediaData.length > 0 ? socialMediaData.map((socialMediaApp, index) => (
              <div key={index}>
                <SmallCard statName={socialMediaApp.OverviewDetails[0].Label} imgSrc={socialMediaApp.Image} statValue={socialMediaApp.OverviewDetails[0].Count} changeIcon={socialMediaApp.OverviewDetails[0].Change > 0 ? upArrow : downArrow } percentChange={`${socialMediaApp.OverviewDetails[0].Change}%`} />
                <SmallCard statName={socialMediaApp.OverviewDetails[1].Label} imgSrc={socialMediaApp.Image} statValue={socialMediaApp.OverviewDetails[1].Count} changeIcon={socialMediaApp.OverviewDetails[1].Change > 0 ? upArrow : downArrow } percentChange={`${socialMediaApp.OverviewDetails[1].Change}%`} />
              </div>
            )
          )
          :
          null
        }
      </div>

    </div>
  )
}

export default App
