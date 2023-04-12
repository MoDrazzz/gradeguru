interface Props {
  refState: React.Ref<HTMLTextAreaElement>;
  placeholder: string;
}

export default function Textarea({ refState, placeholder }: Props) {
  return (
    <textarea
      ref={refState}
      rows={4}
      className="w-full resize-none rounded-lg border-2 border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-primary"
      placeholder={placeholder}
    />
  );
}
