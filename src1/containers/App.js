import React, { Component } from 'react';
import  classes from './App.module.css';

import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit.js';
import withClass from './hoc/withClass';
import Auxiliary from './hoc/Auxiliary';
import AuthContext from './hoc/context/auth-context';

//import Radium,{StyleRoot} from 'radium';
//import styled from 'styled-components'; 

//import classes from '*.module.css';


//we can define properties only which has class extenfds component not in function ex:person
//props are set nad passed by outside like name ,state is managed by inside copoennet
//state can be define in which has clasds extends compoennt(in hooks chapter we can use variables in functions)


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit:true,
    changeCounter:1,
    isAuthenticated:false
  };
  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldcomponentupdate');
   return true;
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
//state is special property,we can chaneg state,if it chnages it will lead to react to update the dom
  
  // switchNameHandler=(newName)=>{
  //   console.log("was CLICKED");
  //   this.setState({
  //     persons:[
        
  //       {name:newName,age:29},
  //       {name:'suresh',age:33}
  //     ]
  //   })
  // }
  togglePersonHandler=(dataShow)=>{
    dataShow=this.state.showPersons;
    this.setState({
      showPersons:!dataShow
    })
  }
  nameChangedHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(person=>{
      return person.id === id;
    });
   const person = {
     ...this.state.persons[personIndex] //not mutate state directly
    };
     person.name = event.target.value;
     const persons = [...this.state.persons];
     persons[personIndex].name=person.name;
     this.setState((prevState,props)=>{
       return {
        persons:persons,
        changeCounter:prevState.changeCounter+1
      }
     });
    // const person = Object.assign({},this.state.persons[personIndex])
    // this.setState({
    //   persons:[
        
    //     {name:'sujatha',age:29},
    //     {name:event.target.value,age:33}
    //   ]
    //})
  }
  deleteEventHandler=(personIndex)=>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  loginHandler=()=>{
    this.setState({isAuthenticated:true});
    console.log("login handler"+this.state.isAuthenticated);
  }
  //with out keys in list :rerender the list each time it is ineffiecient-with keys keep track of indidvidual elements
  render(){
    console.log("[App.js] render");
    // const style ={
    //   backgroundColor:'green',
    //   color :'white',
    //   font : 'inherit',
    //   border : '1px solid blue',
    //   padding :'8px',
    //   cursor : 'pointer',
    //   ':hover':{
    //     backgroundColor :'lightgreen',
    //     color:'black'
    //   }
    // }
    let persons= null;
    
    
    if(this.state.showPersons){
      persons=( <Persons persons={this.state.persons}
          clicked={this.deleteEventHandler}
          changed={this.nameChangedHandler}>
        {/* //  isAuth={this.state.isAuthenticated} */}
          
         
          
     </Persons>
      
   
      // style.backgroundColor = 'red';
      // styled[':hover']={
      
      //   backgroundColor :'pink',
      //   color:'black'
      // };
      )}
      
    
  return (
    
    <Auxiliary>
      <AuthContext.Provider value={{isAuthenticated:this.state.isAuthenticated,login:this.loginHandler}}> 
      <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
     { this.state.showCockpit ? <Cockpit  title={this.props.AppTitle} showPersons={this.showPersons}
       personsLength={this.state.persons.length}  clicked={this.togglePersonHandler}
     //  login={this.loginHandler}
       />: null
  }
     {persons}
     
     </AuthContext.Provider>
     </Auxiliary>
       
   // React.createElement('div',{className:'App'},React.createElement('h1',null,'I am a React app'));
  );
}
}

//export default Radium(App);
export default withClass(App,classes.App);
