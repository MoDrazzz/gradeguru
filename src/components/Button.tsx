import classNames from "classnames";

interface Props {
  children: string;
  onClick: () => void;
  isBig?: boolean;
}

export default function Button({ children, isBig, onClick }: Props) {
  return (
    <button
      className={classNames(
        "w-fit rounded-lg bg-primary px-5 py-2 text-blue-50",
        {
          "text-xl": isBig,
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
