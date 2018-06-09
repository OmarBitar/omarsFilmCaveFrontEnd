import React from 'react';

class BlogItem extends React.Component {
  render() {
    const {blog_body,/*forignKey,*/last_updated} = this.props;
  
    return ( 
    <div className='textContainorBlog' >
      <h6 className='myComments' >  {'blog posted/last updated: '+last_updated.slice(0,10)} </h6>
      <h3> <p> {blog_body} </p> </h3> 
    </div>
    );
  }
}

export default BlogItem;