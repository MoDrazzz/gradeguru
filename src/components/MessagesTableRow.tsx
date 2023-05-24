import Icon from "./Icon";
import TextNormal from "./TextNormal";
import { students } from "@/data/students";

interface Props {
  message: Message;
}

export default function MessagesTableRow({ message }: Props) {
  const dateSent = new Date(message.dateSent).toLocaleString("en-GB");

  const sender = students.find((student) => student.id === message.senderId);

  return (
    <div className="grid-cols-messages grid gap-6 px-12">
      <span className="text-center text-yellow-500">
        <Icon name={message.isFavourite ? "star" : "starFilled"} />
      </span>
      <span className="text-center">{dateSent}</span>
      <span>{sender?.name}</span>
      <TextNormal>{message.title}</TextNormal>
    </div>
  );
}