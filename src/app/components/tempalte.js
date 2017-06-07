/**
 * @author Fabian Dietenberger
 */

'use strict';

import React from 'react';
import Header from './header/header';
import SongPlayer from './player/player-panel';
import Home from './home/home';
import About from './about/about';
import Imprint from './imprint/imprint';
import { Route, Switch } from 'react-router-dom';

export default class Template extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/about" component={ About }/>
                        <Route exact path="/imprint" component={ Imprint }/>
                        <Route exact path="/" component={ Home }/>
                    </Switch>
                </div>
                <div className="bottom">
                    { /* TODO: put this in own bottom component */ }
                    <SongPlayer />
                </div>
            </div>
        );
    }
}
