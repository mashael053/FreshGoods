import React from 'react'

function Card(props) {
  return (
    <>
<div className="bg-gray">
<div className="h-[23rem] w-[20vw] bg-gray-100 rounded-lg max-sm:w-80">
<img className="h-50"src={props.img}/>
<h1 className="text-black font-bold p-3">{props.title}</h1>
<p className="font-simebold text-center text-black m-1 ">{props.text}</p>

</div>


</div>








    </>
  )
}

export default Card