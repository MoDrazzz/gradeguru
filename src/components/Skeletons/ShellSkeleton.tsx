export default function ShellSkeleton() {
  return (
    <div className="grid grid-cols-[min-content_1fr]">
      <aside className="grid h-screen w-[15vw] grid-rows-[repeat(4,min-content)_1fr] items-end justify-items-center gap-12 overflow-scroll border-r-2 border-slate-300 bg-slate-50 py-12">
        <div className="flex w-full animate-pulse items-center justify-center">
          <div className="h-10 w-48 rounded-full bg-slate-200" />
        </div>
        <div className="flex animate-pulse flex-col items-center gap-1">
          <div className="h-4 w-16 rounded-full bg-slate-200" />
          <div className="h-6 w-40 rounded-full bg-slate-200" />
        </div>
        <div className="h-10 w-32 animate-pulse rounded-full bg-slate-200" />
        <nav className="grid w-full animate-pulse gap-8">
          <div className="ml-9 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-200" />
            <div className=" h-7 w-28 rounded-full bg-slate-200" />
          </div>
          <div className="ml-9 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-200" />
            <div className=" h-7 w-24 rounded-full bg-slate-200" />
          </div>
          <div className="ml-9 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-200" />
            <div className=" h-7 w-20 rounded-full bg-slate-200" />
          </div>
        </nav>
        <div className="w-full">
          <div className="ml-9 flex w-full animate-pulse items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-200" />
            <div className="h-7 w-20 rounded-full bg-slate-200" />
          </div>
        </div>
      </aside>
      <div className="grid h-screen animate-pulse grid-rows-[min-content_1fr] gap-9 p-12">
        <div className="h-8 w-48 rounded-full bg-slate-300" />
        <div className="wrapper" />
      </div>
    </div>
  );
}
