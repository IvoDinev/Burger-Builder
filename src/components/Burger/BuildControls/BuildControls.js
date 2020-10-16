import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = (props) =>
    (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price}</strong></p>
            {controls.map((control, index) =>
                <BuildControl
                    isDisabled={props.disableBtn[control.type]}
                    minus={() => props.ingrRemoved(control.type)}
                    plus={() => props.ingrAdded(control.type)}
                    label={control.label}
                    key={control + index} />
            )}
        </div>
    );

export default BuildControls;