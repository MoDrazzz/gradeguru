export default function SignupSkeleton() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex rounded-xl bg-slate-50 p-3">
        <div className="flex h-[620px] w-96 animate-pulse flex-col justify-between rounded-lg bg-slate-200 px-8 py-8"></div>
        <div className="flex animate-pulse flex-col gap-8 px-8 py-12">
          <div className="flex flex-col gap-3">
            <div className="h-9 w-28 rounded-full bg-slate-200" />
            <div className="h-6 w-48 rounded-full bg-slate-200" />
          </div>
          <div className="flex w-[448px] flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="h-6 w-28 rounded-full bg-slate-200" />
              <div className="flex gap-3">
                <div className="h-11 w-full rounded-full bg-slate-200" />
                <div className="h-11 w-full rounded-full bg-slate-200" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-6 w-12 rounded-full bg-slate-200" />
              <div className="h-11 w-full rounded-full bg-slate-200" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-6 w-20 rounded-full bg-slate-200" />
              <div className="h-11 w-full rounded-full bg-slate-200" />
            </div>
            <div className="flex gap-5">
              <div className="flex w-full flex-col gap-1">
                <div className="h-6 w-20 rounded-full bg-slate-200" />
                <div className="h-11 w-full rounded-full bg-slate-200" />
              </div>
              <div className="flex w-full flex-col gap-1">
                <div className="h-6 w-36 rounded-full bg-slate-200" />
                <div className="h-11 w-full rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
          <div className="h-10 w-24 rounded-full bg-slate-200" />
        </div>
      </div>
    </main>
  );
}
