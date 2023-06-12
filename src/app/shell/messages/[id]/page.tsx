"use client";

import Heading from "@/components/Heading";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return (
    <>
      <Heading>Messages {id}</Heading>
    </>
  );
}
