interface Props {
  children: React.ReactNode;
}

export default function Label({ children }: Props) {
  return <label className=" font-semibold">{children}</label>;
}
