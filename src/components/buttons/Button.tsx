import { ButtonProps } from '../../types/myTypes';

function Button({ className, children, value, type = 'button', onClick }: ButtonProps<string>) {
  return (
    <button
      className={`cursor-pointer font-titan font-normal tracking-wide shadow-buttonShadow transition-all  active:scale-90 hover:md-tab:scale-110 md-tab:active:scale-90 ${className} `}
      onClick={() => onClick()}
      type={type}
      value={value}
    >
      {children}
    </button>
  );
}

export default Button;
