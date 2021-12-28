import React from 'react';
import { Route } from 'react-router-dom';
import '../App.css';

const AppRoute = ({
    LeftNav, Header, Content, ...rest
}) => {
    return (
        <Route
            {...rest}
            render={() => (
                <div>
                    <Header/>
                    <div style={{clear: "both"}}></div>
                    <div className="row">
                        <div className="column-1">
                            <LeftNav />
                        </div>
                        <div className="column-2">
                            <Content />
                        </div>
                        
                    </div>
                </div>
            )} />
    );
}

export default AppRoute;