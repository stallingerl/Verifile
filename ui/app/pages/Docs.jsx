import React from 'react'
import Sidebar from '../components/Sidebar.jsx'


const Docs = (({
  logo,
  brand,
  slogan,
  tagline
}) =>
  <div>
    <div class='row'>
      <div class='col-lg-12'>
        <div id='branding' class='' style={{ background: 'linear-gradient(to left bottom, hsl(15, 100%, 85%) 0%,hsl(142, 100%, 85%) 100%)' }}>
          <img src={logo} alt='Main Logo' />
          <h1>
            {brand}
          </h1>
        </div>
        <div
          id='uploads'
          className='row'
          style={{ textAlign: 'center', marginTop: '30px' }}
        >
          <div className='col-lg-3 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
            <Sidebar />
          </div>
          <div className='col-lg-9 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
            <h1>Documentation</h1>
            <p style={{marginTop: '30px', textAlign: 'left'}} >
            The original Blockchain notary service, offering instant, anonymous, distributed, and secure proof of existence for any document, agreement, or contract.
            </p>
            <br/>
            <br/>
            <img src='/img/proofofexistence.png' style={{maxWidth: '800px'}} alt='Screenshot from Proof of Existence online service'>
            </img>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Docs