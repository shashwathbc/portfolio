import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ResumePage from './Pages/ResumePage';
import { Routes ,Route } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch'
import { IconButton } from "@material-ui/core";


function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    }else{
      setTheme('light-theme');
      setChecked(true)
    }
  }


  return (
    <div className="App">
       <Sidebar navToggle={navToggle}/>
        
       <div className="theme">
          <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                <Switch
                  value=""
                  checked={checked}
                  inputProps={{ 'aria-label': '' }}
                  size="medium"
                  onClick={themeToggler}
                  
                />
              </div>
            </div>
        </div>

        <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
        </div>



       < MainContentStyled>
            <div className="lines">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
              <div className="line-4"></div>
            </div>
           
            <Routes>

            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/resume' element={<ResumePage/>} />
            <Route path='/portfolios' element={<PortfoliosPage/>} />
            <Route path='/blogs' element={<BlogsPage/>} />
            <Route path='/contact' element={<ContactPage/>} />
             

            </Routes>
           
           
       </ MainContentStyled>
    </div>
      

   
  );
}


const MainContentStyled = styled.main`
position: relative;
margin-left: 16.3rem;
min-height: 100vh;
@media screen and (max-width:1200px){
    margin-left: 0;
  }

.lines{
  position: absolute;
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  opacity: 0.4;
  z-index:-1;
  .line-1 , .line-2 , .line-3 , .line-4{
    width: 1px;
    min-height: 100vh;
    background-color: var( --border-color);
  }
}

`;

export default App;
