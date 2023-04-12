"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Grade from "./Grade";
import Avatar from "./Avatar";
import AddGradeOverlay from "./AddGradeOverlay";
import { Fragment, useState } from "react";
import EditGradeOverlay from "./EditGradeOverlay";

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
  const [addGradeOverlayVisible, setAddGradeOverlayVisible] = useState(false);
  const [editGradeOverlayVisible, setEditGradeOverlayVisible] = useState(false);
  const [editGradeOverlayContent, setEditGradeOverlayContent] =
    useState<Grade>();

  return (
    <div className="grid grid-cols-[auto_min-content_25%_min-content_1fr_auto] items-center gap-6 border-b-2 border-slate-300 px-12 py-2 last:border-b-0">
      <Avatar src={student.avatar} name={student.name} />
      <span className="w-6 text-center">{student.number}</span>
      <span>{student.name}</span>
      <span className="w-12 text-center">{getAverage(student.grades)}</span>
      <div className="flex gap-3">
        {student.grades.map((grade) => (
          <Fragment key={grade.id}>
            <Grade
              data={grade}
              onClick={() => {
                setEditGradeOverlayVisible(true);
                setEditGradeOverlayContent(grade);
              }}
            />
          </Fragment>
        ))}
      </div>
      {editGradeOverlayVisible && editGradeOverlayContent && (
        <EditGradeOverlay
          setIsVisible={setEditGradeOverlayVisible}
          student={student}
          grade={editGradeOverlayContent}
        />
      )}
      {addGradeOverlayVisible && (
        <AddGradeOverlay
          setIsVisible={setAddGradeOverlayVisible}
          student={student}
        />
      )}
      <Button onClick={() => setAddGradeOverlayVisible(true)}>Add Grade</Button>
    </div>
  );
}
