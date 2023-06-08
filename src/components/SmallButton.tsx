import classNames from "classnames";
import Icon from "./Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  onClick: () => void;
  isRounded?: boolean;
  isBig?: boolean;
  title?: string;
  icon: IconProp;
}

export default function SmallButton({
  onClick,
  isBig,
  isRounded,
  title,
  icon,
}: Props) {
  return (
    <button
      className={classNames(
        "flex aspect-square items-center justify-center bg-blue-200 text-center text-primary",
        {
          "rounded-lg": !isRounded,
          "rounded-full": isRounded,
          "h-8": !isBig,
          "h-11 text-lg": isBig,
        }
      )}
      onClick={onClick}
      title={title}
    >
      <Icon icon={icon} />
    </button>
  );
}
