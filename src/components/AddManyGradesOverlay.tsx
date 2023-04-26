import { gradeTypes } from "@/data/students";
import { useRef, useState } from "react";
import Dropdown from "./Dropdown";
import ListItem from "./ListItem";
import Overlay from "./Overlay";
import StudentProfile from "./StudentProfile";
import Textarea from "./Textarea";
import { ratings as ratingsList } from "@/data/core";
import { useSelectedGroupContext } from "@/contexts/SelectedGroupContext";
import Error from "./Error";

interface Props {
  setIsVisible: OverlayVisibilitySetter;
}

interface Ratings {
  [key: number]: string | null | undefined;
}

const ratingValues = [null, ...ratingsList];

export default function AddManyGradesOverlay({ setIsVisible }: Props) {
  const [gradeType, setGradeType] = useState<DropdownItem>(gradeTypes[0].name);
  const commentsRef = useRef<HTMLTextAreaElement>(null);
  const { selectedGroup } = useSelectedGroupContext();
  const [ratings, setRatings] = useState<Ratings>(
    selectedGroup.students.reduce(
      (prev, curr) => ({ ...prev, [curr.id]: null }),
      {}
    )
  );
  const [error, setError] = useState("");

  const handleAddManyGrades = () => {
    if (!commentsRef.current) return;

    let isAnyGradeAdded = false;

    for (const key in ratings) {
      if (ratings[key]) {
        isAnyGradeAdded = true;
      }
    }

    if (!isAnyGradeAdded) {
      setError("You have to add at least one grade.");
      return;
    } else {
      setError("");
    }

    setIsVisible(false);

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
      error={error}
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
        {selectedGroup.students.map((student) => (
          <li
            key={student.id}
            className="flex w-full items-center justify-between"
          >
            <StudentProfile student={student} />
            <Dropdown
              onSelectedItemChange={({ selectedItem }) => {
                setRatings({ ...ratings, [student.id]: selectedItem });
              }}
              items={ratingValues}
              state={ratings[student.id]}
            />
          </li>
        ))}
      </ul>
    </Overlay>
  );
}
