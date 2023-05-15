interface Props {
  children: React.ReactNode;
}

export default function Error({ children }: Props) {
  return (
    <span className="absolute left-0 top-full text-sm font-medium text-red-600">
      {children}
    </span>
  );
}
