import React from 'react';
import withCounter from '../Tests/HOC/withCounter'

function ClickCounter(props) {
    const {count,incrimentCount} = props;
    return (
        <div>
            <button onClick={incrimentCount}>Click {count} times</button>
        </div>
    );
}

export default withCounter(ClickCounter);