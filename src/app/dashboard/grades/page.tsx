"use client";

import AddGradeTypeOverlay from "@/components/AddGradeTypeOverlay";
import Dropdown from "@/components/Dropdown";
import GradeType from "@/components/GradeType";
import Heading from "@/components/Heading";
import SmallButton from "@/components/SmallButton";
import StudentRow from "@/components/StudentRow";
import { gradeTypes, groups, students } from "@/data/students";
import { useState } from "react";

export default function Grades() {
  const [selectedGroup, setSelectedGroup] = useState<DropdownItem>(groups[0]);
  const [isAddGradeTypeOverlayVisible, setIsAddGradeTypeOverlayVisible] =
    useState(false);

  return (
    <>
      <Heading>Grades</Heading>
      <div className="wrapper">
        <div className="flex h-full w-full flex-col gap-2">
          <Dropdown
            state={selectedGroup}
            stateSetter={setSelectedGroup}
            items={groups}
          />
          <div className="flex h-full w-full flex-col">
            <div className="grid grid-cols-[auto_min-content_25%_min-content_1fr] gap-6 px-12 py-2 font-semibold">
              <span className="w-10" />
              <span className="w-6 text-center">Nr</span>
              <span>Name</span>
              <span className="w-12 text-center">Avg</span>
              <span>Grades</span>
            </div>
            {students.map((student) => {
              return selectedGroup === student.group ? (
                <StudentRow key={student.id} student={student} />
              ) : null;
            })}
          </div>
          <div className="flex gap-8 p-3">
            <SmallButton
              onClick={() => setIsAddGradeTypeOverlayVisible(true)}
            />
            {gradeTypes.map((gradeType) => (
              <GradeType key={gradeType.id} data={gradeType} />
            ))}
          </div>
        </div>
      </div>
      {isAddGradeTypeOverlayVisible && (
        <AddGradeTypeOverlay setIsVisible={setIsAddGradeTypeOverlayVisible} />
      )}
    </>
  );
}
