"use client";

import Button from "./Button";
import LoginStatus from "./LoginStatus";
import Logo from "./Logo";
import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <aside className="grid h-screen w-[15vw] grid-rows-[repeat(4,min-content)_1fr] items-end justify-items-center gap-12 border-r-2 border-slate-300 bg-slate-50 py-12">
      <Logo />
      <LoginStatus />
      <Button onClick={() => {}}>New lesson</Button>
      <nav className="grid w-full gap-8">
        <NavItem icon="dashboard" href="/dashboard">
          Dashboard
        </NavItem>
        <NavItem icon="messages" href="/dashboard/messages">
          Messages
        </NavItem>
        <NavItem icon="grades" href="/dashboard/grades">
          Grades
        </NavItem>
      </nav>
      <NavItem icon="logout" href="/">
        Log Out
      </NavItem>
    </aside>
  );
}
