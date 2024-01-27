import { AnchorProps } from '../../types/myTypes';

function Anchor({ className, children, blank = true, href }: AnchorProps<string>) {
  return (
    <a
      href={href}
      target={blank ? '_blank' : ''}
      rel="noreferrer"
      className={` cursor-pointer font-titan font-normal tracking-wide text-white shadow-buttonShadow transition-all  active:scale-90 hover:md-tab:scale-110 md-tab:active:scale-90 ${className} `}
    >
      {children}
    </a>
  );
}

export default Anchor;
