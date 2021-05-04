import React from 'react'
import Sidebar from '../components/Sidebar.jsx'

const TryItNow = (({

}) =>
    <div>
        <div class='row'>
            <div className='col-lg-3 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
                <Sidebar />
            </div>
            <div className='col-lg-9 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
                <h3 id='Try it now' style={{ marginTop: '30px', textAlign: 'left' }}>Try it now</h3>
                <p style={{ marginTop: '30px', textAlign: 'left' }}>
                    Read the <a href='http://docs.proofofexistence.com/#/get-started'>Get Started </a>section to run your own instance or try it <a href=''>online</a> first. <br />
             You can reach for us on <a href='https://t.me/doichain'>Twitter </a>or <a href='https://github.com/stallingerl/Verifile'>Github</a>.
            </p>
                <p style={{ marginTop: '30px', textAlign: 'left' }}>
                    Proofofexistence.com is website dedicated to host and support the community of users ot the PoE protocol. <br />
             It is powered by <a href='/'>Verifile.it</a>
                </p>
            </div>
        </div>
    </div>
)
export default TryItNow