import React from "react";

const ContactCard = (props) => {
    const user = "https://res-console.cloudinary.com/dnoeqauv6/media_explorer_thumbnails/813410220437db86edcd113fdadf1779/detailed";

    const {id,name,email} = props.contact;
    console.log(props);
    return (
    <div className="item">
        <div className="content">
            <img className="ui avatar image" src={user} alt="user"></img>
            <div className="header">
            {name}
                    </div>
            <div>
            {email}
            </div>
        </div>
        <i className="trash alternate outline icon" 
        onClick={() => props.ClickHandler(id)}
        style={{color: "red", marginTop: "7px"}}></i>
    </div>
    )
}

export default ContactCard;