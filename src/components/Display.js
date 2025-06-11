import React, { useState } from "react";
import "./Display.scss"; // import css file
import logo from "../logo.svg"; // import image file

// class Display extends React.Component {

   
// }    

const Display = (props) => {
        // nhận props từ component cha gán vào biến listUsers
        const { listUsers } = props;
        // tạo hook quản lí state showHideBtn (biến showHideBtn, hàm cập nhật setShowHideBtn, default là true)
        const [showHideBtn, setShowHideBtn] = useState(true);
        // hàm handleShowHide gán với btn dùng hàm setShowHideBtn để thay đổi giá trị của showHideBtn
        const handleShowHide = () => {
                setShowHideBtn(!showHideBtn);
            }
            return (
                <div className="display_container">
                {/* btn nhận event conClick => chạy hàm handle */}
                <button onClick={() => handleShowHide()}>
                    {/* câu điều kiện trong ReactHook */}
                    {showHideBtn ? "Hide" : "Show"} Users
                    </button>
                {showHideBtn && 
                    <>
                    {listUsers.map((item) => {
                        return (
                            <div key={item.id} className = {+item.age > 19 ? "green" : "red"} > 
                                <p>My name is {item.name}</p>
                                <p>My name is {item.age}</p>
                                <button onClick={() => props.handleDeleteUser(item.id)}>Delete</button>
                            </div>
                        );
                    })}
                    </>
                }
                </div>
            );
        }
    
export default Display;