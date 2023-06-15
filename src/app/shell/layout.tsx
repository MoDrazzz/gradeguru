import Sidebar from "@/components/Sidebar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="grid grid-cols-[min-content_1fr]">
      <Sidebar />
      <div className="grid h-screen grid-rows-[min-content_1fr] gap-9 p-12">
        {children}
      </div>
    </div>
  );
}
