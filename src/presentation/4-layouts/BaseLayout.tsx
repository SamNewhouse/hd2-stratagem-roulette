import { FC, memo, PropsWithChildren, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const BaseLayout: FC<Props> = ({ children, className }) => {
  return (
    <>
      <div
        className={`max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8 w-full${
          className ? " " + className : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(BaseLayout);
