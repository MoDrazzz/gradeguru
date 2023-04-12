import { useRef, useState } from "react";
import Dropdown from "./Dropdown";
import ListItem from "./ListItem";
import { gradeTypes } from "@/data/students";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import Overlay from "./Overlay";
import StudentProfile from "./StudentProfile";

interface Props {
  setIsVisible: OverlayVisibilitySetter;
  student: Student;
}

const ratings = ["1", "2", "3", "4", "5", "6"];

export default function AddGradeOverlay({ setIsVisible, student }: Props) {
  const [rating, setRating] = useState<DropdownItem>(ratings[0]);
  const [gradeType, setGradeType] = useState<DropdownItem>(gradeTypes[0].name);
  const commentsRef = useRef<HTMLTextAreaElement>(null);

  const handleAddUser = () => {
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
      title="Add grade"
      setIsVisible={setIsVisible}
      confirmAction={handleAddUser}
    >
      <StudentProfile student={student} />
      <div className="flex flex-col gap-2 text-xl">
        <ul className="flex flex-col gap-2">
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
        refState={commentsRef}
        placeholder="Feel free to add some comments..."
      />
    </Overlay>
  );
}
