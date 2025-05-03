import { FC } from "react";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const PlayerCountSlider: FC<Props> = ({ value = 4, onChange }) => {
  const percentage = ((value - 1) / 3) * 100;

  return (
    <div className="flex flex-col items-center mb-6 text-white">
      <label htmlFor="playerCount" className="text-lg font-semibold mb-2">
        Players: {value}
      </label>
      <input
        id="playerCount"
        type="range"
        min="1"
        max="4"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-64 h-2 appearance-none rounded-lg cursor-pointer 
          [&::-webkit-slider-thumb]:appearance-none 
          [&::-webkit-slider-thumb]:w-4 
          [&::-webkit-slider-thumb]:h-4 
          [&::-webkit-slider-thumb]:bg-stone-400 
          [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:border-none 
          [&::-moz-range-thumb]:bg-stone-400 
          [&::-moz-range-thumb]:w-4 
          [&::-moz-range-thumb]:h-4 
          [&::-moz-range-thumb]:rounded-full"
        style={{
          background: `linear-gradient(to right, #a3a3a3 ${percentage}%, #44403c ${percentage}%)`,
        }}
      />
    </div>
  );
};

export default PlayerCountSlider;
