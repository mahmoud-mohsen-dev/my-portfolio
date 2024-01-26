import Crater from './Crater';
import Shape from './Shape';
import { motion } from 'framer-motion';

function Toggle({ toggled, onClick }: { toggled: boolean; onClick: () => void }) {
  const nightStyles = 'bg-gradient-to-b bg-grad from-[#191970] to-[#663399]';
  const lightStyles = 'bg-gradient-to-b bg-grad from-[#00ffff] to-[#87ceeb]';
  const toggleStyles = toggled ? nightStyles : lightStyles;
  const notchStyles = toggled
    ? 'bg-slate-200 shadow-[0_0_5px_white] left-[45px] '
    : 'bg-yellow-200 shadow-[0_0_5px_yellow] left-[5px] ';
  return (
    <button onClick={onClick} data-toggled={toggled} className={`relative h-10 w-[80px] rounded-full ${toggleStyles}`}>
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 25,
        }}
        className={`h-[30px] w-[30px]  z-10 absolute top-[5px]  rounded-full ${notchStyles}`}
      >
        <Crater className={`left-0 top-1.5 h-[6px] w-[18px] -rotate-45 ${toggled ? 'opacity-30' : 'opacity-0'}`} />
        <Crater className={`right-[1px] top-2 h-[6px] w-3 rotate-45 ${toggled ? 'opacity-30' : 'opacity-0'}`} />
      </motion.div>
      <div>
        <Shape size="sm" toggled={toggled} />
        <Shape size="sm" toggled={toggled} />
        <Shape size="md" toggled={toggled} />
        <Shape size="lg" toggled={toggled} />
      </div>
    </button>
  );
}

export default Toggle;
