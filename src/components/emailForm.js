import React from "react"
import {Button, Form, Message, TextArea} from "semantic-ui-react";
import {useForm} from "../hooks/useForm";
import * as emailjs from 'emailjs-com';
const EmailForm = () => {

    const validateForm = (values) => {
        let errors = {};
        if (values.name.trim() === '') {
            errors.name = 'Name must not be empty';
        }
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!values.email.match(mailFormat)) {
            errors.email = 'You have entered an invalid email address';
        }
        if (values.message.trim() === '') {
            errors.message = 'Message must not be empty';
        }
        return errors;
    };

    const sendEmail =(event)=> {
        let template_params = {
            "reply_to": values.email,
            "from_name": values.name,
            "to_name": "Tomoya Kuroda",
            "message_html": values.message
        }

        let service_id = "default_service";
        let template_id = "template_bI7QUFno";

        emailjs.send(service_id, template_id, template_params, process.env.GATSBY_EMAILJS_USERID)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.error(err)
            })
    }

    const { values, errors, onChange, onSubmit } = useForm(
        sendEmail,
        { name: '', email: '', message:'' },
        validateForm
    );


return (
    <Form warning onSubmit={onSubmit} size={'large'}>
        <Form.Field>
            <label style={{textAlign:'left', color: "rgba(255,255,255,.9)"}}>Your Name</label>
            <input name={'name'} value={values.name} onChange={onChange}/>
        </Form.Field>
        {errors.name && (
            <Message
                warning
                content={errors.name}
            />
        )}
        <Form.Field>
            <label style={{textAlign:'left', color: "rgba(255,255,255,.9)"}}>Your Email</label>
            <input name={'email'} value={values.email} onChange={onChange} />
        </Form.Field>
        {errors.email && (
            <Message
                warning
                content={errors.email}
            />
        )}
        <Form.Field>
            <label style={{textAlign:'left', color: "rgba(255,255,255,.9)"}}>Message</label>
            <TextArea rows={2} name={'message'} value={values.message} onChange={onChange} />
        </Form.Field>
        {errors.message && (
            <Message
                warning
                content={errors.message}
            />
        )}
        <Button color='orange' size='large'>Submit</Button>
    </Form>
)
}

export default EmailForm