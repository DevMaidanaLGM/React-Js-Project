import React from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, useHistory, Link } from 'react-router-dom';



//Esta función verifica si el formulario está vació
const isAnEmptyForm = ({senderName, email, subject, message }) => {
console.log(senderName)
  let yesIsEmpty = false;
  if (senderName === "" || email === "" || subject === ""  || message === "") {
    yesIsEmpty = true;
  }else{
    yesIsEmpty = false;
  }
  console.log("Está vacío? " + yesIsEmpty)
  return yesIsEmpty;
};




//Esta devuelve si es que existen errores
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
 const history = useHistory();


  const [state, setState] = useState({
        senderName:'',
        email: '',
        subject: '',
        message: '',
        isAnEmptyForm: true,

    })

    const [fails, setFails] = useState({
            senderName: '',
            email: '',
            subject: '',
            message: ''

    })

//Función que de momento no se usa, es el submit
    function onSubmitForm(e){
            e.preventDefault();
            alert(`Email es ${state.email}`)
    }
    function onCancelForm(e){
      console.log("Cancelando...");
      <Link to="/"></Link>


    }


//Función para manejar los cambios en cualquier campo
    function onHandleChange(e){

 isAnEmptyForm: isAnEmptyForm(state)
 console.log("fallos abajo")
 console.log(fails.senderName)
 console.log(fails.email)
 console.log(fails.subject)
 console.log(fails.message)

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


    }





  return(
<>

<div className="contactContainer">
  <div className="formContainer">
    <Form className="formCustom">
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
        onClick={() => history.push('/')}

        className=
          {
            hasFails(fails)==true ||
            isAnEmptyForm(state)==true
            ? "disabbledButton" : "button_slide_purple slide_right"

          }
        disabled={
          hasFails(fails)==true || isAnEmptyForm(state)==true
          ? true : false }

        type="button"
        >Send Message</button>
        <button
          onClick={() => history.push('/')}
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
