import SelectedGroupContextProvider from "@/contexts/SelectedGroupContext";

interface Props {
  children: React.ReactNode;
}

export default function GradesLayout({ children }: Props) {
  return (
    <SelectedGroupContextProvider>{children}</SelectedGroupContextProvider>
  );
}
