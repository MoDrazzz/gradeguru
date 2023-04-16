import Icon from "./Icon";

interface Props {
  onClick: () => void;
}

export default function RoundButton({ onClick }: Props) {
  return (
    <button
      className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-200 text-center text-lg text-primary"
      onClick={onClick}
    >
      <Icon name="plus" />
    </button>
  );
}
