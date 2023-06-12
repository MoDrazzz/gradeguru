interface Props {
  children: string | string[];
}

export default function Heading({ children }: Props) {
  return <h1 className="text-2xl">{children}</h1>;
}
