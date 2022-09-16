import React from "react";
import { NavLink } from 'react-router-dom';
import { Articles } from "../pages/Articles";
import { CreateArticle } from "../pages/CreateArticle";
import { Home } from "../pages/Home";

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to='/home' element={<Home />} >Home</NavLink>
          </li>
          <li>
            <NavLink to='/articles' element={<Articles />} >Articles</NavLink>
          </li>
          <li>
          <NavLink to='/create-article' element={<CreateArticle />} >Create Article</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
