import Icon from "./Icon";
import TextNormal from "./TextNormal";

export default function MessagesTableHeader() {
  return (
    <div className="text-heading grid-cols-messages grid gap-6 px-12">
      <span />
      <span className="text-center">Sent</span>
      <span>Name</span>
      <span>Topic</span>
    </div>
  );
}
