import Icon from "./Icon";
import TextNormal from "./TextNormal";

export default function MessagesTableRow() {
  return (
    <div className="grid-cols-messages grid gap-6 px-12">
      <span className="text-center text-yellow-500">
        <Icon name="star" />
      </span>
      <span className="text-center">10.12.2023 at 09:43</span>
      <span>Joanna Adamska</span>
      <TextNormal>Tomorrow’s Test Question</TextNormal>
    </div>
  );
}
