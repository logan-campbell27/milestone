import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
   
    render () {
        return(
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <span class="navbar-brand" href="#">Products</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                       <Link className="nav-item nav-link" to="/">Main</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-item nav-link" to="/new">New</Link>
                    </li>
                   
                    </ul>
                    
                </div>
                </nav>
                </div>
        )
    }
}
export default NavBar;

