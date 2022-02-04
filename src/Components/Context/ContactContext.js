import React, { createContext, useReducer } from 'react';
import { API } from '../Consts';
import axios from 'axios';

export const contactContext = createContext() 

const INIT_STATE = {
    contacts: [],
    contactToEdit: null
}

const reducer = (state, action) => {
    switch(action.type){
        case 'GET_CONTACTS':
            return {...state, contacts: action.payload};
        case 'GET_CONTACT_TO_EDIT':
            return {...state, contactToEdit: action.payload};
        default:
            return state
    }
}


const ContactContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function addContact(newContact) {
        try {
            await axios.post(API, newContact)
            getContacts()
        } catch (error){
            alert(error);
        }
    }

    async function getContacts () {
        try{
            const res = await axios(API)
            let action = {
                type: 'GET_CONTACTS',
                payload: res.data
            }
            dispatch(action)
        }catch(error){
            alert(error);
        }
    }

    async function deleteContact (id) {
        await axios.delete(`${API}/${id}`)
        getContacts()
    }

    async function getContactToEdit (id) {
        try {
            let res = await axios (`${API}/${id}`)
            let action = {
                type: 'GET_CONTACT_TO_EDIT',
                payload: res.data
            }
            dispatch(action)
        }catch(error){
            alert(error);
        }
    }

    async function saveEditedContact (editedContact) {
        try {
            await axios.patch(`${API}/${editedContact.id}`, editedContact)
            getContacts()
        }catch(error){
            alert(error);
        }
    }


    return (
        <contactContext.Provider
            value={{
                contacts: state.contacts, 
                contactToEdit: state.contactToEdit,
                addContact,
                getContacts,
                deleteContact,
                getContactToEdit,
                saveEditedContact
            }}
        
        >
            {children}
        </contactContext.Provider>
    );


}


    

export default ContactContext;