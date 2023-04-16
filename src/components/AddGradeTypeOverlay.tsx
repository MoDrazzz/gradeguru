import { useRef, useState } from "react";
import ListItem from "./ListItem";
import Checkbox from "./Checkbox";
import Overlay from "./Overlay";
import Input from "./Input";
import Dropdown from "./Dropdown";
import ColorInput from "./ColorInput";
import colors from "tailwindcss/colors";

interface Props {
  setIsVisible: OverlayVisibilitySetter;
}
const weights = ["1", "2", "3"];

export default function AddGradeTypeOverlay({ setIsVisible }: Props) {
  const nameInput = useRef<HTMLInputElement>(null);
  const [weight, setWeight] = useState<DropdownItem>(weights[0]);
  const [includeInAverage, setIncludeInAverage] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string>(colors.red[400]);

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
      selectedColor,
    });
  };

  return (
    <Overlay
      title="Add grade type"
      setIsVisible={setIsVisible}
      confirmAction={handleEditGradeType}
    >
      <ul className="flex flex-col gap-2 text-xl">
        <ListItem>
          <label>Name:</label>
          <Input refState={nameInput} placeholder="Enter grade type name..." />
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
            <ColorInput
              onChange={handleSelectColor}
              checked={selectedColor === colors.red[400]}
              color="red"
            />
            <ColorInput
              onChange={handleSelectColor}
              checked={selectedColor === colors.orange[400]}
              color="orange"
            />
            <ColorInput
              onChange={handleSelectColor}
              checked={selectedColor === colors.yellow[400]}
              color="yellow"
            />
            <ColorInput
              onChange={handleSelectColor}
              checked={selectedColor === colors.green[400]}
              color="green"
            />
            <ColorInput
              onChange={handleSelectColor}
              checked={selectedColor === colors.blue[400]}
              color="blue"
            />
            <ColorInput
              onChange={handleSelectColor}
              checked={selectedColor === colors.purple[400]}
              color="purple"
            />
            <ColorInput
              onChange={handleSelectColor}
              checked={selectedColor === colors.pink[400]}
              color="pink"
            />
            <ColorInput
              onChange={handleSelectColor}
              checked={selectedColor === colors.gray[400]}
              color="gray"
            />
          </div>
        </ListItem>
      </ul>
    </Overlay>
  );
}
