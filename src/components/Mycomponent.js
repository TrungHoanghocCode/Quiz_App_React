import React from "react";
import UserInfo from "./UserInfo";
import Display from "./Display";

class MyComponent extends React.Component {

    render() {
        return (
            <div>
                {/* <p>I am {this.state.name}</p> */}
                <UserInfo/>
                <Display name="Trung" age={30} />
                <hr/>
                <Display name="Trungdau" age={18} />
            </div>
        );
    }
}

export default MyComponent;