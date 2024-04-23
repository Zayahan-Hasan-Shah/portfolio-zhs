import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const notify = () => toast("Form has been sent!");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i9rsk4a', 'template_gbi4lte', form.current, {
        publicKey: 'e-EwIONbvE3MPKNKK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
      <div id="contact" className="h-[screen] max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="py-4 text-4xl text-center font-bold text-[#001b5e]">Contact</h1>
        <form  ref={form} onSubmit={sendEmail}  className="p-4 px-8 m-auto mt-8">
          <div className="flex flex-col rounded-xl shadow-xl shadow-gray-400">
            <label className="pl-4 text-2xl mb-2">Name</label>
            <input className="text-4l pl-4 ml-2 mr-2 border-solid rounded-[10px] border-2 border-[#001b5e] placeholder:p-4" type="text" name="user_name" />
            <label className="pl-4 text-2xl mb-2">Email</label>
            <input className="text-4l pl-4 ml-2 mr-2 border-solid rounded-[10px] border-2 border-[#001b5e]" type="email" name="user_email" />
            <label className="pl-4 text-2xl mb-2">Message</label>
            <textarea name="message" className="text-4l pl-4 resize-none ml-2 mr-2 mb-4 border-solid rounded-[10px] border-2 border-[#001b5e]" cols="30" rows="10"></textarea>
            <button onClick={notify} className="text-2xl text-[#001b5e] rounded-[10px] border-2 border-[#001b5e] m-2 transition-[2s] hover:bg-[#001b5e] hover:text-white md:max-w-[20%]" type="submit" value="Send" >Submit</button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact