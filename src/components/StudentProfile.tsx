import { useSelectedGroupContext } from "@/contexts/SelectedGroupContext";
import Avatar from "./Avatar";

interface Props {
  student: Student;
}

export default function StudentProfile({ student }: Props) {
  const { selectedGroup } = useSelectedGroupContext();

  return (
    <div className="flex items-center gap-4">
      <Avatar src={student.avatar} name={student.name} isBig />
      <div className="flex flex-col">
        <h4 className="text-xl">{student.name}</h4>
        <p className="text-base font-normal">
          Group {selectedGroup.identifier}, Number {student.number}
        </p>
      </div>
    </div>
  );
}
