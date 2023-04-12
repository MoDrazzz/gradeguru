import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import ListItem from "./ListItem";
import { gradeTypes } from "@/data/students";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import Overlay from "./Overlay";
import StudentProfile from "./StudentProfile";
import Normal from "./Normal";

interface Props {
  setIsVisible: OverlayVisibilitySetter;
  student: Student;
  grade: Grade;
}

const ratings = ["1", "2", "3", "4", "5", "6"];
const weights = ["1", "2", "3"];

export default function EditGradeOverlay({
  setIsVisible,
  student,
  grade,
}: Props) {
  const [rating, setRating] = useState<DropdownItem>(grade.rating.toString());
  const [gradeType, setGradeType] = useState<DropdownItem>(grade.type.name);
  const commentsRef = useRef<HTMLTextAreaElement>(null);
  const dateAdded = new Date(grade.dateAdded).toLocaleString("en-gb");

  const handleEditUser = () => {
    setIsVisible(false);

    if (!commentsRef.current) return;

    console.log({
      rating,
      gradeType,
      comments: commentsRef.current.value,
    });
  };

  return (
    <Overlay
      title="Edit grade"
      setIsVisible={setIsVisible}
      confirmAction={handleEditUser}
    >
      <StudentProfile student={student} />
      <div className="flex flex-col gap-2 text-xl">
        <ul className="flex flex-col gap-2">
          <ListItem>
            <label>Date added:</label>
            <Normal>{dateAdded}</Normal>
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
