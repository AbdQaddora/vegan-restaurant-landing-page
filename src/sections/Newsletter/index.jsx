import React from 'react'
import Container from '../../components/Container'

import email from '../../assets/images/icons/email2.png'


import './style.css';
import Button from '../../components/Button';
import GridWithThreeColumns from '../../components/GridWithThreeColumns';
const Newsletter = () => {
    return (
        <Container>
            <div className='newsletter'>
                <GridWithThreeColumns>
                    <p>
                        <img src={email} alt="email" /> Subscribe to our Newsletter
                    </p>
                    <input type="text" placeholder='Your Email id' />
                    <Button>Subscribe</Button>
                </GridWithThreeColumns>
            </div>
        </Container>
    )
}

export default Newsletter