import Icon from "./Icon";
import LoginStatus from "./LoginStatus";
import Logo from "./Logo";
import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-[15vw] flex-col gap-12 border-r-2 border-slate-400 bg-slate-50 py-12">
      <Logo />
      <LoginStatus />
      <nav className="grid gap-8">
        <NavItem name="dashboard" />
        <NavItem name="messages" />
        <NavItem name="grades" />
      </nav>
    </aside>
  );
}
