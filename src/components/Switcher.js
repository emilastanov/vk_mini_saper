import React from 'react';
import {SwitcherShovel} from "../static/icons/switcherShovel";
import {SwitcherFlag} from "../static/icons/switcherFlag";

import itemsStyle from '../styles/itemsStyle.css';


const Switcher = ({state, setState, size}) => {

    const changeState = () => {
        setState(
            state === 'dig'? 'flag' : 'dig'
        );
    }

    return <div className="switcher" onClick={changeState}>
        {state === 'dig' ?
            <SwitcherShovel size={size}/> :
            <SwitcherFlag size={size}/>
        }
    </div>
};

export default Switcher;
