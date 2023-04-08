const Test: GradeType = {
  id: 100,
  name: "Test",
  color: "#F87171",
  weight: 3,
  includeInAverage: true,
};
const ShortTest: GradeType = {
  id: 101,
  name: "Short Test",
  color: "#FACC15",
  weight: 2,
  includeInAverage: true,
};
const Activity: GradeType = {
  id: 102,
  name: "Activity",
  color: "#FB923C",
  weight: 1,
  includeInAverage: true,
};
const Homework: GradeType = {
  id: 103,
  name: "Homework",
  color: "#4ADE80",
  weight: 1,
  includeInAverage: true,
};

export const gradeTypes: GradeType[] = [Test, ShortTest, Activity, Homework];

export const groups = ["Group A", "Very long name group B", "Group C"];

export const students: Student[] = [
  {
    id: 1,
    group: "Group A",
    number: 1,
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "Joanna Adamska",
    grades: [
      {
        id: 10,
        rating: 4,
        type: Test,
        comments: "Comment.",
        dateAdded: 1680896700156,
      },
      {
        id: 11,
        rating: 5,
        type: Test,
        comments: "",
        dateAdded: 1680897152227,
      },
      {
        id: 12,
        rating: 3,
        type: ShortTest,
        comments: "",
        dateAdded: 1680897152227,
      },
      {
        id: 13,
        rating: 1,
        type: Activity,
        comments: "",
        dateAdded: 1680897152227,
      },
      {
        id: 14,
        rating: 3,
        type: Homework,
        comments: "",
        dateAdded: 1680897152227,
      },
    ],
  },
  {
    id: 2,
    group: "Group A",
    number: 2,
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Jan Kowalski",
    grades: [
      {
        id: 15,
        rating: 5,
        type: Homework,
        comments: "",
        dateAdded: 1680897152227,
      },
      {
        id: 16,
        rating: 5,
        type: Test,
        comments: "",
        dateAdded: 1680897152227,
      },
      {
        id: 17,
        rating: 4,
        type: Activity,
        comments: "",
        dateAdded: 1680897152227,
      },
      {
        id: 18,
        rating: 5,
        type: Test,
        comments: "",
        dateAdded: 1680897152227,
      },
    ],
  },
];
