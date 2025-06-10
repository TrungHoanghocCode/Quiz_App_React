import React from "react";
import AddUserInfo from "./AddUserInfo";
import Display from "./Display";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Trung", age: 30 },
            { id: 2, name: "Trungdau", age: 18 },
            { id: 3, name: "Trunghocreact", age: 20 },
        ],
    }
    handleAddNewUser = (ObjUser) => {
        console.log("ObjUser from AddUserInfo: \n" , ObjUser)
        this.setState({
            listUsers: [ ObjUser, ...this.state.listUsers] // spread operator
        });
    }
    handleDeleteUser = (id) => {
        console.log("id to delete: ", id);
        let listUsersNew = this.state.listUsers ;
        listUsersNew = listUsersNew.filter((item) => item.id !== id)
        this.setState({
            listUsers: listUsersNew
        });
    }
    render() { 
        return (
            <>
                <AddUserInfo 
                    handleAddNewUser = {this.handleAddNewUser}
                />
                <hr/>
                <Display 
                    listUsers = {this.state.listUsers}
                    handleDeleteUser = {this.handleDeleteUser} 
                />
            </>
        );
    }
}

export default MyComponent;