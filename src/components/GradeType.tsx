import { useState } from "react";
import GradeTypeTooltip from "./GradeTypeTooltip";

interface Props {
  data: GradeType;
  onClick: () => void;
}

export default function GradeType({ data, onClick }: Props) {
  const [tooltipActive, setTooltipActive] = useState(false);

  return (
    <>
      <div
        className="relative flex cursor-pointer items-center gap-3"
        onClick={onClick}
        onMouseEnter={() => setTooltipActive(true)}
        onMouseLeave={() => setTooltipActive(false)}
      >
        <span
          className="h-3 w-3 cursor-pointer rounded-full"
          style={{ backgroundColor: data.color }}
        />
        <label className="cursor-pointer">{data.name}</label>
        {tooltipActive && <GradeTypeTooltip data={data} />}
      </div>
    </>
  );
}
