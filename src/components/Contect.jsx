import React, { useState } from 'react';

const Contect = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        address: "",
        message: "",
    })

    let name, value;

    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })

    }
    const postData = async (event) => {
        event.preventDefault();

        const { name, email, mobile, address, message } = user;
        if(name && email && mobile && address && message){
            const res = await fetch("https://formreacttest-default-rtdb.firebaseio.com/formfire.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    mobile,
                    address,
                    message,
                }),
            });
            if (res) {
                setUser({
                    name: "",
                    email: "",
                    mobile: "",
                    address: "",
                    message: "",
                })
                alert("Data Save Successfully")
            }

        }else{
            alert("plz full-fill all the data")
        }
       
    };


    return (
        <div className="container">
            <div className="wrap_container">
                <form action="" className="form" method='POST'>
                    <h1>Contact Us</h1>
                    <div className="name">
                        <span>Your name</span>
                        <input type="text" name="name" placeholder="Enter your name"
                            value={user.name} onChange={getUserData} autocomplete="off" required />
                    </div>
                    <div className="email">
                        <span>Your email</span>
                        <input type="email" name="email" placeholder="Enter your email"
                            value={user.email} onChange={getUserData} autocomplete="off" required />
                    </div>
                    <div className="mobile">
                        <span>Your Mobile no</span>
                        <input type="numer" name="mobile" placeholder="Enter your mobile no"
                            value={user.mobile} onChange={getUserData} autocomplete="off" required />
                    </div>
                    <div className="address">
                        <span>Your Address</span>
                        <input type="textarea" name="address" placeholder="Enter your address"
                            value={user.address} onChange={getUserData} autocomplete="off" required />
                    </div>
                    <div className="message">
                        <span>Message</span>
                        <input type="textarea" name="message" placeholder="Enter your message"
                            value={user.message} onChange={getUserData} autocomplete="off" required />
                    </div>

                </form>
                <button onClick={postData}>Register</button>
            </div>


        </div>
    )
}

export default Contect
