import { ButtonProps } from '../types/myTypes';

function Button({ className, children, onClick }: ButtonProps<string>) {
  return (
    <button
      className={`cursor-pointer rounded-xl px-5 py-4 font-titan text-xl font-normal tracking-wide text-white shadow-buttonShadow transition-all  active:scale-90 hover:md-tab:scale-110 md-tab:active:scale-90 ${className} `}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button;
