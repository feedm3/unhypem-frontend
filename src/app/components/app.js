/**
 * @author Fabian Dietenberger
 */

'use strict';

import React from 'react';
import Template from './tempalte';
import { HashRouter } from 'react-router-dom';

export default () => {
    // TODO put everything from template component inside here
    return (
        <HashRouter>
            <Template />
        </HashRouter>
    );
};
