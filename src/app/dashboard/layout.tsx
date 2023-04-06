import Heading from "@/components/Heading";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  console.log(children);
  return (
    <div className="grid grid-cols-[min-content_1fr]">
      <Sidebar />
      <div className="grid grid-rows-[min-content_1fr] gap-9 p-12">
        {children}
      </div>
    </div>
  );
}
