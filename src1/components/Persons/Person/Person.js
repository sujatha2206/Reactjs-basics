import React,{Component} from 'react';
import Auxiliary from '../../../containers/hoc/Auxiliary';
import classes from './Person.module.css';
import withClass from '../../../containers/hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../containers/hoc/context/auth-context';
//import styled from 'styled-components';

//https://styled-components.com/
//import Radium from 'radium';
//class based instaed of this.props this.this.props,dynamic content

//     const style ={
//         '@media (min-width:500px)':{
//             width : '400px'
//         }
//     };
// const StyledDiv = styled.div`
//  width:60%;
//  margin: 16px auto;
//  border:1px solid #eee;
//  box-shadow: 0 2px 3px #ccc;
//  padding: 16px;
//  text-align: center;
//  @media (min-width:500px):{
//   width : 450px;
// }`;
class Person extends Component{
   constructor(props){
      super(props);
   this.inputElementRef = React.createRef();
   }
   static contextType = AuthContext;
   componentDidMount(){
    //  this.inputElement.focus();
    //this.inputElementRef.current.focus();
    console.log(this.context.isAuthenticated);
   }
   render(){
   console.log('[Person.js] rendering...');
    return(
   <Auxiliary>
    {/* //  <AuthContext.Consumer>{(context)=> context.isAuthenticated ? <p>Authenticated</p>:<p>PLease LOgin</p>}</AuthContext.Consumer> */}
    
      {this.context.isAuthenticated ? <p> Authenticated</p> :<p>PLease login</p>}
        <p onClick={this.props.click}> I am a  {this.props.name} and I am {this.props.age} years of old</p>
     <p>{this.props.children}</p>
     <input type="text" onChange={this.props.changed}
     // ref={(inputEl)=>this.inputElement=inputEl} 
     ref={this.inputElementRef}
      name="name" value={this.props.name}/>
     </Auxiliary>
    
        );
    }
};
Person.propTypes ={
   name:PropTypes.string,
   age:PropTypes.number,
   changed:PropTypes.func,
   click:PropTypes.func

}
//export default Radium(person);
export default withClass(Person,classes.Person);
