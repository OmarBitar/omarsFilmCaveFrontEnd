import React from 'react';
import { Link } from 'react-router';
import Logo from '../../src/400x100_FILMCAVE_logo.png'

class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      dropDownId: {}
    };
  }

    //change button color based on active page(if first page active)
  componentDidMount(){
    const {router} = this.props.activePages;
    //need to add this to make it work (activeClassName="test")
    var activeKey = '';
    if(router.isActive('ProjectList')){
      activeKey = 'ProjectList';
      document.getElementById(activeKey).className = "active";
    } else if (router.isActive('PictureList')){
      activeKey = 'PictureList';
      document.getElementById(activeKey).className = "active";
    } else if (router.isActive('BlogList')){
      activeKey = 'BlogList';
      document.getElementById(activeKey).className = "active";
    } else if (router.isActive('ContactMe')){
      activeKey = 'ContactMe';
      document.getElementById(activeKey).className = "active";
    } else if (router.isActive('AboutMe')){
      activeKey = 'AboutMe';
      document.getElementById(activeKey).className = "active";
    }
    this.resize();
    this.setState({dropDownId:document.getElementById('navDropDown')});
    //    this.setState({dropDownId:this.refs.dropDown});
    this.handleDropDown = this.handleDropDown.bind(this);
  }
  //change button color based on active page(onClick)
  componentDidUpdate(){
    const {router} = this.props.activePages;
    //need to add this to make it work (activeClassName="test")
    var activeKey = '';
    if(router.isActive('ProjectList')){
      activeKey = 'ProjectList';
      document.getElementById(activeKey).className = "active";
    } else if (router.isActive('PictureList')){
      activeKey = 'PictureList';
      document.getElementById(activeKey).className = "active";
    } else if (router.isActive('BlogList')){
      activeKey = 'BlogList';
      document.getElementById(activeKey).className = "active";
    } else if (router.isActive('ContactMe')){
      activeKey = 'ContactMe';
      document.getElementById(activeKey).className = "active";
    } else if (router.isActive('AboutMe')){
      activeKey = 'AboutMe';
      document.getElementById(activeKey).className = "active";
    }
  }

  handleDropDown(){
    //console.log(this.state.dropDownId);
   // var x = this.refs.myTopnav;
   var x = this.state.dropDownId;
    if (x){
      //x.className += "";
      console.log(x.className);
      x.classList.toggle("show");
    }

  }

  //change css style aupon screen size change
  resize(){
    var x = this.refs.myTopnav;
    if(x){
        if (x.className === "App-header") {
          x.className += " responsive";
      } else {
          x.className = "App-header";
      }
    } 
  }

  render() { 

    return ( 
      <header>
        {/* this.props.children */}
        <img src={Logo} alt="omars film cave logo" href="#logo" onClick={() => window.location.assign("/")} />
        <div className='App-header' ref="myTopnav">
              <ul className='nav-bar' id='navDropDown'>
                  <li><Link to="ProjectList" activeClassName="ProjectList" id='ProjectList' className='nav-bar'>PROJECTS</Link></li>
                  <li><Link to="PictureList" activeClassName="PictureList"  id='PictureList' className='nav-bar'>GALLERY</Link></li>
                  <li><Link to="BlogList" activeClassName="BlogList" id='BlogList' className='nav-bar'>BLOGS</Link></li>
                  <li><Link to="AboutMe" activeClassName="AboutMe" id='AboutMe' className='nav-bar'>About me</Link></li>
                  <li><Link to="ContactMe" activeClassName="ContactMe" id='ContactMe' className='nav-bar'>Contact me</Link></li>
              </ul>
            {/*
                <a className="icon" ref="dropDown" onClick={this.handleDropDown}>
                  <i className="fa fa-bars"></i>
                </a>
            */}
          </div>
        </header>
    );
  }
}

export default HomePage;