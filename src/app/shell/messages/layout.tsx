import Heading from "@/components/Heading";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <Heading>Messages</Heading>
      {children}
    </>
  );
}
