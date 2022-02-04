import { Box, Button, Paper, TextField  } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { contactContext } from '../Context/ContactContext';

const EditContact = () => {
    const params = useParams()
    const {getContactToEdit, contactToEdit, saveEditedContact} = useContext(contactContext)
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        image: ''
    })

    
    const navigate = useNavigate()


    useEffect(() =>{
        if(contactToEdit){
            setForm(contactToEdit)
        }
    }, [contactToEdit])


    useEffect(() => {
        getContactToEdit(params.id)
    }, [])


    function handleSubmit(e){
        let editedContact = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(editedContact)
        
    }


    function handleSave(){
        saveEditedContact(form)
        navigate('/')
    }

    return (
        <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: '40px auto',
                 maxWidth: 1000,
                height: 'auto',
                 p: '10px'
                 },
            }}
        >
            <Paper elevation={3}>
                <h1 style={{textAlign: 'center'}}>Update Contact</h1>
                <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
                    <div>
                        <img width='300px' src={form.image} alt={form.name}/>
                    </div>
                    <div style={{
                        width: '450px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <form noValidate autoComplete='off'
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        >   
                            <TextField 
                                style={{padding: '10px'}}
                                name='name'
                                onChange={handleSubmit}
                                value={form.name}
                                variant='outlined'
                                label='Name'/>
                            <TextField
                                style={{padding: '10px'}}
                                name='phone'
                                onChange={handleSubmit}
                                value={form.phone}
                                variant='outlined'
                                label='Phone'/>
                            <TextField
                                style={{padding: '10px'}}
                                name='email'
                                onChange={handleSubmit}
                                value={form.email}
                                variant='outlined'
                                label='Email'/>
                            <TextField
                                style={{padding: '10px'}}
                                name='image'
                                onChange={handleSubmit}
                                value={form.image}
                                variant='outlined'
                                label='Image'
                            />
                            <Button onClick={handleSave} variant='contained'>Save</Button>
                        </form>
                    </div>
                </div>
            </Paper>
        </Box>
    );
};

export default EditContact;