import Image from "next/image";
import { FC, memo } from "react";
import { Stratagem } from "../../lib/data/types/stratagem";

interface IconProps extends Stratagem {
  className?: string;
}

const Icon: FC<IconProps> = ({ className, id, category, name, icon }) => {
  const src = `icons/stratagems/${category}/${icon}`;

  return (
    <>
      <div key={id} id={String(id)}>
        <Image
          src={src}
          alt={name}
          width={100}
          height={100}
          className={`w-22 p-1${className ? " " + className : ""}`}
        />
      </div>
    </>
  );
};

export default memo<IconProps>(Icon);
