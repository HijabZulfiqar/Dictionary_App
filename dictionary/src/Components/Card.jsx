import React from 'react'

const Card = ({children}) => {
  return (
    <div className="bg-white min-h-screen">
    <div className="md:max-w-xl sm:max-w-sm mx-auto pt-10">
      <div className="rounded-lg bg-white  p-6">
        <div className="flex flex-col md:flex-col ">
          
        
        {children}
         
          
        </div>
      
      </div>
    </div>
  </div>
  )
}

export default Card
