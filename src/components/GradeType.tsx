interface Props {
  data: GradeType;
  onClick: () => void;
}

export default function GradeType({ data, onClick }: Props) {
  return (
    <div className="flex cursor-pointer items-center gap-3" onClick={onClick}>
      <span
        className="pointer-events-none h-3 w-3 rounded-full"
        style={{ backgroundColor: data.color }}
      />
      <label className="pointer-events-none">{data.name}</label>
    </div>
  );
}
