import Image from "next/image";

interface Props {
  data: Review;
}

export default function Review({ data }: Props) {
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-blue-800 p-4">
      <p className="font-normal">{data.content}</p>
      <div className="flex items-center gap-3">
        <Image
          width={48}
          height={48}
          className="h-12 w-12 rounded-lg"
          src={data.authorAvatar}
          alt="Reviewer Avatar"
        />
        <div className="flex flex-col">
          <p>{data.author}</p>
          <p className="text-sm font-normal">{data.authorRole}</p>
        </div>
      </div>
    </div>
  );
}
