import { render } from "@testing-library/react";
import React, { useState } from "react";

const AddUserInfo = (props) => {

    const [dumpObj, setDumpObj] = useState({
        name: "trungdau",
        age: 18,
        address: "Danang",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDumpObj({
            ...dumpObj, // giữ nguyên các giá trị cũ
            [name] : value, // cập nhật giá trị mới cho name ,  age , address
        });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault(); // block reload trang
        props.handleAddNewUser(
            {
                id: Math.floor(Math.random() * 1000) + 1 + "_RandomId", // random id
                name: dumpObj.name ,
                age: dumpObj.age + 500,
                address: dumpObj.address,
            }
        );
    }
    return(
        <div>
              <form onSubmit={(event) => {
                    // su kien submit cua form se reload lai trang, ham nay block dieu do
                    event.preventDefault(); 
                    handleOnSubmit(event);
                }}>
                    <input type="text" 
                        name = "name"
                        value={dumpObj.name}
                        onChange={(event) => handleChange(event)}
                        // placeholder="Your name"
                    />
                    <input type="text" 
                        name = "age"
                        value={dumpObj.age}
                        onChange={(event) => handleChange(event)}
                        // placeholder="Your age"
                    />
                    <button type="submit" >Submit</button>
                </form>
            </div>
    );
}

export default AddUserInfo;