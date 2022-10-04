import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { Navbar } from '../components/layout/Navbar';
import { Sidebar } from '../components/layout/Sidebar';
import { Article } from '../components/pages/Article';
import { Articles } from '../components/pages/Articles';
import { CreateArticle } from '../components/pages/CreateArticle';
import { Home } from '../components/pages/Home';
import { Seeker } from '../components/pages/Seeker';

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
                    <Route path='/seeker/:search' element={<Seeker />} />
                    <Route path='/article/:id' element={<Article />} />
                    <Route path='*' element={
                        <div className='jumbo'>
                            <h1>Error 404</h1>
                        </div>
                    } />
                </Routes>
            </section>

            <Sidebar />

            <Footer />
        </BrowserRouter>
    )
}