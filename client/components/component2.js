import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Component2 = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <Link to="/dashboard/profile/e8c5c8c8-7de8-422e-a369-90ffad53b5a7">Go To Profile</Link>
          <Link to="/dashboard">Go To Root</Link>
        </div>
      </div>
    </div>
  )
}

Component2.propTypes = {}

export default Component2
