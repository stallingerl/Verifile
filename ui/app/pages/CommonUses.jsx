import React from 'react'
import Sidebar from '../components/Sidebar.jsx'

const CommonUses = (({

}) =>
  <div>
    <div class='row'>
      <div className='col-lg-3 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
        <Sidebar />
      </div>
      <div className='col-lg-9 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
        <h3 id='Common uses' style={{ marginTop: '30px', textAlign: 'left' }}>Common uses</h3>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          <strong>Demonstrating data ownership without revealing actual data.</strong>
        </p>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          You can publicly reveal the digest and if conflict arises you can prove you had the data that generates the digest. Useful for copyrighted material, patents, etc.
            </p>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          <strong>Document timestamping.</strong>
        </p>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          You can prove certain data exists at a certain moment of time. As we use the <a href='https://www.blockchain.com/explorer'>bitcoin blockchain</a> to store the document proof, you can certify the existence of your document without the need of a central authority. Use the computing power of the whole bitcoin network to certify your data.
            </p>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          <strong>Checking for document integrity.</strong>
        </p>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          If you store a proof for your document and later re-upload it, the system will only recognize it if it is completely and fully the same document. The slightest change, and we'll recognize it is different, giving you the security that certified data can't be changed.
            </p>
      </div>
    </div>
  </div>
)
export default CommonUses