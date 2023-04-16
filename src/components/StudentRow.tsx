"use client";

import { Fragment, useState } from "react";
import AddGradeOverlay from "./AddGradeOverlay";
import Avatar from "./Avatar";
import Grade from "./Grade";
import SmallButton from "./SmallButton";

interface Props {
  student: Student;
}

const getAverage = (grades: Grade[]) => {
  let divider = grades
    .map((grade) => grade.type.weight)
    .reduce((a, b) => a + b, 0);

  const sum = grades.reduce((a, b) => a + b.rating * b.type.weight, 0);

  return (sum / divider).toFixed(2);
};

export default function StudentRow({ student }: Props) {
  const [isAddGradeOverlayVisible, setIsAddGradeOverlayVisible] =
    useState(false);

  return (
    <div className="grid grid-cols-[auto_min-content_25%_min-content_1fr] items-center gap-6 border-b-2 border-slate-300 px-12 py-2 last:border-b-0">
      <Avatar src={student.avatar} name={student.name} />
      <span className="w-6 text-center">{student.number}</span>
      <span>{student.name}</span>
      <span className="w-12 text-center">{getAverage(student.grades)}</span>
      <div className="flex gap-3">
        <SmallButton
          isRectangular
          onClick={() => setIsAddGradeOverlayVisible(true)}
        />
        {student.grades.map((grade) => (
          <Fragment key={grade.id}>
            <Grade student={student} data={grade} />
          </Fragment>
        ))}
      </div>
      {isAddGradeOverlayVisible && (
        <AddGradeOverlay
          setIsVisible={setIsAddGradeOverlayVisible}
          student={student}
        />
      )}
    </div>
  );
}
