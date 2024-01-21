import HeadingSection from '../components/HeadingSection';
import mailBox from '../assets/app-images/mailbox.svg';
import Button from '../components/Button';
import { useRef, useState } from 'react';
import { sendForm } from '@emailjs/browser';
import PopUp from '../components/PopUp';

function Contact() {
  const form = useRef<null | HTMLFormElement>(null);
  const [showPopUp, setShowPopUp] = useState({ success: false, failed: false });
  const inputSyles =
    ' w-full p-3 placeholder:text-black text-lg font-semibold placeholder:text-lg placeholder:font-poppins placeholder:font-semibold rounded-[10px] bg-secondary font-poppins focus:outline-primary outline-4 outline-offset-3 outline';

  console.log(form.current);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      sendForm('service_cx4j2gn', 'template_vubpu07', form.current, 'mo4xrPkkOl7ccKW6f').then(
        (result) => {
          console.log(result);
          form.current?.reset();
          setShowPopUp({ success: true, failed: false });
        },
        (error) => {
          console.log(error.text);
          setShowPopUp({ success: false, failed: true });
        },
      );
    }
  };

  return (
    <section className="  bg-blue-light pt-10 pb-20">
      <PopUp
        message="Your message has been successfully submitted."
        show={showPopUp.success ? true : false}
        isSuccess={true}
      />
      <PopUp message="Something went wrong" show={showPopUp.failed ? true : false} isSuccess={false} />
      <div className="container">
        <HeadingSection sectionName="Get In Touch" className="mb-20" />
        <div className="flex justify-center items-center gap-32 ">
          {/* Form */}
          {showPopUp.success ? (
            <h3 className="text-3xl font-mochiy">Thank you 😊</h3>
          ) : (
            <form className="bg-black flex flex-col p-6 gap-5 rounded-[50px] w-[500px]" onSubmit={sendEmail} ref={form}>
              <h3 className="text-white font-titan text-3xl text-center">Connect with me.</h3>
              <div className="flex justify-between gap-y-5 gap-x-5">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className={`${inputSyles} basis-1/2 leading-none`}
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className={`${inputSyles} basis-1/2 leading-none`}
                  required
                />
              </div>
              <textarea rows={5} name="message" className={`${inputSyles}`} placeholder="Message" required></textarea>

              <Button
                className="bg-primary font-titan w-fit mx-auto px-10 py-3 text-3xl"
                value="Send"
                type="submit"
                onClick={() => {}}
              >
                Send
              </Button>
            </form>
          )}
          <img src={mailBox} alt="mailbox with some plane paper flying" className=" hidden sm-des:block" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
