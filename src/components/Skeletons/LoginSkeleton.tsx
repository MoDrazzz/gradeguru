export default function LoginSkeleton() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex rounded-xl bg-slate-50 p-3">
        <div className="flex animate-pulse flex-col gap-8 px-8 py-12">
          <div className="flex w-full items-center justify-center">
            <div className="h-10 w-48 rounded-full bg-slate-200" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-9 w-56 rounded-full bg-slate-200" />
            <div className="h-6 w-44 rounded-full bg-slate-200" />
          </div>
          <div className="flex w-96 flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="h-6 w-12 rounded-full bg-slate-200" />
              <div className="h-11 w-full rounded-full bg-slate-200" />
            </div>
            <div className="flex w-full flex-col gap-1">
              <div className="h-6 w-20 rounded-full bg-slate-200" />
              <div className="h-11 w-full rounded-full bg-slate-200" />
            </div>
          </div>
          <div className="h-10 w-20 rounded-full bg-slate-200" />
        </div>
      </div>
    </main>
  );
}
