import * as React from 'react';
import { Box, Button, Paper, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import { contactContext } from '../Context/ContactContext';
import  '../AddContact/AddContact.css';

const AddContact = () => {
    const [form, setForm] = React.useState({
        name: '',
        phone: '',
        email: '',
        image: ''
    })

    const navigate = useNavigate()

    const { addContact } = React.useContext(contactContext)

    const handleChange = (e) => {
        const values = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(values)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        if(!form.name || !form.phone || !form.email || !form.image) {
            alert ('Заполните поля')
            return
        }
        addContact(form)
        navigate('/')
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center'
        }}>
            <Paper elevation={4} sx={{
            width: '500px',
            marginTop: '50px'
            }}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
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
                            <h2>Add Contact</h2>
                            <TextField style={{padding: '10px'}} onChange={handleChange} name='name' value={form.name} className="filled-basic" label="Name" variant="outlined"  />
                            <TextField style={{padding: '10px'}} onChange={handleChange} name='phone' value={form.phone} className="filled-basic" label="Phone" variant="outlined" />
                            <TextField style={{padding: '10px'}} onChange={handleChange} name='email' value={form.email} className="filled-basic" label="Email" variant="outlined" />
                            <TextField style={{padding: '10px'}} onChange={handleChange} name='image' value={form.image} className="filled-basic" label="Image" variant="outlined" />
                            <Button style={{padding: '10px', marginBottom: '10px'}} onClick={handleSumbit} variant='contained'>Add</Button>
                    </form>
                </div>     
            </div>
        </Paper>    
        </Box>
        
        
            
    );
};

export default AddContact;