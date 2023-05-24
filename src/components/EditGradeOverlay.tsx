import { gradeTypes } from "@/data/students";
import { useRef, useState } from "react";
import Dropdown from "./Dropdown";
import ListItem from "./ListItem";
import TextNormal from "./TextNormal";
import Overlay from "./Overlay";
import StudentProfile from "./StudentProfile";
import Textarea from "./Textarea";
import { ratings } from "@/data/core";

interface Props {
  setIsVisible: OverlayVisibilitySetter;
  student: Student;
  grade: Grade;
}

export default function EditGradeOverlay({
  setIsVisible,
  student,
  grade,
}: Props) {
  const [rating, setRating] = useState<DropdownItem>(grade.rating.toString());
  const [gradeType, setGradeType] = useState<DropdownItem>(grade.type.name);
  const commentsRef = useRef<HTMLTextAreaElement>(null);
  const dateAdded = new Date(grade.dateAdded).toLocaleString("en-gb");

  const handleEditGrade = () => {
    setIsVisible(false);

    if (!commentsRef.current) return;

    console.log({
      rating,
      gradeType,
      comments: commentsRef.current.value,
    });
  };

  const handleDeleteGrade = () => {
    console.log(`Delete grade.`);
  };

  return (
    <Overlay
      title="Edit grade"
      setIsVisible={setIsVisible}
      confirmAction={handleEditGrade}
      deleteAction={handleDeleteGrade}
    >
      <StudentProfile student={student} />
      <div className="flex flex-col gap-2 text-xl">
        <ul className="flex flex-col gap-2">
          <ListItem>
            <label>Date added:</label>
            <TextNormal>{dateAdded}</TextNormal>
          </ListItem>
          <ListItem>
            <label>Rating:</label>
            <Dropdown state={rating} stateSetter={setRating} items={ratings} />
          </ListItem>
          <ListItem>
            <label>Type:</label>
            <Dropdown
              state={gradeType}
              stateSetter={setGradeType}
              items={gradeTypes.map((el) => el.name)}
            />
          </ListItem>
        </ul>
      </div>
      <Textarea
        defaultValue={grade.comments}
        refState={commentsRef}
        placeholder="Feel free to add some comments..."
      />
    </Overlay>
  );
}
