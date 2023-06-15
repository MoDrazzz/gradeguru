"use client";

import { faEdit, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";
import LoginStatus from "./LoginStatus";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { faIcons, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Sidebar() {
  const logout = async () => {
    const supabase = createClientComponentClient();

    await supabase.auth.signOut();
  };

  return (
    <aside className="grid h-screen w-[15vw] grid-rows-[repeat(4,min-content)_1fr] items-end justify-items-center gap-12 overflow-scroll border-r-2 border-slate-300 bg-slate-50 py-12">
      <Logo />
      <LoginStatus />
      <Button onClick={() => {}}>New lesson</Button>
      <nav className="grid w-full gap-8">
        <NavItem icon={faIcons} href="/shell/dashboard">
          Dashboard
        </NavItem>
        <NavItem icon={faEnvelope} href="/shell/messages">
          Messages
        </NavItem>
        <NavItem icon={faEdit} href="/shell/grades">
          Grades
        </NavItem>
      </nav>
      <NavItem href="" isStatic icon={faSignOut} onClick={logout}>
        Log Out
      </NavItem>
    </aside>
  );
}
