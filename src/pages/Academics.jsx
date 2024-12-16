import React from 'react'

function Academics() {
  return (
    <>
    <h2 className='text-red-600 font-bold h-20 w-screen pt-5 text-3xl text-center'>Academics</h2>
      <div className="flex flex-warp justify-items-stretch  gap-10 p-20 m-70 ">
        
        <div className="card bg-rose-300 w-80 md:w-80  p-9 shadow-xl">
          <figure>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.gLoWgQhP2TXmeCJAWP_VnwHaJn&pid=Api&P=0&h=180"
              alt="Shoes"
            />
          </figure>
          <div className="card-body w-40 h-auto md:w-94  ">
            <h2 className="card-title text-center ">Pre-Primary</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>

        <div className="card bg-violet-300 w-85 md:w-94 p-12 shadow-xl">
          <figure>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.ZSJnXgNSZe6BYbTZ8YttywHaLT&pid=Api&P=0&h=180"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Primary</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card bg-green-300 w-80 md:w-94 p-10  shadow-xl">
          <figure>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.AgSEnk-syA2eZCFUZYeXrAHaLH&pid=Api&P=0&h=180"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MiddleSchool</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card bg-red-400 w-45  p-10 shadow-xl">
          <figure>
            <img className='w-70 h-55'
              src="https://tse3.mm.bing.net/th?id=OIP.CdCBHghVSFo33i1WsW5zXwHaHa&pid=Api&P=0&h=180"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Secondary</h2>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>

        <div className="card bg-orange-300 w-80 p-9  shadow-xl">
          <figure>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.LwSIy19ViJ9EpsYpYUXthwHaJ3&pid=Api&P=0&h=180"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">H Secondary</h2>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default Academics