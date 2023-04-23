import { gradeTypes, students } from "@/data/students";
import { useRef, useState } from "react";
import Dropdown from "./Dropdown";
import ListItem from "./ListItem";
import Overlay from "./Overlay";
import StudentProfile from "./StudentProfile";
import Textarea from "./Textarea";

interface Props {
  setIsVisible: OverlayVisibilitySetter;
}

interface Ratings {
  [key: number]: string | null | undefined;
}

const ratingsList = [null, "1", "2", "3", "4", "5", "6"];

const initialRatingsStateValue = students.reduce(
  (prev, curr) => ({ ...prev, [curr.id]: null }),
  {}
);

export default function AddManyGradesOverlay({ setIsVisible }: Props) {
  const [gradeType, setGradeType] = useState<DropdownItem>(gradeTypes[0].name);
  const [ratings, setRatings] = useState<Ratings>(initialRatingsStateValue);
  const commentsRef = useRef<HTMLTextAreaElement>(null);

  const handleAddManyGrades = () => {
    setIsVisible(false);

    if (!commentsRef.current) return;

    console.log({
      gradeType,
      comments: commentsRef.current.value,
      ratings,
    });
  };

  return (
    <Overlay
      title="Add many grades"
      setIsVisible={setIsVisible}
      confirmAction={handleAddManyGrades}
    >
      <ul className="flex flex-col gap-2">
        <ListItem>
          <label>Type:</label>
          <Dropdown
            state={gradeType}
            stateSetter={setGradeType}
            items={gradeTypes.map((el) => el.name)}
          />
        </ListItem>
      </ul>
      <Textarea
        refState={commentsRef}
        placeholder="Feel free to add some comments..."
      />
      <ul className="flex flex-col gap-6">
        {students.map((student) => (
          <li
            key={student.id}
            className="flex w-full items-center justify-between"
          >
            <StudentProfile student={student} />
            <Dropdown
              onSelectedItemChange={({ selectedItem }) => {
                setRatings({ ...ratings, [student.id]: selectedItem });
              }}
              items={ratingsList}
              state={ratings[student.id]}
            />
          </li>
        ))}
      </ul>
    </Overlay>
  );
}
