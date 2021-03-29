import React,{useContext, useEffect, useRef} from 'react';
import AuthContext from '../../containers/hoc/context/auth-context';

import classes from './Cockpit.css';

const Cockpit = ( props ) => {
  const toggleBtnRef= useRef('null');
 const authContext= useContext(AuthContext);
 console.log(authContext.isAuthenticated);
  useEffect(() => {
    console.log('[Cockpit js] useeffect.');
    //http req
    // setTimeout(()=>{
    //   alert("saved data to cloud");
    // },1000); //up to this [] array means it will render first time
    toggleBtnRef.current.click();
    
    return ()=>{ //this will render when compoennet unmount
      console.log("[Cockpit.js] cleanup work  in Useeeffect")
    }

  },[]);//useefefct with no dependen will reneder first time and celna up work when it is unmounted
  //if u don't have any dependencies addd empty array
  //usefeect combines componentdidmount and componentdidupdate
  //empty array means when it is destroyed cleN up code wiill run
  //with out any dependencies it will run for each cycle
  useEffect(()=>{
    console.log('[Cockpit js] useeffect2.');
   
    return ()=>{
      console.log("[Cockpit.js] cleanup work  in Useeeffect 2")
    }
  })
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
            ref={toggleBtnRef}         
                   className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
               
    {/* <AuthContext.Consumer>{(context)=> <button onClick={context.login}>Login</button>}</AuthContext.Consumer>   */}
    <button onClick={authContext.login}>Login</button>
        </div>
    );
};

export default React.memo(Cockpit);