/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            locale: "bn-bd",
        };
    }
    
    componentDidMount(){
        this.clockTimer = setInterval( () => {this.tick();}, 1000);
    }
        componentWillUnmount(){
            clearInterval(this.clockTimer);
        }

        handleClick= (locale) => {
            this.setState({
                locale,
            });
        }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    render(){
        console.log("Clock was render");
        const {locale} = this.state;
        return (
            <div>
            <h1>
                <span>
                    {this.state.date.toLocaleTimeString(locale)}
                </span>
            </h1>
            <Button change = {this.handleClick} locale="en-US" />
            </div>
        );
    }
}

export default Clock;