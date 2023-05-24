interface Props {
  children: React.ReactNode;
}

export default function TextNormal({ children }: Props) {
  return <span className="font-normal">{children}</span>;
}
