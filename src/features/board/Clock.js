import React from 'react';

class Clock extends React.Component {

 constructor(props){
     super(props);
     this.state = { time: Math.floor(((
       new Date().getTime() - this.props.startTime)/1000)).toLocaleString() }
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
    this.setState({
      time: Math.floor(((
        new Date().getTime() - this.props.startTime)/1000)).toLocaleString()
    });
  }
 render(){
     return (
         <h2>
             Time: {this.state.time} sec.
         </h2>
     )
 }

}

export default Clock;
