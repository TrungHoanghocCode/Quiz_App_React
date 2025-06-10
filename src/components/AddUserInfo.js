import { render } from "@testing-library/react";
import React from "react";

class AddUserInfo extends React.Component {
     // state obj 
    state = {
        name: "trungdau",
        age: 18,
        address: "Danang",
    };

    handleChange = (event) => {
        // console.log(event.target.value);
        const {name, value} = event.target;
        this.setState({
            [name]: value   // name = name, age = age
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); // block reload trang
        this.props.handleAddNewUser(
            {
                id: Math.floor(Math.random() * 1000) + 1 + "_RandomId", // random id
                name: this.state.name,
                age: this.state.age,
                address: this.state.address,
            }
        );
    }
    render () {
        return (
            <div>
             <form onSubmit={(event) => {
                    // su kien submit cua form se reload lai trang, ham nay block dieu do
                    event.preventDefault(); 
                    this.handleOnSubmit(event);
                }}>
                    <input type="text" 
                        name = "name"
                        value={this.state.name}
                        onChange={(event) => this.handleChange(event)}
                        // placeholder="Your name"
                    />
                    <input type="text" 
                        name = "age"
                        value={this.state.age}
                        onChange={(event) => this.handleChange(event)}
                        // placeholder="Your age"
                    />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfo;