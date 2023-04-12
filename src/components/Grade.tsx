import { useState } from "react";
import GradeTooltip from "./GradeTooltip";

interface Props {
  data: Grade;
  onClick: () => void;
}

export default function Grade({ data, onClick }: Props) {
  const [tooltipActive, setTooltipActive] = useState(false);
  const dateAdded = new Date(data.dateAdded).toLocaleString("en-gb");

  return (
    <div className="relative">
      <button
        className="h-8 w-8 rounded-md text-center text-slate-50"
        style={{
          backgroundColor: data.type.color,
        }}
        onMouseEnter={() => setTooltipActive(true)}
        onMouseLeave={() => setTooltipActive(false)}
        onClick={onClick}
      >
        {data.rating}
      </button>
      {tooltipActive && <GradeTooltip data={{ ...data, dateAdded }} />}
    </div>
  );
}
