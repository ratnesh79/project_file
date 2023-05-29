import React from 'react'
import { WhatsappShareButton } from 'react-share'
import {WhatsappIcon} from 'react-share'

function ShareLink({link}) {


    return (
      <>
        <div>
         <WhatsappShareButton url={link}> 
          <WhatsappIcon logoFillColor="green" round={true}></WhatsappIcon>
         </WhatsappShareButton>
        </div>
       
      </>
    )
  }
  
  export default ShareLink;