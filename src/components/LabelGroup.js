import React from 'react';

import itemsStyle from '../styles/itemsStyle.css';

export const LabelGroup = ({children, align, style}) => (
    <div className={`label_group ${align}`} style={style}>
        {children}
    </div>
);
