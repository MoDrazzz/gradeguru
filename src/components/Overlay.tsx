import Button from "./Button";
import Error from "./Error";
import Heading from "./Heading";

interface Props {
  title: string;
  confirmAction: () => void;
  deleteAction?: () => void;
  setIsVisible: OverlayVisibilitySetter;
  children: React.ReactNode;
  error?: string;
}

export default function Overlay({
  title,
  confirmAction,
  deleteAction,
  setIsVisible,
  error,
  children,
}: Props) {
  const handleDisappear = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      setIsVisible(false);
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
        <div className="relative flex gap-6">
          <Button onClick={confirmAction}>Confirm</Button>
          <Button isRed onClick={handleDisappear}>
            Cancel
          </Button>
          {deleteAction && (
            <Button isRed onClick={deleteAction}>
              Delete
            </Button>
          )}
          {error && (
            <div className="absolute top-full mt-3 w-full">
              <Error>{error}</Error>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
