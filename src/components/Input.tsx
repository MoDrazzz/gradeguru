"use client";

interface Props {
  refState: React.Ref<HTMLInputElement>;
  placeholder: string;
  defaultValue?: string;
  type?: "text" | "password";
}

export default function Input({
  defaultValue = "",
  refState,
  placeholder,
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      ref={refState}
      className="w-full resize-none rounded-lg border-2 border-slate-300 bg-slate-50 px-3 py-2 text-base outline-none focus:border-primary"
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}
