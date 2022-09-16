import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Articles } from '../components/pages/Articles';
import { Home } from '../components/pages/Home';

export const CustomRoutes = () => {
    return (
        <BrowserRouter>
            {/* Layout */}


            {/* Central content & Routes */}
            <section id='content' className='content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/articles' element={<Articles />} />
                </Routes>
            </section>
        </BrowserRouter>
    )
}