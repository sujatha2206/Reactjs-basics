import React, { Component } from 'react';
import{connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
               
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onCounterChangedAddHandler}  />
                <CounterControl label="Subtract 5" clicked={this.props.onCounterChangedSubHandler}  />
                <hr/>
                <button type="button" onClick={()=>this.props.onStoreresult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.result.map((strdResult)=>(
                        <li key={strdResult.id} onClick={()=>{this.props.onDeleteResult(strdResult.id)}}>{strdResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        ctr:state.ctr.counter,
        result:state.res.result
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter:()=> dispatch(actionCreators.increment()),
        onDecrementCounter:()=> dispatch(actionCreators.decrement()),
        onCounterChangedAddHandler:()=>dispatch(actionCreators.add()),
        onCounterChangedSubHandler:()=>dispatch(actionCreators.sub()),
        onStoreresult:(ctr)=>dispatch(actionCreators.storeResult(ctr)),
        onDeleteResult:(id)=>dispatch(actionCreators.deleteResult(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);