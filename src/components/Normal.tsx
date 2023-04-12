interface Props {
  children: React.ReactNode;
}

export default function Normal({ children }: Props) {
  return <span className="font-normal">{children}</span>;
}
