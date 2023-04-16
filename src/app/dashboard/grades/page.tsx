"use client";

import Dropdown from "@/components/Dropdown";
import Heading from "@/components/Heading";
import StudentRow from "@/components/StudentRow";
import { students } from "@/data/students";
import { useState } from "react";
import { groups, gradeTypes } from "@/data/students";
import GradeType from "@/components/GradeType";
import EditGradeTypeOverlay from "@/components/EditGradeTypeOverlay";
import Button from "@/components/Button";
import SmallButton from "@/components/SmallButton";
import AddGradeTypeOverlay from "@/components/AddGradeTypeOverlay";

export default function Grades() {
  const [selectedGroup, setSelectedGroup] = useState<DropdownItem>(groups[0]);
  const [editGradeTypeOverlayVisible, setEditGradeTypeOverlayVisible] =
    useState(false);
  const [editGradeTypeOverlayContent, setEditGradeTypeOverlayContent] =
    useState<GradeType>();
  const [addGradeTypeOverlayVisible, setAddGradeTypeOverlayVisible] =
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
            <SmallButton onClick={() => setAddGradeTypeOverlayVisible(true)} />
            {gradeTypes.map((gradeType) => (
              <GradeType
                key={gradeType.id}
                data={gradeType}
                onClick={() => {
                  setEditGradeTypeOverlayContent(gradeType);
                  setEditGradeTypeOverlayVisible(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {editGradeTypeOverlayVisible && editGradeTypeOverlayContent && (
        <EditGradeTypeOverlay
          gradeType={editGradeTypeOverlayContent}
          setIsVisible={setEditGradeTypeOverlayVisible}
        />
      )}
      {addGradeTypeOverlayVisible && (
        <AddGradeTypeOverlay setIsVisible={setAddGradeTypeOverlayVisible} />
      )}
    </>
  );
}
