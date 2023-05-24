export default function GradesTableHeader() {
  return (
    <div className="text-heading grid-cols-grades grid gap-6 px-12 py-2">
      <span />
      <span className="text-center">Nr</span>
      <span>Name</span>
      <span className="text-center">Avg</span>
      <span>Grades</span>
    </div>
  );
}
