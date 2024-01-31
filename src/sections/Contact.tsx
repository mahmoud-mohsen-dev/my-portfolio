// import HeadingSection from '../components/HeadingSection';
import mailBox from '../assets/app-images/mailbox.svg';
import Button from '../components/buttons/Button';
import { useRef, useState } from 'react';
import { sendForm } from '@emailjs/browser';
import PopUp from '../components/smallRusable/PopUp';
import { popUpType } from '../types/myTypes';
import { useLocation } from 'react-router-dom';

function Contact({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const form = useRef<null | HTMLFormElement>(null);
  const [showPopUp, setShowPopUp] = useState<popUpType>({ success: false, failed: false, isSubmited: false });
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const inputSyles =
    ' w-full p-3 placeholder:text-black text-lg font-semibold placeholder:text-lg placeholder:font-poppins placeholder:font-semibold rounded-md bg-secondary font-poppins focus:outline-primary outline-[3px] outline-offset-3 outline';

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

  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const myEmail = 'mahmoud-mohsen-developer@gmail.com';

  return (
    <section
      className={` ${path === '' ? 'py-[56px]' : 'min-h-screen grid place-items-center pt-10'} ${darkModeIsOn ? 'bg-gray-medium' : 'bg-blue-light'}`}
      id="contact"
      data-section
    >
      <PopUp showPopUp={showPopUp} setShow={setShowPopUp} />
      <div className="container">
        {/* <HeadingSection sectionName="Get In Touch" className={`mb-20 ${darkModeIsOn ? 'text-white' : 'text-black'}`} /> */}
        <div className="flex items-center justify-center gap-y-10 gap-x-32 flex-wrap">
          {/* Form */}
          {showPopUp.success || showPopUp.isSubmited ? (
            <h3 className="font-mochiy text-3xl">Thank you 😊</h3>
          ) : (
            <>
              <form className="flex w-[500px] flex-col gap-6 rounded-2xl bg-black p-8" onSubmit={sendEmail} ref={form}>
                <h3 className="text-center font-titan text-3xl text-white mb-2">Send me a message</h3>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className={`${inputSyles}  leading-none`}
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className={`${inputSyles} basis-1/2 leading-none`}
                  required
                />
                <textarea rows={5} name="message" className={`${inputSyles}`} placeholder="Message" required></textarea>

                <Button
                  className="mx-auto w-fit bg-primary px-10 py-3 font-titan text-3xl rounded-md text-white"
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
              {/* copy email */}
              <div>
                <img src={mailBox} alt="mailbox with some plane paper flying" className=" hidden md-des:block" />
                <div className="flex sm-des:mt-10 justify-between items-center leading-5 ">
                  <h2 className="font-bold text-xl relative">
                    <span className={darkModeIsOn ? 'text-blue-light' : 'text-gray-dark'}>{myEmail}</span>
                    <button
                      className={`cursor-pointer hidden md-des:block text-xl absolute top-0 right-0 z-10 translate-x-[140%] font-semibold transition-colors duration-200 ${isCopied ? 'text-green-500' : ' text-blue-medium'}`}
                      onClick={() => {
                        setIsCopied(true);
                        navigator.clipboard.writeText(myEmail);
                      }}
                      onMouseLeave={() => {
                        setTimeout(() => {
                          setIsCopied(false);
                        }, 700);
                      }}
                    >
                      {isCopied ? 'Copied' : 'Copy'}
                    </button>
                  </h2>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
