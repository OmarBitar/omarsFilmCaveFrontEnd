import React from 'react';
import PictureItem from './PictureItem';
import Loading from './Loading';

//import * as PictureAction from './actions/PictureAction'

class PictureList extends React.Component {
    constructor(){
        super();
        this.state = {
            pictures: [],
            isLoading:false
        };
    }

    componentWillMount(){
        this.setState({isLoading: true});
        var user = process.env.REACT_APP_USERNAME;
        var password =  process.env.REACT_APP_PASSWORD;
        var base64encodedData = new Buffer(user + ':' + password).toString('base64');
        var url = process.env.REACT_APP_URL + 'get_pictures';
        fetch(url,{
            headers: new Headers({
                'Authorization': 'Basic ' + base64encodedData
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(myJson => this.setState({pictures: myJson}))
        .then(this.setState({isLoading: false}));
    }

  render() {

    const {pictures} = this.state;
    const PictureComponent = pictures.map((pic) => {
      return <PictureItem key={pic._id}{...pic} />
    });

    if (this.state.isLoading === true || pictures.length === 0) {
        return ( 
          <div>
            <Loading />
          </div>
        )
    }

    return ( 
        <div>  <br /> <br /> <br /> {PictureComponent}</div>
    );
  }
}

export default PictureList;
