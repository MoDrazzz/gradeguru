import classNames from "classnames";

interface Props {
  name: string;
  onClick: () => void;
  isActive: boolean;
}

export default function Tab({ name, onClick, isActive }: Props) {
  return (
    <span
      className={classNames("text-heading cursor-pointer border-b-4 px-5", {
        "border-primary": isActive,
        "border-slate-300": !isActive,
      })}
      onClick={onClick}
    >
      {name}
    </span>
  );
}
