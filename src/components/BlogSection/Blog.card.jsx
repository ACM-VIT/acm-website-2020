import React from 'react';

const BlogCard = (props) => {
    return(
        <div className="box-border events-box">
            <div className="h-full w-full">
                <img className="blog-image" alt="" src=""></img>
                <p className="blog-title top-0 right-0 left-3">{props.name}</p>
                    <p className="blog-description">{props.desc}</p>
            </div>
        </div>
    );
};


export default BlogCard;