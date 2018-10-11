import React,{Component} from 'react';
//connect to store
import {connect} from 'react-redux';
import {removeCounter} from '../Actions';
import {bindActionCreators} from 'redux';


class RemoveCounter extends Component{
constructor(props)
{
    super(props)
}    

render(){
    return(
         <div className="container">           
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" 
                  onClick=
                  {(e) => {
                    e.preventDefault();
                    this.props.dispatch(removeCounter(10))}}>Add</button>
                </div>
              </div>
            </form>
            </div>

    )
}

}

function mapDsipatchToProps(dispatch)
{
    return {actions:bindActionCreators(removeCounter,dispatch)}
}


export default connect(mapDsipatchToProps)(RemoveCounter);
