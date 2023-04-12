interface Props {
  data: GradeType;
}

export default function GradeType({ data }: Props) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="h-3 w-3 rounded-full"
        style={{ backgroundColor: data.color }}
      />
      <label>{data.name}</label>
    </div>
  );
}
