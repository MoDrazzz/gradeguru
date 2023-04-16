import classNames from "classnames";
import colors from "tailwindcss/colors";

interface Props {
  color:
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink";
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ColorInput({ color, checked, onChange }: Props) {
  const colorHex = colors[color][400];
  return (
    <div className="relative h-6 w-6">
      <input
        type="radio"
        name="colors"
        checked={checked}
        value={colorHex}
        onChange={onChange}
        className="peer absolute left-0 top-0 z-10 h-full w-full opacity-0"
      />
      <label
        className={
          "absolute left-0 top-0 h-full w-full rounded-lg border-2 border-slate-300 peer-checked:border-blue-500"
        }
        style={{
          backgroundColor: colorHex,
        }}
      />
    </div>
  );
}
