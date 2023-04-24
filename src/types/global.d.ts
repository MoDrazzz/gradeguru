import { DefaultColors } from "tailwindcss/types/generated/colors";

declare global {
  type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, Keys>
  > &
    {
      [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];

  interface Review {
    id: number;
    content: string;
    author: string;
    authorAvatar: string;
    authorRole: string;
  }

  type Colors =
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink";

  type IconVariants =
    | "grades"
    | "messages"
    | "dashboard"
    | "arrowDown"
    | "arrowUp"
    | "check"
    | "plus";

  interface Group {
    id: number;
    identifier: string;
    students: Student[];
    gradeTypes: GradeType[];
  }

  interface GradeType {
    id: number;
    name: string;
    color: keyof DefaultColors;
    weight: number;
    includeInAverage: boolean;
    groupID: number;
  }

  interface Grade {
    id: number;
    rating: number;
    type: GradeType;
    comments: string;
    dateAdded: number;
  }

  interface Student {
    id: number;
    number: number;
    avatar: string;
    name: string;
    grades: Grade[];
  }

  type DropdownItem = string | null | undefined;

  type OverlayVisibilitySetter = React.Dispatch<React.SetStateAction<boolean>>;
}
