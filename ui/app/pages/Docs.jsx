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
        <div id='branding' class=''style={{background: 'linear-gradient(to left bottom, hsl(15, 100%, 85%) 0%,hsl(142, 100%, 85%) 100%)' }}>
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
            <h3 id='What is poe'style={{marginTop: '30px', textAlign: 'left' }}>What is Proof of Existence?</h3>
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
            <h3 id='Common uses'style={{marginTop: '30px', textAlign: 'left' }}>Common uses</h3> 
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            <strong> Demonstrating data ownership without revealing actual data.</strong>
            </p>
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            You can publicly reveal the digest and if conflict arises you can prove you had the data that generates the digest. Useful for copyrighted material, patents, etc.
            </p>
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
             Document timestamping.
            </p>
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            You can prove certain data exists at a certain moment of time. As we use the bitcoin blockchain to store the document proof, you can certify the existence of your document without the need of a central authority. Use the computing power of the whole bitcoin network to certify your data.
            </p>
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            Checking for document integrity.
            </p>
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            If you store a proof for your document and later re-upload it, the system will only recognize it if it is completely and fully the same document. The slightest change, and we'll recognize it is different, giving you the security that certified data can't be changed.
            </p>
            <h3 id='Technical foundations'style={{marginTop: '30px', textAlign: 'left' }}>Technical foundations</h3> 
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            The document is certified via embedding its SHA256 digest in the bitcoin blockchain. This is done by generating a special bitcoin transaction that encodes/contains the hash via an OP_RETURN script. This is a bitcoin scripting opcode that marks the transaction output as provably unspendable and allows a small amount of data to be inserted, which in our case is the document's hash, plus a marker to identify all of our transactions.
            </p>
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            Once the transaction is confirmed, the document is permanently certified and proven to exist at least as early as the time the transaction was confirmed. If the document hadn't existed at the time the transaction entered the blockchain, it would have been impossible to embed its digest in the transaction (This is because of the hash function's property of being second pre-image resistant). Embedding some hash and then adapting a future document to match the hash is also impossible (due to the pre-image resistance of hash functions). This is why once the bitcoin blockchain confirms the transaction generated for the document, its existence is proven, permanently, with no trust required.
            </p>
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            If anyone wants to manually confirm the document's existence at the timestamped time, they should just follow these steps:
            </p>
            <ul class="a"> <p style={{ textAlign: 'left' }}></p>
            <li>Calculate the document's SHA256 digest.</li>
            <li>Find a transaction in the bitcoin blockchain containing an OP_RETURN output with the document's hash prepended by our marker bytes, which are 0x444f4350524f4f46 (or 'DOCPROOF' in ascii).</li>
            <li>Some online services like Coin Secrets or blockchain.info's list can help you locate OP_RETURN transactions more easily.</li>
            <li>The existence of that transaction in the blockchain proves that the document existed at the time the transaction got included into a block.</li>
            </ul>
            <h3 id='Try it now'style={{marginTop: '30px', textAlign: 'left' }}>Try it now</h3> 
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            Read the <a href='http://docs.proofofexistence.com/#/get-started'>Get Started</a>section to run your own instance or try it <a href=''>online</a> first.
            </p>
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            You can reach for us on <a href='https://t.me/doichain'>Twitter</a>or <a href='https://github.com/stallingerl/Verifile'>Github</a>.
            </p>
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            Proofofexistence.com is website dedicated to host and support the community of users ot the PoE protocol.
            </p>
            <p style={{ marginTop: '30px', textAlign: 'left' }}>
            It is powered by Poex.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Docs