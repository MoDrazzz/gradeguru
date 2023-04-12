type IconVariants =
  | "grades"
  | "messages"
  | "dashboard"
  | "arrowDown"
  | "arrowUp"
  | "check";

interface GradeType {
  id: number;
  name: string;
  color: string;
  weight: number;
  includeInAverage: boolean;
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
  group: string;
  number: number;
  avatar: string;
  name: string;
  grades: Grade[];
}

type DropdownItem = string | null | undefined;

type OverlayVisibilitySetter = React.Dispatch<React.SetStateAction<boolean>>;
