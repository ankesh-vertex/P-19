import StudentCard from "./StudentCard";

export default function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-violet-200 bg-white p-12 text-center">
        <div className="mb-3 text-5xl">🎓</div>
        <h3 className="text-xl font-bold text-gray-800">
          No Students Found
        </h3>
        <p className="mt-2 text-gray-500">
          All students have been deleted or no student matches your search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}