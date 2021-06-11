import React from 'react';
import { useState } from 'react';
const User = (props) => {
    const {name, email, picture, phone, website} = props.user;
    const [mobile,setMobile] = useState('');
    const showPhone = () => setMobile(phone);
    const addMember = props.addMember;
    const fullName = name.first +' '+ name.last;
    const userStyle = {
        border: '2px solid red',
        margin: '10px',
        borderRadius: '10px',
        padding: '10px',
        display: 'flex',
        width: '40%'
    }
    return (
        <div style={userStyle}>
            <div style={{marginTop: '25px'}}>
                <img src={picture.large} alt="" />
            </div>
            <div style={{marginLeft: '10px'}}>
                <h1>Name:{fullName}</h1>
                <p>Email:{email}</p>
                <p><a href={website}>Learn about me</a></p>
                <p>Phone:{mobile}</p>
                <button onClick={showPhone}>Show phone number</button>
                <button onClick={() => addMember(fullName)}>Add me</button>
            </div>
        </div>
    );
};

export default User;