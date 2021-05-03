import React from 'react'
import Sidebar from '../components/Sidebar.jsx'

const WhatIsPoe = (({

}) =>
    <div>
        <div class='row'>
            <div className='col-lg-3 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
                <Sidebar />
            </div>
            <div className='col-lg-9 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
                <h3 id='WhatIsPoe' style={{ marginTop: '30px', textAlign: 'left' }}>What is Proof of Existence?</h3>
                <p style={{ marginTop: '30px', textAlign: 'left' }}>
                    A service to anonymously and securely store an online distributed proof of existence for any document. <strong>Your documents are NOT stored in our database or in the doichain blockchain</strong>, so you don't have to worry about your data being accessed by others.
            </p>
                <p style={{ marginTop: '30px', textAlign: 'left' }}>
                    What is stored is a cryptographic digest of the file, linked to the time in which you submitted the document. In this way, you can later certify that the data existed at that time. This is the first online service allowing you to publicly prove that you have certain information without revealing the data or yourself, with a decentralized certification based on the
              <a href='https://www.doichain.org/'> doichain network</a>.
            </p>
                <p style={{ marginTop: '30px', textAlign: 'left' }}>
                    The key advantages are anonymity, privacy, and getting a decentralized proof which can't be erased or modified by anyone (third parties or governments).<strong> Your document's existence is permanently validated by the blockchain even if this site is compromised or down</strong>, so you don't depend or need to trust any central authority. All previous data timestamping solutions lack this freedom.
            </p>
            </div>
        </div>
    </div>
)
export default WhatIsPoe