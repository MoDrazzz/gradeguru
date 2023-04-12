import Avatar from "./Avatar";

interface Props {
  student: Student;
}

export default function StudentProfile({ student }: Props) {
  return (
    <div className="flex items-center gap-4">
      <Avatar src={student.avatar} name={student.name} isBig />
      <div className="flex flex-col">
        <h4 className="text-xl">{student.name}</h4>
        <p className="text-base font-normal">
          {student.group}, Number {student.number}
        </p>
      </div>
    </div>
  );
}
