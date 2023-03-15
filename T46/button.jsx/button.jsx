// create a react button to open a website in new tab

import React from 'react';
import './button.css';

const Button = ({ url, text }) => {

    return (
        <button className="button" onClick={() => window.open(url, '_blank')}>
            {text}
        </button>
    );
}
