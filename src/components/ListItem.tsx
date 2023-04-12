interface Props {
  children: React.ReactNode;
}

export default function ListItem({ children }: Props) {
  return <li className="flex items-center gap-3">{children}</li>;
}
