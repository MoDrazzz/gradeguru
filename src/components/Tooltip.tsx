import classNames from "classnames";

interface Props {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  children: React.ReactNode;
}

export default function Tooltip({ children, position }: Props) {
  return (
    <ul
      className={classNames(
        "absolute z-10 h-fit w-max rounded-lg border-2 border-slate-400 bg-blue-50 p-3",
        {
          "bottom-full left-0 mb-1 ml-1": position === "top-left",
          "bottom-full right-0 mb-1 mr-1": position === "top-right",
          "left-0 top-full ml-1 mt-1": position === "bottom-left",
          "right-0 top-full mr-1 mt-1": position === "bottom-right",
        }
      )}
    >
      {children}
    </ul>
  );
}
