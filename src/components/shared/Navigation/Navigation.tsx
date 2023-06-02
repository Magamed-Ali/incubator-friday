import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <NavLink to='/error404'>Error</NavLink>
            <NavLink to='/login'>login</NavLink>
            <NavLink to='/new-password'>new-password</NavLink>
            <NavLink to='/password-recovery'>password-recovery</NavLink>
            <NavLink to='/profile'>profile</NavLink>
            <NavLink to='/registration'>registration</NavLink>
            <NavLink to='/test'>test</NavLink>
        </div>
    );
}

export default Navigation;