import React from "react";

class Display extends React.Component {
    render() {
        console.log(this.props);
        // destructuring props
        const { name, age } = this.props;
        return (
            <div>
                {/* dung binh thuong */}
                <h1>i am {this.props.name}</h1>
                {/* dung destructuring */}
                <h2>My age is  {age}</h2>
            </div>
        );
    }
}

export default Display;