import React from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';

const AuthorInfoComponent = ({ name, imageSrc }) => {
    return (
        /** Author Info Component */
        <div className="author-info">
            <span className="author-span">
                <LazyLoad height={200}>
                    <img className="author-image" src={imageSrc} alt={`Portrait of ${name}`} />
                </LazyLoad>
                <h2 className="author-name">{name}</h2>
            </span>
        </div>
    );
};

AuthorInfoComponent.propTypes = {
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default AuthorInfoComponent;
