import React from 'react';

class PictureItem extends React.Component {
  constructor(){
    super();

    this.displayImg = this.displayImg.bind(this);
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

  //toggles fullscreen image
  displayImg(id){
    var x = document.getElementById(id);
    // eslint-disable-next-line 
    if(x.classList == 'displayNone') {x.classList = 'fullScreenBG';}
    else {x.classList = 'displayNone';}
  }

  render() {

    const {_id,img_url,picture_comment,/*forignKey,*/last_updated} = this.props;
    var bluredImage = img_url;

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
    <div>
      <div className='photoWithCommentContainor' >
          <div className='photoContainor' >
              <img onMouseOver={(event) => {this.changeBG(BGStyle); }}
              onClick={() => this.displayImg(_id)} src={img_url} alt="PictureItem"  width="100%" />
          </div>
          <h6>{'posted: '+last_updated.slice(0,10)}</h6>
          <h3 >{picture_comment} </h3>
      </div>

      <div id={_id} className='displayNone'>
        <a className='closeBtn' onClick={() => this.displayImg(_id)} > x </a>
        <img src={img_url} alt="PictureItem" className='fullScreenImg'/>
        <h3 className='caption' >{picture_comment} </h3>
      </div>

    </div>
    );
  }
}

export default PictureItem;