import Heading from "./Heading";
import Button from "./Button";

interface Props {
  title: string;
  confirmAction: () => void;
  deleteAction?: () => void;
  setIsVisible: OverlayVisibilitySetter;
  children: React.ReactNode;
}

export default function Overlay({
  title,
  confirmAction,
  deleteAction,
  setIsVisible,
  children,
}: Props) {
  const handleDisappear = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      setIsVisible(false);
      console.log(e);
    }
  };

  return (
    <div
      className="absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-dark bg-opacity-20"
      onClick={handleDisappear}
    >
      <div className="flex min-w-[512px] flex-col gap-6 rounded-2xl bg-slate-50 p-12">
        <Heading>{title}</Heading>
        {children}
        <div className="flex gap-6">
          <Button onClick={confirmAction}>Confirm</Button>
          <Button isRed onClick={handleDisappear}>
            Cancel
          </Button>
          {deleteAction && (
            <Button isRed onClick={deleteAction}>
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
