import React from 'react'
import Sidebar from '../components/Sidebar.jsx'


const Docs = () => 
<div>
  <h1>Documentation</h1>
  <div
    id='uploads'
    className='row justify-content-md-center'
    style={{ textAlign: 'center' }}
  >
    <div className='card col-lg-6 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
      <Sidebar />
    </div>
    <div className='card col-lg-6 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
     Text
    </div>
  </div>
  </div>
export default Docs