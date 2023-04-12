import { useEffect, useRef, useState } from "react";
import ListItem from "./ListItem";
import Checkbox from "./Checkbox";
import Overlay from "./Overlay";
import Input from "./Input";
import Dropdown from "./Dropdown";

interface Props {
  setIsVisible: OverlayVisibilitySetter;
  gradeType: GradeType;
}
const weights = ["1", "2", "3"];

export default function EditGradeTypeOverlay({
  setIsVisible,
  gradeType,
}: Props) {
  const nameInput = useRef<HTMLInputElement>(null);
  const [weight, setWeight] = useState<DropdownItem>(
    gradeType.weight.toString()
  );
  const [includeInAverage, setIncludeInAverage] = useState(
    gradeType.includeInAverage
  );

  const handleEditGradeType = () => {
    setIsVisible(false);

    if (!nameInput.current) return;

    console.log({
      name: nameInput.current.value,
      weight,
      includeInAverage,
    });
  };

  return (
    <Overlay
      title="Edit grade"
      setIsVisible={setIsVisible}
      confirmAction={handleEditGradeType}
    >
      <ul className="flex flex-col gap-2 text-xl">
        <ListItem>
          <label>Name:</label>
          <Input
            defaultValue={gradeType.name}
            refState={nameInput}
            placeholder="Enter grade type name..."
          />
        </ListItem>
        <ListItem>
          <label>Weight:</label>
          <Dropdown state={weight} stateSetter={setWeight} items={weights} />
        </ListItem>
        <ListItem>
          <label>Include in average:</label>
          <Checkbox
            state={includeInAverage}
            stateSetter={setIncludeInAverage}
          />
        </ListItem>
      </ul>
    </Overlay>
  );
}
