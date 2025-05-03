import { FC } from "react";
import { Stratagem } from "../../lib/data/types/stratagem";
import Icon from "../1-atoms/Icon";
import Tooltip from "./Tooltip";

interface Props {
  name: string;
  loadout: Stratagem[];
}

const PlayerLoadout: FC<Props> = ({ name, loadout }) => {
  return (
    <div className="border border-stone-700 rounded-xl p-3 lg:p-5 bg-stone-900 text-white shadow">
      <h2 className="text-lg font-semibold mb-3 text-center">{name}</h2>
      <div className="grid grid-cols-4 gap-3 sm:gap-2 md:gap-3 lg:gap-5">
        {loadout.map((s) => (
          <Tooltip text={s.name}>
            <div className="bg-stone-800 rounded-lg p-2 sm:p-1 md:p-2 flex justify-center items-center hover:bg-stone-700 transition-colors aspect-square">
              <Icon {...s} className="w-4/5 h-4/5" />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default PlayerLoadout;
