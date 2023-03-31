import React from 'react';
import withCounter from '../Tests/HOC/withCounter'

function HoverCounter(props) {
    const {count,incrimentCount} = props;
    return (
        <div>
            <h1 onMouseOver={incrimentCount}>Click {count} times</h1>
        </div>
    );
}

export default withCounter(HoverCounter);