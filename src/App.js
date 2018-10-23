import React, { Component } from 'react';
import './App.css';
import Page from './Page';
import Nav from './Nav';
import Link from './Link';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div>
                    <Link to="/about" >
                        <button>Main</button>
                    </Link>
                    <Link to="/green" >
                        <button>green</button>
                    </Link>
                    <Link to="/red" >
                        <button>red</button>
                    </Link>
                    <Link to="/blue" >
                        <button>blue</button>
                    </Link>
                    <Link to="/brown" >
                        <button>brown</button>
                    </Link>
                </div>
                <Nav>
                    <Page path="/green">
                        <div className="page">
                            <h1 className="witos">HELLO</h1>
                        </div>
                    </Page>
                    <Page path="/red">
                        <div className="page">
                            <h1 className="witos">MY</h1>
                        </div>
                    </Page>
                    <Page path="/blue">
                        <div className="page">
                            <h1 className="witos">WORLD</h1>
                        </div>
                    </Page>
                    <Page path="/brown">
                        <div className="page">
                            <h1 className="witos">!!</h1>
                        </div>
                    </Page>
                </Nav>

            </div>
        );
    }
}

export default App;
