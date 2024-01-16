import { ButtonProps } from '../types/myTypes';

function Button({ className, children, onClick }: ButtonProps<string>) {
  return (
    <button
      className={`cursor-pointer rounded-xl px-5 py-4 font-titan text-2xl font-normal tracking-wide text-white shadow-buttonShadow transition-all hover:scale-110 active:scale-100 ${className} `}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button;
