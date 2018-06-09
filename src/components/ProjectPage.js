import React from 'react';
import PictureItem from './PictureItem';
import BlogItem from './BlogItem';
import Loading from './Loading';

class ProjectPage extends React.Component {
  constructor(){
    super()
    this.state = {
      project : {},
      isLoading:false
    }
  }
  componentWillMount(){
    //the if statment is if user goes to praject item path directly rather starting from the homepage
    if(this.props.location.state){
      const {key} = this.props.location.state;
      const project_id = key;
      var user = process.env.REACT_APP_USERNAME;
          var password =  process.env.REACT_APP_PASSWORD;
          var base64encodedData = new Buffer(user + ':' + password).toString('base64');
          let url = new URL(process.env.REACT_APP_URL + 'get_project/'+project_id);

          this.setState({isLoading: true});

        fetch(url,{
            headers: new Headers({
                'Authorization': 'Basic ' + base64encodedData
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(project => this.setState({project}))
        .then(this.setState({isLoading: false}));
    } else {
      console.log('redirecting to homepage');
      window.location.assign("/");
    }
     //got to the top of the page once loaded
     document.body.scrollTop = 0;
  }

  changeBG(newStyle){
    //document.body.classList = 'test';
    for(var i in newStyle.body){
      document.body.style[i] = newStyle.body[i];
    }
    
  }

  render() {
    //set defult bg
    const BGStyle = {
      body : {
      backgroundImage:  'url(http://res.cloudinary.com/omars-cave/image/upload/e_auto_contrast/v1528500790/filmCaveWebBG.png)',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      backgroundSize: 'cover',
      webkitBackgroundSize: 'cover',
      mozBackgroundSize: 'cover',
      oBackgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundColor:'white',
    }}
    this.changeBG(BGStyle);
    //get the data from state useing the following function
    var projectObject = {};
    if (this.state.project.project) {
      //get project data
      const {_id,title,video_link,details,comments,last_updated} = this.state.project.project;
      projectObject._id = _id;
      projectObject.title = title;
      projectObject.video_link = video_link;
      projectObject.details = details;
      projectObject.comments = comments;
      projectObject.last_updated = last_updated;
        //extract the date
        projectObject.last_updated = projectObject.last_updated.slice(0,10);
        //extract the link
        var garbageString = 'https://youtu.be/';
        projectObject.video_link = projectObject.video_link.replace(garbageString,'');
    }
    //create embed link
    var link = 'https://www.youtube.com/embed/' + projectObject.video_link;

    if (this.state.isLoading === true || link.length === 0) {
      return ( 
        <div>
          <Loading />
        </div>
      )
    }

    //get the pictures
    if (this.state.project.picture){

      const {picture} = this.state.project;
      projectObject.image = picture.map((pic) => {
        return <PictureItem  key={pic._id}{...pic} />
      });
    }

      //get the blogs
      if (this.state.project.blog){
        const {blog} = this.state.project;
        projectObject.blog = blog.map((blog) => {
          return <BlogItem key={blog._id}{...blog} />
        });
      }
    return ( 
    <div>

      <div className='videoContainor'>
        <h1> {projectObject.title} </h1>
        <iframe src={link}  title={ projectObject._id}
        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <h6>{'published: '+projectObject.last_updated}</h6>
        <h3>{projectObject.details}</h3>
      </div>
      
      <div className='textContainor' >
        <h3 className='myComments' > My comments ... </h3>
        <h3>"{projectObject.comments}"</h3> 
      </div>

      <div className='titleTag'>
        <h3> {projectObject.title} pictures ... </h3> 
      </div>

      <div className='galleryContaior' >
        <ul className='projectPageGallary'>  {projectObject.image}  </ul>
      </div>

      <div className='titleTag'>
        <h3> {projectObject.title} blogs ... </h3> 
      </div>
      
      {projectObject.blog}  

    </div>
    );
  }
}

export default ProjectPage;
