"use client";

interface Props {
  refState: React.Ref<HTMLTextAreaElement>;
  placeholder: string;
  defaultValue?: string;
}

export default function Textarea({
  refState,
  placeholder,
  defaultValue = "",
}: Props) {
  return (
    <textarea
      ref={refState}
      rows={4}
      className="w-full resize-none rounded-lg border-2 border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-primary"
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}
