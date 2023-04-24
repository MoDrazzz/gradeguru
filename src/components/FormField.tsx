interface Props {
  children: React.ReactNode;
}

export default function FormField({ children }: Props) {
  return <div className="flex w-full flex-col gap-1">{children}</div>;
}
