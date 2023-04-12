import Icon from "./Icon";

interface Props {
  state: boolean;
  stateSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Checkbox({ state, stateSetter }: Props) {
  const handleChange = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e);
    if (e.code === "Enter") {
      stateSetter((prev) => !prev);
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleChange}
      onClick={() => stateSetter((prev) => !prev)}
      className="relative h-11 w-11 rounded-lg border-2 border-slate-300"
    >
      {state && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Icon name="check" />
        </span>
      )}
    </div>
  );
}
