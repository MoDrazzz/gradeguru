import classNames from "classnames";

interface Props {
  id: string;
  isActive: boolean;
}

export default function RadioInput({ id, isActive }: Props) {
  return (
    <label
      htmlFor={id}
      className={classNames(
        "flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 capitalize",
        {
          "border-primary text-primary": isActive,
          "border-slate-400 text-slate-400": !isActive,
        }
      )}
    >
      <span
        className={classNames(
          "flex h-[14px] w-[14px] items-center justify-center rounded-full border-2",
          {
            "border-primary": isActive,
            "border-slate-400": !isActive,
          }
        )}
      >
        <span
          className={classNames("block h-[6px] w-[6px] rounded-full", {
            "bg-primary": isActive,
            "bg-slate-400": !isActive,
          })}
        />
      </span>
      {id}
    </label>
  );
}
