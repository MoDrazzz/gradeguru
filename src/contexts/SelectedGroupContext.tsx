"use client";

import { groups } from "@/data/students";
import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextValues {
  selectedGroup: Group;
  setSelectedGroup: React.Dispatch<React.SetStateAction<Group>>;
}

const Context = createContext<ContextValues>({
  selectedGroup: groups[0],
  setSelectedGroup: () => {},
});

export default function SelectedGroupContextProvider({ children }: Props) {
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);

  return (
    <Context.Provider
      value={{
        selectedGroup,
        setSelectedGroup,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useSelectedGroupContext = () => {
  const value = useContext(Context);

  return value;
};
