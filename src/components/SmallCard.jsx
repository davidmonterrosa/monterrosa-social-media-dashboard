import React from 'react'

const SmallCard = (props) => {
  return (
    <div className='p-6 dark:bg-cardDarkDesaturatedBlue bg-lightGrayishBlue rounded-md hover:brightness-90 dark:hover:brightness-150 hover:cursor-pointer mb-8'>
        <div className='flex justify-between pb-6'>
            <p className='text-textDesaturatedBlue text-sm'>{props.statName}</p>
            <span className='self-center'>
                <img src={props.imgSrc} alt="Social Media Icon" />
            </span>
        </div>
        <div className='flex justify-between'>
            <h3 className='text-3xl font-bold font-["Inter"]'>{props.statValue}</h3>
            <div className='flex self-end'>
                <span className='self-center mr-1'>
                    <img src={props.changeIcon} alt="change icon" />
                </span>
                {
                    parseInt(props.percentChange) > 0 ? 
                    <small className='text-limeGreen' >{props.percentChange}</small>
                    :
                    <small className='text-brightRed' >{parseInt(props.percentChange) * -1}%</small>
                }
            </div>
        </div>
    </div>
  )
}

export default SmallCard