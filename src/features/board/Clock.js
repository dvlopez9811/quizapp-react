import React from 'react';

class Clock extends React.Component {

 constructor(props){
     super(props);
     this.state ={ 
       startTime: (new Date().getTime()),
       timeElapsed: ( (new Date().getTime()) - parseInt(new Date().getTime(),10) ).toLocaleString()
    }

 }


 componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    if(this.props.status === 'playing'){
      this.setState({
        timeElapsed: Math.floor(( ((new Date().getTime()) - this.state.startTime)/1000 )).toLocaleString()  
      });
    }
    
    else{
      this.setState({startTime : (new Date().getTime())})
    }
    
   
    
  }
 render(){
     return (
         <h2>
             Time: {this.state.timeElapsed} sec.
         </h2>
         
     )
 }

}

export default Clock;
