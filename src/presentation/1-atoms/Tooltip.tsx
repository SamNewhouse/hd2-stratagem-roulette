import { FC, ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode;
}

const Tooltip: FC<Props> = ({ text, children }) => {
  return (
    <div className="relative group cursor-pointer">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-1000 pointer-events-none">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 z-[-1]" />
      </div>
    </div>
  );
};

export default Tooltip;
