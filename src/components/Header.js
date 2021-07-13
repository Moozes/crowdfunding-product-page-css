import {Component} from 'react';
import logo from '../images/logo.svg';

export default function Header() {
    return(<header className="page-header">
        <div className="container">
            <nav>
                <img src={logo} alt="crowdfund" />
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Discover</a>
                    </li>
                    <li>
                        <a href="#">Get Started</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>);
}