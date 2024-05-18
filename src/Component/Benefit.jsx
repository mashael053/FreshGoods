import React from 'react'

function Benefit(props) {
  return (
    <>
       <div className="flex "> 
       <div className=" flex flex-col justify-center items-center gap-3 mt-12 ">
       <img className="h-20  "src={props.images}/>
       <h1 className="font-bold text-black-700">{props.title}</h1>
    <p className="text-sm w-40 text-center">{props.pragragh}</p>
      </div>
</div>

    </>
 
  )
}

export default Benefit