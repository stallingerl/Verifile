import React from 'react'
import Sidebar from '../components/Sidebar.jsx'

const TechnicalFoundations = (({

}) =>
  <div>
    <div class='row'>
      <div className='col-lg-3 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
        <Sidebar />
      </div>
      <div className='col-lg-9 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
        <h3 id='Technical foundations' style={{ marginTop: '30px', textAlign: 'left' }}>Technical foundations</h3>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          The document is certified via embedding its <a href='https://en.wikipedia.org/wiki/SHA-2'>SHA256</a> digest in the bitcoin blockchain. This is done by generating a special bitcoin transaction that encodes/contains the hash via an <a href='https://en.bitcoin.it/wiki/OP_RETURN'>OP_RETURN script</a>. This is a <a href='https://en.bitcoin.it/wiki/Script'>bitcoin scripting opcode</a> that marks the transaction output as <a href='https://en.bitcoin.it/wiki/Script#Provably_Unspendable.2FPrunable_Outputs'>provably unspendable</a> and allows a small amount of data to be inserted, which in our case is the document's hash, plus a marker to identify all of our transactions.
            </p>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          Once the transaction is confirmed, the document is permanently certified and proven to exist at least as early as the time the transaction was confirmed. If the document hadn't existed at the time the transaction entered the blockchain, it would have been impossible to embed its digest in the transaction (This is because of the hash function's property of being <a href='https://en.wikipedia.org/wiki/Cryptographic_hash_function#Properties'>second pre-image resistant</a>). Embedding some hash and then adapting a future document to match the hash is also impossible (due to the <a href='https://en.wikipedia.org/wiki/Cryptographic_hash_function#Properties'>pre-image resistance of hash functions</a>). This is why <strong> once the bitcoin blockchain confirms the transaction generated for the document, its existence is proven, permanently, with no trust required</strong>.
            </p>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          If anyone wants to manually confirm the document's existence at the timestamped time, they should just follow these steps:
            </p>
      </div>
    </div>
  </div>
)
export default TechnicalFoundations