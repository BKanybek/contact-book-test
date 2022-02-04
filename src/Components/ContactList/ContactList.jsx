import { Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import { contactContext } from '../Context/ContactContext';

const ContactList = () => {
    const { contacts, getContacts } = useContext(contactContext)

    useEffect(() => {
        getContacts()
    }, [])


    if(!contacts) {
        return <h2>Loading...</h2>
    }


    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}} sx={{display: 'flex',  marginTop: '20vh', flexDirection: 'column', alignItems: 'center'}}>
            {
                contacts ? (
                    contacts.map((item, index) => (
                        <Grid key={index} style={{margin: '20px'}}>
                            <ContactCard item={item} key={index}/>
                        </Grid>
                    ))
                ): (<h1>Loading...</h1>)
            }
        </Grid>
    );
};

export default ContactList;