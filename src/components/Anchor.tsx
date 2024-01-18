import { AnchorProps } from '../types/myTypes';

function Anchor({ className, children, href }: AnchorProps<string>) {
  return (
    <a
      href={href}
      className={`cursor-pointer rounded-xl px-5 py-4 font-titan text-2xl font-normal tracking-wide text-white shadow-buttonShadow transition-all  active:scale-90 hover:md-tab:scale-110 md-tab:active:scale-90 ${className} `}
    >
      {children}
    </a>
  );
}

export default Anchor;
