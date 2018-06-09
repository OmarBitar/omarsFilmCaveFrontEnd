import React from 'react';
import { Link } from 'react-router';
import ProjectPage from './ProjectPage';


class ProjectItem extends React.Component {

  handleOnClick(){
    return(<ProjectPage/>)
  }
  
  componentWillUnmount(){
    //reset BG to default    
    /*make sure that the backgroundColor is set to white */
    document.body.style.backgroundImage = 'none';
  }
  
  changeBG(newStyle){
    //document.body.classList = 'test';
    for(var i in newStyle.body){
      document.body.style[i] = newStyle.body[i];
    }
    
  }

    //use cloudinary api to blur image
  geBlurUrl(x){
    x = x.toString();
    x = x.replace('/upload/','/upload/e_blur:555/');
    return x;
  }

  render() {
    const {_id,profile_img_url,title/*,details*/,last_updated} = this.props;

    var bluredImage = profile_img_url;

    const BGStyle = {
      body : {
      backgroundImage:  `url(${this.geBlurUrl(bluredImage)})`,
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


    return ( 
      <div className='projectItemContainor'>
        <div className='photoWithCommentContainor' >
        {this.props.children}
          <div className='photoContainor' >
              <Link to={{
                pathname:"/ProjectPage",
                state: {
                  key: _id
                }
              }} activeClassName="ProjectPage">
                <img src={profile_img_url} alt="projectItem"   width="100%"
                onMouseOver={(event) => {this.changeBG(BGStyle); }}/>
              </Link>
            </div>
            <h6> { 'published: ' + last_updated.slice(0,10)} </h6>
          <h3>{title}</h3>
      </div>
    </div>
    );
  }
}

export default ProjectItem;
