import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>
            {props.label}
        </div>
        <button
            disabled={props.isDisabled}
            className={classes.Less}
            onClick={props.minus}>
            Less
        </button>
        <button
            className={classes.More}
            onClick={props.plus}>
            More
        </button>
    </div>
);

export default BuildControl;