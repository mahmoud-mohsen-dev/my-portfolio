function Crater({ className }: { className: string }) {
  return (
    <div className={`bg-[burlywood] rounded-[50%] absolute shadow-[0_5px_5px_rgba(0,0,0,.4)_inset] ${className}`}></div>
  );
}

export default Crater;
