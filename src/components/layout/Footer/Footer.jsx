/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import email from '../../../vectors/Email.svg'
import instagram from '../../../vectors/Instagram.svg'
import facebook from '../../../vectors/Facebook.svg'
import vit from '../../../vectors/Logos_ACM.png'
import { ReactComponent as acm } from '../../../vectors/AcmLogo.svg'
import '../../../tailwind.css'

export default class Footer extends Component {
  render () {
    return (
      <div id='footer' className='footerContent'>
        <Grid className='FooterGrid' container spacing={0}>

          <Grid className='Contacts' item xs={12} md={3}>
            <div className='Contact'>
              <img className='EmailIcon' src={email} />
              <p className='Email font18'> outreach.acmvit@gmail.com.</p>
              <h3 className='font18'>
                Vellore Institute of Technology
                <br />
                Vellore, Tamil-Nadu-632014
              </h3>
            </div>

          </Grid>

          <Grid className='social' item xs={12} md={3}>
            <div className='socMed'>
              <a className='fb' target='blank' href='https://www.facebook.com/ACM.VITU/'><img alt='fb' className='sm' src={facebook} /></a>

              <a className='ig' target='blank' href='https://www.instagram.com/acmvit/?hl=en'><img alt='insta' className='sm' src={instagram} /></a>

            </div>
          </Grid>

          <Grid className='vitLogo' item xs={12} md={3}>
            <div className='vitlg'>
              <a href='https://vit.ac.in' target='_blank' rel='noopener noreferrer'><img className='vitl' src={vit} alt='vit logo' /></a>
            </div>
            {/* <a href="https://acmvit.in" target="_blank" rel="noopener noreferrer" className="no_blue"><p className="font18 bold center">Developed by ACM-VIT</p></a> */}
          </Grid>

          <Grid className='acmLogo' item xs={12} md={3}>
            <div className='acm_logo_div'>
              <a href='https://acmvit.in' target='_blank' rel='noopener noreferrer'><img className='acm_logo' src={acm} alt='acm logo' /></a>
            </div>
            {/* <a href="https://acmvit.in" target="_blank" rel="noopener noreferrer" className="no_blue"><p className="font18 bold center">Developed by ACM-VIT</p></a> */}
          </Grid>

        </Grid>

      </div>
    )
  }
}
