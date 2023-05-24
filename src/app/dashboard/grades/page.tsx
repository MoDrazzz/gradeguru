"use client";

import AddGradeTypeOverlay from "@/components/AddGradeTypeOverlay";
import AddManyGradesOverlay from "@/components/AddManyGradesOverlay";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import GradeType from "@/components/GradeType";
import Heading from "@/components/Heading";
import SmallButton from "@/components/SmallButton";
import GradesTableRow from "@/components/GradesTableRow";
import { useSelectedGroupContext } from "@/contexts/SelectedGroupContext";
import { groups } from "@/data/students";
import { useEffect, useState } from "react";
import GradesTableHeader from "@/components/GradesTableHeader";

export default function Grades() {
  const [selectedGroupDropdown, setSelectedGroupDropdown] =
    useState<DropdownItem>(`Group ${groups[0].identifier}`);
  const { selectedGroup, setSelectedGroup } = useSelectedGroupContext();
  const [isAddGradeTypeOverlayVisible, setIsAddGradeTypeOverlayVisible] =
    useState(false);
  const [isAddManyGradesOverlayVisible, setIsAddManyGradesOverlayVisible] =
    useState(false);

  useEffect(() => {
    const currentGroup = groups.find(
      (group) =>
        group.identifier === selectedGroupDropdown?.replace("Group ", "")
    );

    if (!currentGroup) return;

    console.log("Setting selected group");

    setSelectedGroup(currentGroup);
  }, [selectedGroupDropdown, setSelectedGroup]);

  return (
    <>
      <Heading>Grades</Heading>
      <div className="wrapper">
        <div className="flex h-full w-full flex-col gap-3">
          <div className="grid grid-cols-[1fr_max-content]">
            <Dropdown
              state={selectedGroupDropdown}
              stateSetter={setSelectedGroupDropdown}
              items={groups.map((group) => `Group ${group.identifier}`)}
            />
            <Button onClick={() => setIsAddManyGradesOverlayVisible(true)}>
              Add many grades
            </Button>
          </div>
          <div className="flex h-full w-full flex-col">
            <GradesTableHeader />
            {selectedGroup.students.map((student) => (
              <GradesTableRow key={student.id} student={student} />
            ))}
          </div>
          <div className="flex gap-8 p-3">
            <SmallButton
              isRounded
              icon="plus"
              title="Add grade type"
              onClick={() => setIsAddGradeTypeOverlayVisible(true)}
            />
            {selectedGroup.gradeTypes.map((gradeType) => (
              <GradeType key={gradeType.id} data={gradeType} />
            ))}
          </div>
        </div>
      </div>
      {isAddGradeTypeOverlayVisible && (
        <AddGradeTypeOverlay setIsVisible={setIsAddGradeTypeOverlayVisible} />
      )}
      {isAddManyGradesOverlayVisible && (
        <AddManyGradesOverlay setIsVisible={setIsAddManyGradesOverlayVisible} />
      )}
    </>
  );
}
