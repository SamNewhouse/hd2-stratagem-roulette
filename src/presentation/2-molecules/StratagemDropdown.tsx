import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Stratagem } from "../../lib/data/types/stratagem";
import Icon from "../1-atoms/Icon";
import Tooltip from "../1-atoms/Tooltip";

interface Props {
  stratagems: Stratagem[];
  excluded: Set<number>;
  onToggle: (id: number) => void;
  onReset: () => void;
}

const StratagemDropdown = ({
  stratagems,
  excluded,
  onToggle,
  onReset,
}: Props) => {
  const [open, setOpen] = useState(false);

  const grouped = stratagems.reduce<Record<string, Stratagem[]>>(
    (acc, strat) => {
      const category = strat.category ?? "Other";
      if (!acc[category]) acc[category] = [];
      acc[category].push(strat);
      return acc;
    },
    {}
  );

  return (
    <div className="w-full max-w-4xl">
      <button
        className="w-full bg-stone-800 text-white px-4 py-2 rounded shadow flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
        <span>Stratagems</span>
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`mt-2 overflow-visible transition-all duration-400 ${
          open
            ? "max-h-[2000px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-stone-900 p-2 sm:p-5 rounded border border-stone-700 space-y-3 sm:space-y-4 md:space-y-6">
          <div className="flex justify-end">
            <button
              onClick={onReset}
              className="bg-stone-800 text-white antialiased uppercase text-sm py-2 px-9 rounded-lg shadow hover:bg-stone-700 transition-all"
            >
              Reset All
            </button>
          </div>

          {Object.values(grouped).map((items, index) => (
            <div
              key={index}
              className="grid gap-2 grid-cols-6 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-9"
            >
              {items.map((stratagem) => {
                const isExcluded = excluded.has(stratagem.id);
                return (
                  <Tooltip key={stratagem.id} text={stratagem.name}>
                    <div
                      className={`flex justify-center items-center aspect-square cursor-pointer rounded p-1 border transition-colors bg-stone-800 border-stone-600`}
                      onClick={() => onToggle(stratagem.id)}
                    >
                      <Icon
                        {...stratagem}
                        className={`w-4/5 h-4/5 transition-all ${
                          isExcluded ? "grayscale opacity-20" : ""
                        }`}
                      />
                    </div>
                  </Tooltip>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StratagemDropdown;
