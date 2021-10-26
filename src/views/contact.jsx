import React, { useRef } from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles/contact.css';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, useHistory, Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import swal from 'sweetalert';

init("user_6353vRWp43LNLddKJSM0O");






//Esta función verifica si el formulario está vació
const isAnEmptyForm = ({senderName, email, subject, message }) => {
console.log("Entrando a is An Empty Form: " + senderName, email, subject, message)
  let yesIsEmpty = false;
  if (senderName === "" && email === "" && subject === ""  && message === "") {
    yesIsEmpty = true;
  }else{
    yesIsEmpty = false;
  }
  console.log("Está vacío? " + yesIsEmpty)
  return yesIsEmpty;
};


//Esta función verifica que cada campo tenga un valor
const gotSomethingCheck = ({senderName, email, subject, message }) => {

console.log("Entrando a got gotSomething: " + senderName, email, subject, message)
    let everyFieldGotSomething = false;
    if (senderName !== "" && email !== "" && subject !== ""  && message !== "") {
      everyFieldGotSomething = true;
    }else{
      everyFieldGotSomething = false;
    }
    console.log("Tiene algo en cada campo? " + everyFieldGotSomething)
    return everyFieldGotSomething;
  };





//Esta función comprueba si es que existen errores en el formulario
const hasFails = ({senderName, email, subject, message })=>{
let yeshasFails = false;


  if (senderName !== ""
    || email !== ""
    || subject !== ""
    || message !== ""){
    yeshasFails = true;
  }else{
    yeshasFails =false;
  }
  console.log(senderName,email,subject,message)
  console.log("Tiene errores? " + yeshasFails)
  return yeshasFails;
};




//Esta función valida los formularios
export function validate(input, targetName, fails){
    let errors = fails

console.log("Arreglo de errores abajo: ")
console.log(errors)

switch(targetName){
  case "senderName":
  if (!input.senderName){
      errors.senderName= "Please tell me your name...";
      return errors;
  }else if(input.senderName.length>40 ){
      errors.senderName= "Your name is too long, try with a short one"
      return errors;
  }
  errors.senderName = "";
  return errors;

case "email":
if(!input.email){
    errors.email = "Please enter an email...";
    return errors;
} else if(!/\S+@\S+\.\S+/.test(input.email)){
    errors.email = "Please enter a valid email...";
    return errors;
}
errors.email="";
return errors;

case "subject":

if (!input.subject){
  errors.subject= "Please enter a subject...";
  return errors;
}else if(input.subject.length<10){
  errors.subject= "The subject must have at least 10 characters... ";
  return errors;
}
errors.subject = "";
return errors;

case "message":


if (!input.message){
    errors.message= "Please write a message...";
    return errors;
}else if(input.message.length>256 ){
    errors.message= "You reach the character's limit for message.";
    return errors;
}
errors.message="";
return errors;

  default:
  return errors;
}


}

//Esta es la función principal
export default function Contact(){


//Se hace uso del historial para las redirecciones
 const history = useHistory();


  const [state, setState] = useState({
        senderName:'',
        email: '',
        subject: '',
        message: '',

    })

    const [fails, setFails] = useState({
            senderName: '',
            email: '',
            subject: '',
            message: ''

    })

//Función que de momento no se usa, es el submit
    // function onSubmitForm(e){
    //         e.preventDefault();
    //         alert(`Email es ${state.email}`)
    // }
    function onCancelForm(e){
      <Link to="/"></Link>


    }


//Función para manejar los cambios en cualquier campo
    function onHandleChange(e){

 // console.log("fallos abajo")
 // console.log(fails.senderName)
 // console.log(fails.email)
 // console.log(fails.subject)
 // console.log(fails.message)

            setState({
                ...state,
                [e.target.name]: e.target.value,

            })

            setFails(

                validate({
                    ...state,
                    [e.target.name]: e.target.value
                  },e.target.name, fails)
                )
console.log(state)

    }



    function sendEmail(e){
      console.log("Dentro del send Email()");
      console.log(e);

    e.preventDefault();

    emailjs.sendForm('service_vkfoag8', 'template_t193cfx', e.target, 'user_6353vRWp43LNLddKJSM0O')
        .then((result) => {
            console.log(result.text);

            swal({
              title: "Your message has been send!",
              text: "We will respond to you soon! uwu",
              icon: "success",
              button: "uwu",
            }).then((value) => {
            history.push('/home');
            });




        }, (error) => {
            console.log(error.text);

            swal({
              title: "Something goes wrong...",
              text: "Try again later... unu",
              icon: "danger",
              button: "unu",
            }).then((value) => {
            history.push('/home');
            });

        });
    }


  return(
<>

<div className="contactContainer">
  <div className="formContainer">
    <Form className="formCustom"
      onSubmit={sendEmail}>
      <h1>Contact</h1>
      <hr></hr>
      <div className="formGroup">
        <label>Name</label>
        <input
          type="text"
          placeholder="What's your name?"
          name="senderName"
          value={state.senderName}
          onChange={(e) => onHandleChange(e)}>
        </input>
          {fails.senderName ? <p style={{color: 'red'}}> {fails.senderName}</p> : <p></p>}
      </div>
      <div className="formGroup">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email..."
          name="email"
          value={state.email}
          onChange={(e) => onHandleChange(e)}
          ></input>
          {fails.email ? <p style={{color: 'red'}}> {fails.email}</p> : <p></p>}
      </div>

      <div className="formGroup">
        <label>Subject</label>
        <input
          type="text"
          placeholder="Subject..."
          name="subject"
          value={state.subject}
          onChange={(e) => onHandleChange(e)}
          >
        </input>
          {fails.subject ? <p style={{color: 'red'}}>{fails.subject}</p> : <p></p>}
      </div>

      <div className="formGroup">
        <label>Message</label>
        <textarea
          placeholder="Write your message..."
          name="message"
          value={state.message}
          onChange={(e) => onHandleChange(e)}
          ></textarea>
        {fails.message ? <p style={{color: 'red'}}>{fails.message}</p> : <p></p>}
      </div>
      <button
        type="submit"
        disabled={
      hasFails(fails)===true || isAnEmptyForm(state)===true || gotSomethingCheck(state)===false
      ? true : false }
        className=
          {
            hasFails(fails)===true ||
            isAnEmptyForm(state)===true ||
            gotSomethingCheck(state)===false
            ? "disabbledButton" : "button_slide_purple slide_right"

          }
         >Send Message</button>

        <button
          onClick={() => history.push('/home')}
          className="button_slide_red slide_right_red button_cancelBorder"
          type="button"
          >Cancelar

        </button>
    </Form>
</div>

    </div>
</>
  )
// 3888443159
}
