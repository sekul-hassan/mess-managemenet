import React from 'react';

const WithCounter = (Original) =>{
    class NewComponent extends React.Component{
        state = {
            count:0,
        }
        incrimentCount = ()=>{
            this.setState((pstate)=>({count:pstate.count+1}))
        }
        render() {
            const {count} = this.state;
            return <Original count={count} incrimentCount={this.incrimentCount}/>
        }
    }
    return NewComponent;
}

export default WithCounter;