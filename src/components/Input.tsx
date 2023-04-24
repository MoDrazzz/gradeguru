"use client";

import classNames from "classnames";

interface Props {
  refState: React.Ref<HTMLInputElement>;
  placeholder: string;
  defaultValue?: string;
  isError?: boolean;
  type?: "text" | "password";
}

export default function Input({
  defaultValue = "",
  refState,
  placeholder,
  isError,
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      ref={refState}
      className={classNames(
        "w-full resize-none rounded-lg border-2 bg-slate-50 px-3 py-2 text-base outline-none",
        {
          "border-red-500": isError,
          "border-slate-300 focus:border-primary": !isError,
        }
      )}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}
