import React from "react";

class MyComponent extends React.Component {

    // state obj 
    state = {
        name: "trungdau",
        age: 18,
        address: "Danang",
    };

    // arrow function co the dung this 
    handleClick = (event) => {
        console.log("Clicked !!!" + this.state.age);
        // ham setState 
        this.setState({
            age : 30,
        });
    }

    // normal function khong the dung this
    // lai phai dung arrow function o phan html
    handleHover (event) {
        console.log(event.pageX + this.state.name);
    }

    render() {
        return (
            <div>
                <p>I am {this.state.name}</p>
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={(event) => this.handleHover(event)}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;