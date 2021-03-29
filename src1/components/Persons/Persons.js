import React,{Component, PureComponent} from 'react';
import Person from './Person/Person.js';

class Persons extends PureComponent{

//  static getDerivedStateFromProps(props,state){
//     console.log("[Persons.js] getDerivedStateFromProps");
//     return state;
//   } 
//i have not intialised state ,so no use getderivedstatefromprops and it is in creation life cycle
// componentWillReceiveProps(props,state){
//   console.log("[Persons.js] componentwillreceiveprops",props);
// }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if(nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed){
  //     return true;
  //   }else{
  //   return false;
  //   }
  // }
  getSnapshotBeforeUpdate(prevProps,preState){
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return {message:'snaps'};
  }
  // componentWillUpdate(){

  // }
  componentDidUpdate(prevProps,preState,snapShot){ //after update finished,i.e fetch new data from server
    console.log("[Persons.js] componentdidUpdate");
    console.log(snapShot);//snapshot to save data before update and use it in after update in componentdidupdate
  }
  componentWillUnmount(){
    console.log("[[PERSONS.JS] componentwillunamount");//for cleanupwork
  }
  render(){ 
  console.log('[Persons.js] rendering...'+this.props.isAuth);
  return this.props.persons.map((person,personIndex) => {
    
            return( <Person 
            click={()=>this.props.clicked(personIndex)}
 
            name={person.name} 
            age={person.age}
             key={person.id} 
             changed={(event)=>this.props.changed(event,person.id)}
           //  isAuthenticated={this.props.isAuth}
             />
           
            );
           });
          }
          }
export default Persons;