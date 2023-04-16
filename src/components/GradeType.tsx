import { useState } from "react";
import EditGradeTypeOverlay from "./EditGradeTypeOverlay";
import GradeTypeTooltip from "./GradeTypeTooltip";

interface Props {
  data: GradeType;
}

export default function GradeType({ data }: Props) {
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <>
      <div
        className="relative flex cursor-pointer items-center gap-3"
        onClick={() => setIsOverlayVisible(true)}
        onMouseEnter={() => setIsTooltipActive(true)}
        onMouseLeave={() => setIsTooltipActive(false)}
      >
        <span
          className="h-3 w-3 cursor-pointer rounded-full"
          style={{ backgroundColor: data.color }}
        />
        <label className="cursor-pointer">{data.name}</label>
        {isTooltipActive && <GradeTypeTooltip data={data} />}
      </div>
      {isOverlayVisible && (
        <EditGradeTypeOverlay
          setIsVisible={setIsOverlayVisible}
          gradeType={data}
        />
      )}
    </>
  );
}
