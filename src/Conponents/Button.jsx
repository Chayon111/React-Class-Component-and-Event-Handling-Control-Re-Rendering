/* eslint-disable react/prop-types */
import React from "react";
    
    class Button extends React.Component {

        shouldComponentUpdate(nextProps) {
            const {change: currentChange} = this.props;
            const {change: nextChange} = nextProps;
            if (currentChange === nextChange) {
                return false;
            } else{
                return true;
            }
        }

        render() {
            console.log("Button Was render")
            const {change,locale} = this.props;
            return(
                <button type="button" onClick= {() => change(locale)}>Lang Change</button>
            );
        }
}

export default Button;