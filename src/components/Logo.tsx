import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      <Image width={40} height={40} alt="Logo" src="/Logo.svg" />
      <p className="text-2xl font-semibold">GradeGuru</p>
    </div>
  );
}
