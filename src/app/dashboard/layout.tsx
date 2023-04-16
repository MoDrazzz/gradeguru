import Sidebar from "@/components/Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="grid grid-cols-[min-content_1fr]">
      <Sidebar />
      <div className="grid grid-rows-[min-content_1fr] gap-9 p-12">
        {children}
      </div>
    </div>
  );
}
