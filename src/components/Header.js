import React from 'react';

import moment from 'moment';

export default() => {
    return (
        <div className="header">
            <div className="navbar-fixed">
                <nav className="cyan">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center">
                            Noticias del dia {moment().format('DD MMM, YYYY')}
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
}