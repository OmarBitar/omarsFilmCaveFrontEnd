import React from 'react';
import Loading from './Loading'

class HomePage extends React.Component {
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
  

    return ( 
    <div> 
        <div className='videoContainor'>
          <br/>
          <iframe src='https://www.youtube.com/embed/NHi1pfq2p-4'  title="Film Cave Intro Video"
          frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>

    </div>
    );
  }
}

export default HomePage;
