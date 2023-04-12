import Heading from "./Heading";
import Button from "./Button";

interface Props {
  title: string;
  confirmAction: () => void;
  setIsVisible: OverlayVisibilitySetter;
  children: React.ReactNode;
}

export default function Overlay({
  title,
  confirmAction,
  setIsVisible,
  children,
}: Props) {
  return (
    <div className="absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-dark bg-opacity-20">
      <div className="flex min-w-[512px] flex-col gap-6 rounded-2xl bg-slate-50 p-12">
        <Heading>{title}</Heading>
        {children}
        <div className="flex gap-6">
          <Button onClick={confirmAction}>Confirm</Button>
          <Button isRed onClick={() => setIsVisible(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
