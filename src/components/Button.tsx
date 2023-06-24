import classNames from "classnames";

interface Props {
  children: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button";
  disabled?: boolean;
  isBig?: boolean;
  isRed?: boolean;
}

export default function Button({
  children,
  type = "button",
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
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
