import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import Display from "./Display";

const  MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
         [
            { id: 1, name: "Trung", age: 30 },
            { id: 2, name: "Trungdau", age: 18 },
            { id: 3, name: "Trunghocreact", age: 20 },
        ]
    );
    const handleAddNewUser = (ObjUser) => {
        console.log("ObjUser from AddUserInfo: \n" , ObjUser)
        setListUsers([ObjUser, ...listUsers]);
    }

    const handleDeleteUser = (id) => {
        console.log("id to delete: ", id);
        setListUsers(listUsers.filter((item) => item.id !== id));
    }
        
    return (
            <>
                <AddUserInfo 
                    handleAddNewUser = {handleAddNewUser}
                />
                <hr/>
                <Display 
                    listUsers = {listUsers}
                    handleDeleteUser = {handleDeleteUser} 
                />
            </>
        ); 
}


export default MyComponent;