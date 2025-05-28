import { render } from "@testing-library/react";
import React from "react";

class UserInfo extends React.Component {
     // state obj 
    state = {
        name: "trungdau",
        age: 18,
        address: "Danang",
    };

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value,
        });
    }

    handleSubmit = (event) => {}
    render () {
        return (
            <div>
             <form onSubmit={(event) => {
                    // su kien submit cua form se reload lai trang, ham nay block dieu do
                    event.preventDefault(); 
                    this.handleSubmit(event);
                }}>
                    <input type="text" 
                        value={this.state.name}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <button type="button" >Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfo;