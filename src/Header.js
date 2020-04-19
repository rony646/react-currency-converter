import React, {Component} from 'react'
import logo from './img/logo.png'
import github_logo from './img/github.png'
import 'materialize-css/dist/css/materialize.min.css'
import './Header.css'


class Header extends Component {
    render() {
        return(
         <div>
            <nav className='navStyle'>
                <button className='btn-floating btn-large' id='btn'><i className='material-icons' id='btn-icon'>menu</i></button>
                <img src={logo} alt='logo' id='logo' className='brand-logo' ></img>
                <a id='github_link' href="https://github.com/rony646" target="blank"><img src={github_logo} alt='github_logo' id='github_logo'></img></a>
            </nav>
        </div>
        )
    }
}

export default Header
