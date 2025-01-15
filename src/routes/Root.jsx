import {Outlet} from 'react-router-dom';
import {IconButton} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from "@mui/icons-material/Github";

const Root = () => {


    return (
        <>
            <nav> 
                <div>David Bottenberg</div>
                <div>
                    <div>Home</div>
                    <div>Projects</div>
                    <div>Contact</div>
                    <IconButton>
                        <LightModeIcon/>
                    </IconButton>
                </div>
            </nav>
            <main className = "scroll"><Outlet/></main>
            <footer>
          <div>Made with ❤️ by David Bottenberg</div>
          <a href="https://github.com/davebott-dev">
            <GitHubIcon sx={{ color: 'black' }}/>
          </a>
        </footer>
        </>
    )
}

export default Root;