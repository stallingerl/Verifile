import React from 'react'

const Jumbo = ({
  logo,
  brand,
  slogan,
  tagline
}) => (
  <div class='row'>
    <div class='col-lg-12'>
      <div id='branding' class=''>
        <img src={logo} alt='Main Logo' />
        <h1>
          {brand}
          <br />
          <small>{slogan}</small>
        </h1>

        {
          <h4>{tagline}</h4>
        }

        <div id='actions'>
          <a class='btn' 
            id ='githubBtn'
            target='_blank'
            href='http://github.com/proofofexistence/proofofexistence'
            style={{ marginRight: '.5em', backgroundColor: '#14d7ce', border: 'none', color: 'white', font: 'bold' }}
          >
            Fork on Github
          </a>
          <a class='btn btn-primary'
            id='docsBtn'
            target='_blank'
            href='http://docs.proofofexistence.com'
            style={{ marginLeft: '.5em', backgroundColor: '#c847ff', border: 'none', color: 'white', font: 'bold'  }}
          >
            Read the docs
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Jumbo
