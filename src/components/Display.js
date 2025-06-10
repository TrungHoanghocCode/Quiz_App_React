import React from "react";
import "./Display.scss"; // import css file
import logo from "../logo.svg"; // import image file

class Display extends React.Component {

    state = {
        showHide : true
    }

    handleClickShowHide = () => {
        this.setState({showHide : !this.state.showHide}); ;
    }

    render() {
        console.log(this.props);
        // destructuring props
        const { listUsers } = this.props;
        return (
            <div className="display_container">
                <button onClick={() => this.handleClickShowHide()}>
                    {this.state.showHide ? "Hide" : "Show"} list
                    </button>
            
            <img src={logo} className="App-logo" alt="logo" />
            {this.state.showHide && 
                <>
                {listUsers.map((item) => {
                    return (
                        <div key={item.id} className = {+item.age > 19 ? "green" : "red"} > 
                            <p>My name is {item.name}</p>
                            <p>My name is {item.age}</p>
                            <button onClick={() => this.props.handleDeleteUser(item.id)}>Delete</button>
                        </div>
                    );
                })}
                </>
            }
            </div>
        );
    }
}

export default Display;