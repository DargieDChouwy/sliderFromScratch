import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';
import Nav from './components/Nav';
import Link from './components/Link';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div>
                    <Link to="/about" >
                        <button>main</button>
                    </Link>
                    <Link to="/hello" >
                        <button>hello</button>
                    </Link>
                    <Link to="/my" >
                        <button>my</button>
                    </Link>
                    <Link to="/world" >
                        <button>world</button>
                    </Link>
                    <Link to="/!" >
                        <button>!</button>
                    </Link>
                </div>
                <Nav>
                    <Page path="/hello">
                        <div className="page">
                            <h1 className="witos">HELLO</h1>
                        </div>
                    </Page>
                    <Page path="/my">
                        <div className="page">
                            <h1 className="witos">MY</h1>
                        </div>
                    </Page>
                    <Page path="/world">
                        <div className="page">
                            <h1 className="witos">WORLD</h1>
                        </div>
                    </Page>
                    <Page path="/!">
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
