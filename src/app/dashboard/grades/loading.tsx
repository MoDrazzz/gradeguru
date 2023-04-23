export default function Skeleton() {
  return (
    <>
      <div className="h-8 w-24 animate-pulse rounded-full bg-slate-300" />
      <div className="wrapper animate-pulse">
        <div className="flex h-full w-full flex-col gap-3">
          <div className="grid grid-cols-[1fr_max-content]">
            <div className="h-11 w-36 rounded-full bg-slate-200" />
            <div className="h-11 w-44 rounded-full bg-slate-200" />
          </div>
          <div className="flex h-full w-full flex-col gap-2">
            <div className="py-2">
              <div className="h-6 w-full rounded-full bg-slate-200" />
            </div>
            <div className="h-10 w-full rounded-full bg-slate-200" />
            <div className="h-10 w-full rounded-full bg-slate-200" />
            <div className="h-10 w-full rounded-full bg-slate-200" />
          </div>
          <div className="flex gap-8 p-3">
            <div className="h-8 w-8 rounded-full bg-slate-200" />
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-slate-200" />
              <div className="h-6 w-12 rounded-full bg-slate-200" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-slate-200" />
              <div className="h-6 w-12 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
