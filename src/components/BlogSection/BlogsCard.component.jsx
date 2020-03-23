/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';

const BlogsCard = props => {
    const {blogsInfo} = props;

    const blogsImg = {
        backgroundImage: `url(${blogsInfo.avatarURL})`,
        backgroundSize: '8rem 8rem'
    };

    return(
        <section className="box-border events-box flex flex-row flex-no-wrap justify-around">
            <div className="h-full w-full">
                <div className="blog-image" style={blogsImg} />
                <p className="blog-title top-0 right-0">{blogsInfo.name}</p>
                <p className="blog-description">{blogsInfo.desc}</p>
            </div>
        </section>
    );
};

BlogsCard.propTypes = {
    blogsInfo: PropTypes.objectOf(PropTypes.any).isRequired
  };

export default BlogsCard;