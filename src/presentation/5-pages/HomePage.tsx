import { NextPage } from "next";
import { useState } from "react";
import Stratagems from "../../lib/data/stratagems.json";
import { Stratagem } from "../../lib/data/types/stratagem";
import PlayerLoadout from "../1-atoms/PlayerLoadout";
import PlayerCountSlider from "../2-molecules/PlayerCountSlider";
import StratagemDropdown from "../2-molecules/StratagemDropdown";
import BaseLayout from "../4-layouts/BaseLayout";

const HomePage: NextPage = () => {
  const [playerCount, setPlayerCount] = useState(4);
  const [excludedStratagems, setExcludedStratagems] = useState<Set<number>>(
    new Set()
  );
  const [loadouts, setLoadouts] = useState<Stratagem[][]>([]);

  const toggleStratagem = (id: number) => {
    setExcludedStratagems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const availableStratagems = Stratagems.filter(
    (s) => !excludedStratagems.has(s.id)
  );

  const generateLoadouts = () => {
    const newLoadouts = Array.from({ length: playerCount }, () => {
      const selectedStratagems = [...availableStratagems]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
      return selectedStratagems;
    });
    setLoadouts(newLoadouts);
  };

  return (
    <BaseLayout className="home bg-stone-900 text-white">
      <div className="flex flex-col items-center min-h-screen py-4 px-4">
        <PlayerCountSlider value={playerCount} onChange={setPlayerCount} />

        <StratagemDropdown
          stratagems={Stratagems}
          excluded={excludedStratagems}
          onToggle={toggleStratagem}
        />

        <button
          onClick={generateLoadouts}
          className="mt-6 bg-stone-800 font-bold text-white antialiased uppercase text-lg py-3 px-7 rounded-lg shadow hover:bg-stone-700 transition-all"
        >
          Generate Loadouts
        </button>

        {loadouts.length > 0 && (
          <div className="w-full my-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
            {loadouts.map((loadout, index) => (
              <PlayerLoadout
                key={index}
                name={`Player ${index + 1}`}
                loadout={loadout}
              />
            ))}
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default HomePage;
