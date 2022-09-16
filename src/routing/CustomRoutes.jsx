import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { Navbar } from '../components/layout/Navbar';
import { Sidebar } from '../components/layout/Sidebar';
import { Articles } from '../components/pages/Articles';
import { CreateArticle } from '../components/pages/CreateArticle';
import { Home } from '../components/pages/Home';

export const CustomRoutes = () => {
    return (
        <BrowserRouter>
            {/* Layout */}
            <Header />
            <Navbar />
            
            {/* Central content & Routes */}
            <section id='content' className='content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/articles' element={<Articles />} />
                    <Route path='/create-article' element={<CreateArticle />} />
                </Routes>
            </section>

            <Sidebar />

            <Footer />
        </BrowserRouter>
    )
}