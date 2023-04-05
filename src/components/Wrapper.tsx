interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return <div className="bg-slate-200 font-medium text-dark">{children}</div>;
}
