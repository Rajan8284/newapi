import React, { useState } from "react";
import ContactController from "./apis/controllers/contact.controller";
import Validation from "./helper/Validation"
const Axiospost = () => {
    // validations  -- start
    const [isError, setError] = useState({
        title: {
            rules: ["required", "alphabetic"],
            isValid: true,
            message: "",
        },
        body: {
            rules: ["required", "alphabetic"],
            isValid: true,
            message: "",
        },
    });
    let validation = new Validation(isError);

    let defaultValues = {
        title: null,
        body: null,
    };
    const [values, setValues] = useState(defaultValues);

    const handleChange = (field, value) => {
        /** Validate each field on change */
        let node = validation.validateField(field, value);
        console.log(node, 'node data')
        setError({ ...isError, [field]: node });
        /** Validate each field on change */
        setValues({ ...values, [field]: value });
    };


    const contactUs = async () => {
        /** Check full form validation and submit **/
        let validation = new Validation(isError);
        let isValid = await validation.isFormValid(values);
        if (isValid && !isValid.haveError) {
            let response = await new ContactController().contactUs(values);
            console.log("------->>> APIresponse", response);
            if (response) {
                setValues(defaultValues);
            } else {
                console.log("No response")
            }
        } else {
            setError({ ...isValid.errors });
        }
    };

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                contactUs();
            }}>
                <input type="text" placeholder="Enter title" name="title"
                    onChange={(e) => handleChange("title", e.target.value)}
                    value={values.title ? values.title : ``} />
                {isError.title.message ? (
                    <p className="">
                        {isError.title.message}
                    </p>
                ) : null}
                <br />
                <input type="text" placeholder="Enter body" name="body"
                    onChange={(e) => handleChange("body", e.target.value)}
                    value={values.body ? values.body : ``} />
                {isError.body.message ? (
                    <p className="">
                        {isError.body.message}
                    </p>
                ) : null}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Axiospost