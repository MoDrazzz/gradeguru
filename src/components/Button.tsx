import classNames from "classnames";

interface Props {
  children: string;
  isBig?: boolean;
}

export default function Button({ children, isBig }: Props) {
  return (
    <button
      className={classNames(
        "w-fit rounded-lg bg-primary px-5 py-2 text-blue-50",
        {
          "text-xl": isBig,
        }
      )}
    >
      {children}
    </button>
  );
}
