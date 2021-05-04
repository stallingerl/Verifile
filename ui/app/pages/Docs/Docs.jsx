import React from 'react'
import { Container, Col, Row, Jumbotron, Button } from "react-bootstrap"
import Sidebar from '../../components/Sidebar.jsx'
import "./Docs.scss"


const Docs = (({
  logo,
  brand,
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
            <p style={{ marginTop: '30px', textAlign: 'left' }} >
              The original Blockchain notary service, offering instant, anonymous, distributed, and secure proof of existence for any document, agreement, or contract.
            </p>
            <br />
            <br />
            <img src='/img/proofofexistence.png' style={{ maxWidth: '800px' }} alt='Screenshot from Proof of Existence online service'>
            </img>
            <ul class="a" style={{ textAlign: 'left' }}>
              <li>Calculate the document's SHA256 digest.</li>
              <li>Find a transaction in the bitcoin blockchain containing an OP_RETURN output with the document's hash prepended by our marker bytes, which are 0x444f4350524f4f46 (or 'DOCPROOF' in ascii).</li>
              <li>Some online services like <a href='https://www.multichain.com/'>Coin Secrets</a> or <a href='https://www.blockchain.com/error'>blockchain.info's</a> list can help you locate OP_RETURN transactions more easily.</li>
              <li>The existence of that transaction in the blockchain proves that the document existed at the time the transaction got included into a block.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Docs