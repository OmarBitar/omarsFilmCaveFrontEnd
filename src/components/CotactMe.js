import React from 'react';
import Loading from './Loading'

class ContactMe extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading:false
    }
  }
  

  componentWillMount(){
    this.setState({isLoading: true});
  }
  componentDidMount(){
    this.setState({isLoading: false});
  }


  
  render() {

    if (this.state.isLoading === true) {
      return ( 
        <div>
          <Loading />
        </div>
      )
    }
  
    function openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
    }

    return ( 
    <div> 
      <br />
      <br />
      <br />
       <h2> I currently live in Colorado, feel free to contact me via the links below </h2>
      <a onClick={() => openInNewTab('https://www.facebook.com/omar.bitar.1997')} className="fa fa-facebook"> </a>
      <a onClick={() => openInNewTab('https://www.youtube.com/channel/UCAk3PDdXPdoyl4ZzYiuggxA')} className="fa fa-youtube"> </a>
      <br />
      <div className='center'>
        <h2 className='floatLeft'> or send a message to this email: </h2> 
        <div className='floatLeft'> <i className="fa fa-envelope-o" >  </i> </div>
        <h2 className='floatLeft'> filmcaveemail@gmail.com </h2>
      </div>
    </div>
    );
  }
}

export default ContactMe;
