import React from 'react'

const CatHead = ({cathead}) => {
  return (
    <>
    <div>

        <h2 className='text-xl font-poppins font-semibold text-black'>{cathead}</h2>
        <div className='headLines flex items-center gap-2 mt-2'> 
            <div className="linedot w-[5px] h-[5px] bg-secendary rounded-full"></div>
            <div className="linedot w-[60px] h-[5px] bg-brandColor rounded-full"></div>
        </div>
    </div>
    </>
  )
}

export default CatHead