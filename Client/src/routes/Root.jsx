import {useState} from 'react';
import {Outlet, NavLink} from 'react-router-dom';
import {IconButton,CssBaseline} from '@mui/material';
import{ThemeProvider, createTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from "@mui/icons-material/Github";

const Root = () => {
    const [dark,setDark] = useState(false);

    const theme = createTheme({
        palette:{
            mode: dark? "dark" : "light"
        },
    });

    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <nav> 
                <div>David Bottenberg</div>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to ="/contact">Contact</NavLink>
                    <IconButton onClick={()=> setDark(!dark)}>
                        {dark? <LightModeIcon/> : <DarkModeIcon/>}
                    </IconButton>
                </div>
            </nav>
            <main className = "scroll"><Outlet/></main>
            <footer>
          <div>Made with ❤️ by David Bottenberg</div>
          <a href="https://github.com/davebott-dev/portfolio/tree/main">
            <GitHubIcon sx={{ color: 'inherit' }}/>
          </a>
        </footer>
        </ThemeProvider>
    )
}

export default Root;