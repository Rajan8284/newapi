import React, { useEffect, useState } from "react";
import ContactController from "./apis/controllers/contact.controller";
const Axiosget = () => {
    const [contactdetails, setContactDetails] = useState([]);

    useEffect(() => {
        getContact();
    }, []);

    const getContact = async () => {
        let response = await new ContactController().getContactDetail();
        // console.log("----->>",response)
        setContactDetails(response);

    };
    console.log("--->", contactdetails)
    return (
        <div>
            {
                contactdetails.map((item) => {
                    return (
                        <div>
                            <p>ID: {item.id}</p>
                            <p> UserID :{item.userId}</p>
                            <p>title :{item.title}</p>
                            <p>body :{item.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Axiosget