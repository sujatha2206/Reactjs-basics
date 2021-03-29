import React from'react';

// const WithClass= props =>{
//     return <div className={props.classes}>{props.children}</div>
// }
const withClass = (WrappedComponent,className) =>{ //this is nnormal function not react fuction
    return props=>( //herw return function is react functional comp
        <div className={className}>
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    )
}
export default withClass;