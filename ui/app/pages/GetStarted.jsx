import React from 'react'
import Sidebar from '../components/Sidebar.jsx'

const GetStarted = (({
}) =>
  <div>
    <div class='row'>
      <div className='col-lg-3 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
        <Sidebar />
      </div>
      <div className='col-lg-9 no-border' style={{ margin: 0, backgroundColor: 'transparent' }}>
        <h1 style={{ marginTop: '30px' }}>Get Started</h1>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          You can run your own instance by following these steps
              </p>
        <h3 id='Setup' style={{ marginTop: '30px', textAlign: 'left' }}>Setup</h3>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          To use Proof of Existence, you need to have <a href='https://nodejs.org/en/'>Node JS</a> installed. We recommend using the 8.11.1 version (LTS).
              </p>
        <h3 id='Install Node' style={{ marginTop: '30px', textAlign: 'left' }}>Install Node</h3>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          You can download <code>node</code> from the official <a href='https://nodejs.org/en/'>Node JS website</a>.
              </p>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          For Mac OS X, you can also use <a href="http://brew.sh" target="_blank" rel="noopener"><code>brew</code></a> - follow this guide.
              </p>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          To install a specific version, you can use <a href="https://github.com/creationix/nvm" target="_blank" rel="noopener" style={{ color: '#e96900' }}><code>nvm</code>
          </a> that will help you manage different installations of node.
              </p>
        <h3 id='Installation' style={{ marginTop: '30px', textAlign: 'left' }}>Installation</h3>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          Just download the code from Github and install the dependencies.
              </p>
        <code style={{ display: 'block', whiteSpace: 'pre-wrap', textAlign: 'left', backgroundColor: 'whitesmoke', color: '#525252' }}>
          git clone git@github.com:proofofexistence/proofofexistence.git <br />
              cd proofofexistence <br />
              npm install
              </code>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          Now let's build the CSS assets before starting the app.
              </p>
        <code style={{ display: 'block', whiteSpace: 'pre-wrap', textAlign: 'left', backgroundColor: 'whitesmoke', color: '#525252' }}>
          npm run build
              </code>
        <h3 id='Configuration' style={{ marginTop: '30px', textAlign: 'left' }}>Configuration</h3>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          You need to create a config file to store your own server, BTC wallet and email information.
              </p>
        <code style={{ display: 'block', whiteSpace: 'pre-wrap', textAlign: 'left', backgroundColor: 'whitesmoke', color: '#525252' }}>
          cp config/test.yaml config/local-development.yaml
              </code>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          Report to the config page to learn more about config variables.
              </p>
        <code style={{ display: 'block', whiteSpace: 'pre-wrap', textAlign: 'left', backgroundColor: 'whitesmoke', color: '#525252' }}>
          npm start
              </code>
        <p style={{ marginTop: '30px', textAlign: 'left' }}>
          The app will be listening at <a href="http://localhost:3004/" target="_blank" rel="noopener">http://localhost:3004/</a>
        </p>
      </div>
    </div>
  </div>
)
export default GetStarted