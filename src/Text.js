import React from 'react';
import './index.css';
import T from 'prop-types';

const Text = ({ size, children, ...props }) => (
    <div className="text" style={{ fontSize: size, ...props }}>
        {children}
    </div>
);


export default Text;

Text.propTypes = {
    size: T.string,
    children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired
}

Text.defaultProps = {
    size: '14px'
}
