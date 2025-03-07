import React from 'react'

const LargeCard = (props) => {
  return (
    <div className='flex flex-col items-center gap-6 dark:bg-blue-900 rounded-sm px-14 py-5'>
      <div className='flex'>
        <span>
          <img className='aspect-square' src={props.imgSrc} alt='Social Media Icon' />
        </span>
          <p className='font-["Inter"] text-sm'>{props.userName}</p>
      </div>
      <div>
        <h1 className='text-6xl font-bold'>{props.followers}</h1>
        <p className='uppercase tracking-[.5em] font-["Inter"]'>follower</p>
      </div>
      <div className='flex'>
        <span className='place-self-center'>
          <img className='aspect-[8/4] w-2' src={props.changeIcon} alt='directional arrow' />          
        </span>
        <p className='font-["Inter"] text-sm'>{props.followerChange}</p>            
      </div>
    </div>
  )
}

export default LargeCard