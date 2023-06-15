import classNames from "classnames";

interface Props {
  children: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isBig?: boolean;
  isRed?: boolean;
}

export default function Button({
  children,
  disabled,
  isBig,
  isRed,
  onClick,
}: Props) {
  return (
    <button
      className={classNames("w-fit rounded-lg px-5 py-2 text-blue-50", {
        "bg-primary": !isRed,
        "bg-red-400": isRed,
        "text-xl": isBig,
        "opacity-70": disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
