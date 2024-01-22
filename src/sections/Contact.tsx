import HeadingSection from '../components/HeadingSection';
import mailBox from '../assets/app-images/mailbox.svg';
import Button from '../components/Button';
import { useRef, useState } from 'react';
import { sendForm } from '@emailjs/browser';
import PopUp from '../components/PopUp';
import { popUpType } from '../types/myTypes';

function Contact({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const form = useRef<null | HTMLFormElement>(null);
  const [showPopUp, setShowPopUp] = useState<popUpType>({ success: false, failed: false, isSubmited: false });
  const [isLoading, setIsLoading] = useState(false);
  const inputSyles =
    ' w-full p-3 placeholder:text-black text-lg font-semibold placeholder:text-lg placeholder:font-poppins placeholder:font-semibold rounded-[10px] bg-secondary font-poppins focus:outline-primary outline-4 outline-offset-3 outline';

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (form.current) {
      sendForm('service_cx4j2gn', 'template_vubpu07', form.current, 'mo4xrPkkOl7ccKW6f')
        .then(
          () => {
            setShowPopUp({ success: true, failed: false, isSubmited: true });
          },
          () => {
            setShowPopUp({ success: false, failed: true, isSubmited: false });
            form.current?.reset();
          },
        )
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <section className={` pt-8 py-16 ${darkModeIsOn ? 'bg-gray-medium' : 'bg-blue-light'}`} id="contact">
      <PopUp showPopUp={showPopUp} setShow={setShowPopUp} />
      <div className="container">
        <HeadingSection sectionName="Get In Touch" className={`mb-20 ${darkModeIsOn ? 'text-white' : 'text-black'}`} />
        <div className="flex justify-center items-center gap-32 ">
          {/* Form */}
          {showPopUp.success || showPopUp.isSubmited ? (
            <h3 className="text-3xl font-mochiy">Thank you 😊</h3>
          ) : (
            <form className="bg-black flex flex-col p-6 gap-5 rounded-[50px] w-[500px]" onSubmit={sendEmail} ref={form}>
              <h3 className="text-white font-titan text-3xl text-center">Send me a message</h3>
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
                disabled={isLoading}
                onClick={() => {}}
              >
                {isLoading ? (
                  <div
                    className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-white border-r-[transparent] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  ></div>
                ) : (
                  <span>Send</span>
                )}
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
