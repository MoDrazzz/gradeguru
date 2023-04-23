import classNames from "classnames";
import Icon from "./Icon";

interface Props {
  onClick: () => void;
  isRectangular?: boolean;
  title: string;
}

export default function SmallButton({ onClick, isRectangular, title }: Props) {
  return (
    <button
      className={classNames(
        "flex h-8 w-8 items-center justify-center bg-blue-200 text-center text-primary",
        {
          "rounded-lg": isRectangular,
          "rounded-full": !isRectangular,
        }
      )}
      onClick={onClick}
      title={title}
    >
      <Icon name="plus" />
    </button>
  );
}
