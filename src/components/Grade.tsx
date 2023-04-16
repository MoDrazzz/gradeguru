import { useState } from "react";
import colors from "tailwindcss/colors";
import EditGradeOverlay from "./EditGradeOverlay";
import GradeTooltip from "./GradeTooltip";

interface Props {
  data: Grade;
  student: Student;
}

export default function Grade({ data, student }: Props) {
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const dateAdded = new Date(data.dateAdded).toLocaleString("en-gb");

  return (
    <>
      <div className="relative">
        <button
          className="h-8 w-8 rounded-md text-center text-slate-50"
          style={{
            backgroundColor: colors[data.type.color][400],
          }}
          onMouseEnter={() => setIsTooltipActive(true)}
          onMouseLeave={() => setIsTooltipActive(false)}
          onClick={() => setIsOverlayVisible(true)}
        >
          {data.rating}
        </button>
        {isTooltipActive && <GradeTooltip data={{ ...data, dateAdded }} />}
      </div>
      {isOverlayVisible && (
        <EditGradeOverlay
          setIsVisible={setIsOverlayVisible}
          student={student}
          grade={data}
        />
      )}
    </>
  );
}
