import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import "./Contact.scss"



const Contact = () => {

 
    const formRef = useRef();
    const [error,setError]= useState(false);
    const [Success,setSeccess]= useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_vruz4nc', 'template_3xtcdrg', formRef.current, {
            publicKey: 'v6_1EsYtlteSGYYbv',
          })
        .then((result)=>{ 
            setSeccess(true)
          },
          (error) => {
            setError(true)
        });
      };
  return (
    <div className='contact'>
        <div className="textContainer" >
            <h1>Contactez-nous</h1>
            <div className="item" >
                <h2>mail</h2>
                <span>mehadi.webdev@gmail.com</span>
            </div>
            <div className="item" >
                <h2>Adresse</h2>
                <span>Bienvenue a Freneuse</span>
            </div>
            <div className="item" >
                <h2>Télephone</h2>
                <span>0664611131</span>
            </div>
        </div>
        <div className="formContainer">
            <form 
            ref={formRef}
            >

                <input type="text" placeholder="Nom" name="nom"/>
                <input type="email" placeholder="Email" name="email"/>
                <textarea rows={8} placeholder="Message" name="message" />
                <button>Submit</button>
                {error && "Error"}
                {Success && "Success 🎉" }
            </form>
        </div>
    </div>
  );
}

export default Contact;