import { faWarning } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

interface Props {
  children: React.ReactNode;
}

export default function Warning({ children }: Props) {
  return (
    <div className="flex items-center gap-4 border-l-4 border-yellow-500 bg-yellow-200 p-4 text-yellow-700">
      <span className="text-xl text-yellow-500">
        <Icon icon={faWarning} />
      </span>
      {children}
    </div>
  );
}
