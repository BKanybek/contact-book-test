import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from '../ContactList/ContactList';
import logo512 from '../img/logo512.png'
import './Contact.css'



const Contact = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px'
            }}>
                <div style={{marginRight: '10px', alignSelf: 'center'}}>
                    <img className='react-logo' src={logo512}/>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <h2 style={{fontSize: '30px', color: '#61DAFB'}}>Contact Book</h2>
                    <Link to="/add" style={{textDecoration: 'none'}}>
                        <a href="#" className="btn">Add Contact</a>
                    </Link>
                    
                </div>
            </div>


            
            <div style={{marginTop:"15vh"}}>
                <ContactList/> 
            </div>
                
        </div>
    );
};

export default Contact;