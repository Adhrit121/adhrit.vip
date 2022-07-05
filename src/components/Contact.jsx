import React from "react";
import emailjs from '@emailjs/browser';
import { SMTPClient } from '@emailjs/browser';
import './sender.css';
import { render } from "@testing-library/react";

 
function send() {
  const butnoi=`${process.env.REACT_APP_MESA}`;
  const serviceID = `${process.env.REACT_APP_MESR}`;
  const templateID = `${process.env.REACT_APP_MESY}`;
  const btn = document.getElementById('button');
  document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    render(btn.value = 'Sending...')
    emailjs.sendForm(serviceID, templateID, this, butnoi)
      .then(() => {
        render(btn.value = 'Send Email');
        alert('Sent!');
        render(window.location.reload());
      }, (err) => {
        render(btn.value = 'Error');
        console.log(JSON.stringify(err));
        alert("An error has occurred :(                   Try again later");
        render(window.location.reload());
      });
  });
}

function Contact() {
  const butnoi=`${process.env.REACT_APP_MESA}`
  return (
    
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h2 class="heading blue">Contact Me ↓</h2>
            
            <h6 class="text">.</h6>
            <h6 class="text">.</h6>

            
            <form id="form">
            <div class="field">
              <label for="Your_name" class="text">Your_name:</label>
              <input type="text" name="Your_name" id="Your_name" class='input textinput'></input>
            </div>
            <p>___________________________________________________________</p>
            <div class="field">
              <label for="Your_email" class="text">Your_email:</label>
              <input type="text" name="Your_email" id="Your_email" class='input textinput'></input>
            </div>
            <p>___________________________________________________________</p>
            <div class="field">
              <label for="message" class="text">Message_me:</label>
              <input type="text" name="message" id="message" class='input textinput'></input>
            </div>
            <p class="text">___________________________________________________________</p>
            <button id="button" class="button button3" onClick={send}>Send Email</button>
          </form>
          <p>___________________________________________________________</p>
          <p>  </p>
          <p>  </p>
          <p>___________________________________________________________</p>
          <p class="messa">ᴹᵉˢˢᵃᵍᵉ ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ˢᵉⁿᵗ ᵘⁿˡᵉˢˢ ᵃˡˡ ᶠᶦᵉˡᵈˢ ᵃʳᵉ ᶠᶦˡˡᵉᵈ</p>
          <script src="https://smtpjs.com/v3/smtp.js"></script>
          <script type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
          
          <script type="text/javascript">
            
            emailjs.init(butnoi)
          </script> 
          
          
                   </div>
          
        </div>
      </div>
    </div>
    
  );
}
export default Contact;