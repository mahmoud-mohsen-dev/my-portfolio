import { PopUpProps } from '../types/myTypes';

function PopUp({ showPopUp, setShow }: PopUpProps) {
  const successStyles = 'bg-[rgb(214,250,228)] text-[rgb(14,117,55)]';
  const dangerStyless = 'text-[rgb(176,35,58)] bg-[rgb(250,229,233)]';
  const successMessage = 'Your message has been successfully submitted.';
  const failedMessage = 'Something went wrong.';
  const message = showPopUp.success ? successMessage : showPopUp.failed ? failedMessage : '';
  const popUpStyles = showPopUp.success ? successStyles : showPopUp.failed ? dangerStyless : '';
  return (
    <div
      className={`fixed left-0 top-20 z-40 mb-3 inline-flex items-center rounded-lg py-5 pl-6 pr-3 font-poppins text-lg duration-300 ease-out ${showPopUp.success || showPopUp.failed ? 'translate-x-0' : '-translate-x-full'} ${popUpStyles}`}
      role="alert"
    >
      <span className="mr-2">
        {showPopUp.success ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          showPopUp.failed && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          )
        )}
      </span>
      <span>{message}</span>
      <button
        className="ml-3 cursor-pointer"
        onClick={() => setShow({ success: false, failed: false, isSubmited: showPopUp.isSubmited })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default PopUp;
