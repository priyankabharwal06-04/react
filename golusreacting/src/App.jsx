import React from 'react'
import {Bookmark} from 'lucide-react'

function App() {
  return (
    <div className='bg-gray-300 h-screen w-full'>

      <div className='bg-white h-100 w-80  rounded-xl p-5'>
      <div className='flex flex-col'>
        <img className='h-10 w-10 rounded-full object-cover border border-gray-300'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqz8ZmDA9jFpjAy7_xncKzFbkGT_58E1ztfooRp6IR7A&s" ></img>
        <button>Save <Bookmark/></button>
        </div>
        <div className="center">
            <h2>Amazon<span>5 days ago</span></h2>
            <h1>Senior UI/UX Designer</h1>
            <div>
            <button>Part-Time</button>
            <button>Senior-level</button>
            </div>
        </div>
        <div className="bottom">
          <h4>$120/hr</h4>
          <h6>Mumbai,India</h6>
            <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default App