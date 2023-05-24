"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import SmallButton from "@/components/SmallButton";
import Warning from "@/components/Warning";
import { useRef } from "react";
import MessagesTableRow from "@/components/MessagesTableRow";
import MessagesTableHeader from "@/components/MessagesTableHeader";
import { receivedMessages } from "@/data/messages";

export default function Messages() {
  const searchInput = useRef(null);

  return (
    <>
      <Heading>Messages</Heading>
      <div className="wrapper flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex w-[512px] gap-4">
            <Input refState={searchInput} placeholder="Search..." />
            <SmallButton isBig icon="search" onClick={() => {}} />
          </div>
          <Button onClick={() => {}}>New Message</Button>
        </div>
        <Warning>
          <p>
            You have <b>2</b> unread messages.
          </p>
        </Warning>
        <h3 className="text-heading">Unread</h3>
        <div className="flex flex-col gap-2">
          <MessagesTableHeader />
          {receivedMessages
            .filter((message) => !message.isRead)
            .map((message) => (
              <MessagesTableRow key={message.id} message={message} />
            ))}
        </div>
        <h3 className="text-heading">Everything Else</h3>
        <div className="flex flex-col gap-2">
          <MessagesTableHeader />
          {receivedMessages
            .filter((message) => message.isRead)
            .map((message) => (
              <MessagesTableRow key={message.id} message={message} />
            ))}
        </div>
      </div>
    </>
  );
}
