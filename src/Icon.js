import React from 'react';
import T from 'prop-types';
import iconsConfig from './iconsConfig';

const Icon = ({ name, ...props }) => {
    const IconC = iconsConfig[name];
    return <IconC {...props} />
};

Icon.propTypes = {
    name: T.string.isRequired,
    size: T.string,
    color: T.string,
}

Icon.defaultProps = {
    size: "13px",
    color: "#000",
}

export default Icon;