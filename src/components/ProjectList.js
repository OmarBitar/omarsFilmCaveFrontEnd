import React from 'react';
import ProjectItem from './ProjectItem';
import Loading from './Loading'

class ProjectList extends React.Component {
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
        var url = process.env.REACT_APP_URL + 'get_project/?project_type=film';
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
    const ProjectComponent = pictures.map((pic) => {
      return <ProjectItem key={pic._id}{...pic} />
    });

    if (this.state.isLoading === true || pictures.length === 0) {
        return ( 
          <div>
            <Loading />
          </div>
        )
    }
   
    return ( 
        
        <div> <ul>{ProjectComponent}</ul> </div>
        
    );
  }
}

export default ProjectList;
