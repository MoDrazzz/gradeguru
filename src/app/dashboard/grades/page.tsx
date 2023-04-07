"use client";

import Dropdown from "@/components/Dropdown";
import Heading from "@/components/Heading";
import { useState } from "react";

const groups = ["Group A", "Groupdfs gaer gserh strh B", "Group C"];

export default function Grades() {
  const [selectedGroup, setSelectedGroup] = useState<null | undefined | string>(
    null
  );

  return (
    <>
      <Heading>Grades</Heading>
      <div className="wrapper">
        <Dropdown stateSetter={setSelectedGroup} items={groups} />
      </div>
    </>
  );
}
