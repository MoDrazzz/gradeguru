import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import TextNormal from "./TextNormal";
import { students } from "@/data/students";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  message: Message;
}

export default function MessagesTableRow({ message }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const dateSent = new Date(message.dateSent).toLocaleString("en-GB");

  const sender = students.find((student) => student.id === message.senderId);

  return (
    <div
      className="grid-cols-messages grid cursor-pointer gap-6 px-12"
      onClick={() => router.push(`${pathname}/${message.id}`)}
    >
      <span className="text-center text-yellow-500">
        <Icon icon={message.isFavourite ? faStarFilled : faStar} />
      </span>
      <span className="text-center">{dateSent}</span>
      <span>{sender?.name}</span>
      <TextNormal>{message.title}</TextNormal>
    </div>
  );
}
