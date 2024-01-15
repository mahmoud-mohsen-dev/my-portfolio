import { ButtonProps } from '../types/myTypes';

function Button({ className, children, onClick }: ButtonProps<string>) {
  return (
    <button
      className={`font-titan text-white px-5 rounded-xl shadow-buttonShadow text-2xl hover:scale-110 transition-all cursor-pointer active:scale-100 tracking-wide font-normal py-4 ${className} `}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button;
