"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import SmallButton from "@/components/SmallButton";
import Warning from "@/components/Warning";
import { useRef, useState } from "react";
import MessagesTableRow from "@/components/MessagesTableRow";
import MessagesTableHeader from "@/components/MessagesTableHeader";
import { receivedMessages } from "@/data/messages";
import Tab from "@/components/Tab";

export default function Messages() {
  const searchInput = useRef(null);
  const tabs = ["received", "sent"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

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
        <div className="flex">
          {tabs.map((tab) => (
            <Tab
              isActive={activeTab === tab}
              name={tab}
              onClick={() => setActiveTab(tab)}
              key={tab}
            />
          ))}
        </div>
        {activeTab === tabs[0] && (
          <>
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
          </>
        )}
        {activeTab === tabs[1] && (
          <>
            <h3 className="text-heading">Sent</h3>
            <div className="flex flex-col gap-2">
              <MessagesTableHeader />
              {receivedMessages
                .filter((message) => message.isRead)
                .map((message) => (
                  <MessagesTableRow key={message.id} message={message} />
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
