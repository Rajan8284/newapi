import React from "react";
 import ContactService from "../services/contact.services";

class ContactController extends React.Component {
    async getContactDetail() {
        let response = await ContactService.getContact();
        return response;
    };

    async contactUs(data) {
        let post = {
            title: data.title,
            body: data.body,           
        };
        let response = await ContactService.saveContactUs(post);
        return response;
    };

    async putContact(data) {
        let put = {
            title: data.title,
            body: data.body,           
        };
        let response = await ContactService.putContact(put);
        return response;
    };
    

}
export default ContactController;
