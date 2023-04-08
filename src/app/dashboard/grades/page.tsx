"use client";

import Dropdown from "@/components/Dropdown";
import Heading from "@/components/Heading";
import StudentRow from "@/components/StudentRow";
import { students } from "@/data/students";
import { useState } from "react";
import { groups } from "@/data/students";

export default function Grades() {
  const [selectedGroup, setSelectedGroup] = useState<null | undefined | string>(
    groups[0]
  );

  return (
    <>
      <Heading>Grades</Heading>
      <div className="wrapper">
        <div className="flex w-full flex-col gap-2">
          <Dropdown
            state={selectedGroup}
            stateSetter={setSelectedGroup}
            items={groups}
          />
          <div className="flex w-full flex-col">
            <div className="grid grid-cols-[auto_min-content_25%_min-content_1fr] gap-6 px-12 py-2 font-semibold">
              <span className="w-10" />
              <span className="w-6 text-center">Nr</span>
              <span>Name</span>
              <span className="w-12 text-center">Avg</span>
              <span className="">Grades</span>
            </div>
            {students.map((student) => {
              return selectedGroup === student.group ? (
                <StudentRow key={student.id} student={student} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
