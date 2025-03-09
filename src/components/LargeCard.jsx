import React, { useState } from 'react'

const LargeCard = (props) => {
  const [textColor, setTextColor] = useState("")


  const setColorGreen = () => {
    setTextColor("text-limeGreen")
    return props.changeIcon;
  }

  const setColorRed = () => {
    setTextColor("text-brightRed")
    return props.changeIcon;
  }
  return (
      <div className= {`rounded-md pt-1 hover:cursor-pointer hover:brightness-90 dark:hover:brightness-150 
        ${props.socialName == "Instagram" ? "bg-gradient-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)]" : null}  
        ${props.socialName == "Facebook" ? "bg-Facebook" : null}  
        ${props.socialName == "Twitter" ? "bg-Twitter" : null}  
        ${props.socialName == "Youtube" ? "bg-Youtube" : null}  
      `}>
        <div className=' flex flex-col items-center gap-6 dark:bg-cardDarkDesaturatedBlue bg-lightGrayishBlue  rounded-b-md px-14 py-5'>
          <div className='flex'>
            <span>
              <img className='aspect-square pr-2' src={props.imgSrc} alt='Social Media Icon' />
            </span>
              <p className='dark:text-textDesaturatedBlue text-darkGrayishBlue font-["Inter"] text-sm'>{props.userName}</p>
          </div>
          <div>
            <h1 className='text-6xl font-bold'>{props.followers}</h1>
            <p className='uppercase dark:text-textDesaturatedBlue text-darkGrayishBlue tracking-[.42em] font-normal font-["Inter"] text-sm'>followers</p>
          </div>
          <div className='flex'>
            <span className='self-center'>
              <img className='mr-1' src={props.changeIcon} alt='directional arrow' />          
            </span>
            {

              parseInt(props.followerChange) > 0 ?
              <p className='font-["Inter"] text-sm text-limeGreen'>
                {props.followerChange}
              </p>
              :
              <p className='font-["Inter"] text-sm text-brightRed'>
                {parseInt(props.followerChange) * -1} Today
              </p>
            }
          </div>
        </div>
      </div>
  )
}

export default LargeCard