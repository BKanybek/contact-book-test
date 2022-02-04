import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddContact from './Components/AddContact/AddContact';
import Contact from './Components/Contact/Contact';
import ContactContext from './Components/Context/ContactContext';
import EditContact from './Components/EditContact/EditContact';


const MyRoutes = () => {
    return (
        <ContactContext>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Contact/>}/>
                    <Route path='/add' element={<AddContact/>}/>
                    <Route path='/edit/:name/:id' element={<EditContact/>}/>
                </Routes>
            </BrowserRouter>
        </ContactContext>
    )
};

export default MyRoutes;