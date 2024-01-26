// import { motion } from 'framer-motion';
function Shape({ size, toggled }: { size: string; toggled: boolean }) {
  const smStyles = toggled
    ? 'h-[3px] w-[3px] top-1/2 left-[50%] translate-x-[-10px] first-of-type:translate-x-[-27px] first-of-type:-translate-y-[3px]'
    : 'h-[3px] w-[30px] top-1/2 left-[50%] ';
  const mdStyles = toggled
    ? 'h-[5px] w-[5px] top-1/4 left-1/4 translate-x-[4px] translate-y-[-2px]'
    : 'h-[5px] w-[40px] top-1/4 left-1/4 z-20';
  const lgStyles = toggled
    ? 'h-[7px] w-[7px] top-[70%] left-1/4 translate-x-[-4px]'
    : 'h-[7px] w-[45px] top-[70%] left-1/4';
  let styles;
  if (size === 'sm') {
    styles = smStyles;
  }
  if (size === 'md') {
    styles = mdStyles;
  }
  if (size === 'lg') {
    styles = lgStyles;
  }
  if (toggled) {
    styles = styles + ' shadow-[0_0_8px_1.5px_violet] bg-[lightgray]';
  } else {
    styles = styles + ' bg-slate-100';
  }
  return <div className={`absolute transition-all duration-100 rounded-[50%] ${styles}`}></div>;
}

export default Shape;
