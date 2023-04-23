import { useRef, useState } from "react";
import Checkbox from "./Checkbox";
import ColorInput from "./ColorInput";
import Dropdown from "./Dropdown";
import Input from "./Input";
import ListItem from "./ListItem";
import Overlay from "./Overlay";
import { colors, weights } from "@/data/core";

interface Props {
  setIsVisible: OverlayVisibilitySetter;
  gradeType: GradeType;
}

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
  const [selectedColor, setSelectedColor] = useState<string>(gradeType.color);

  const handleSelectColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };

  const handleEditGradeType = () => {
    setIsVisible(false);

    if (!nameInput.current) return;

    console.log({
      name: nameInput.current.value,
      weight,
      includeInAverage,
      color: selectedColor,
    });
  };

  const handleDeleteGradeType = () => {
    console.log(`Delete grade type.`);
  };

  return (
    <Overlay
      title="Edit grade type"
      setIsVisible={setIsVisible}
      confirmAction={handleEditGradeType}
      deleteAction={handleDeleteGradeType}
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
        <ListItem>
          <label>Color:</label>
          <div className="flex w-full flex-wrap gap-2">
            {colors.map((color) => (
              <ColorInput
                key={color}
                onChange={handleSelectColor}
                checked={selectedColor === color}
                color={color}
              />
            ))}
          </div>
        </ListItem>
      </ul>
    </Overlay>
  );
}
