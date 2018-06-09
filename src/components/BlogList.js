import React from 'react';
import BlogItem from './BlogItem';
import Loading from './Loading';

//import * as PictureAction from './actions/PictureAction'

class BlogList extends React.Component {
    constructor(){
        super();
        this.state = {
            blogs: [],
            isLoading:false
        };
    }

    componentWillMount(){
        this.setState({isLoading: true});
        var user = process.env.REACT_APP_USERNAME;
        var password =  process.env.REACT_APP_PASSWORD;
        var base64encodedData = new Buffer(user + ':' + password).toString('base64');
        var url = process.env.REACT_APP_URL + 'get_blogs';
        fetch(url,{
            headers: new Headers({
                'Authorization': 'Basic ' + base64encodedData
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(myJson => this.setState({blogs: myJson}))
        .then(this.setState({isLoading: false}));
    }
    
  render() {
    const {blogs} = this.state;
    const BlogComponent = blogs.map((blog) => {
      return <BlogItem key={blog._id}{...blog} />
    });

    if (this.state.isLoading === true || blogs.length === 0) {
        return ( 
          <div>
            <Loading />
          </div>
        )
    }

    return ( 
        <div>{BlogComponent}</div>
    );
  }
}

export default BlogList;
