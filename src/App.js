import React, { Component } from 'react';
import NavBar from './components/NavBar';

class App extends Component {

  changeBG(newStyle){
    //document.body.classList = 'test';
    for(var i in newStyle.body){
      document.body.style[i] = newStyle.body[i];
    }
    
  }

  render() {

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

    return (
      <div>
        <NavBar activePages={this.props}/>
        {this.props.children}
        {/* <footer> footer </footer> */}
      </div>
    );
  }
}

export default App;
