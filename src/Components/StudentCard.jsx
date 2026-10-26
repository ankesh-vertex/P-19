export default function StudentCard({ student, onDelete }) {
  return (
    <div className="group rounded-2xl border border-violet-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-xl font-bold text-violet-700">
            {student.name.charAt(0)}
          </div>

          <div>
            <h3 className="font-bold text-gray-800">
              {student.name}
            </h3>
            <p className="text-sm text-gray-500">
              Student ID: {student.id}
            </p>
          </div>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          Active
        </span>
      </div>

      <div className="my-5 space-y-3 border-t border-gray-100 pt-4 text-sm">
        <p>
          <span className="font-semibold text-gray-500">Course:</span>{" "}
          <span className="text-gray-800">{student.course}</span>
        </p>
        <p>
          <span className="font-semibold text-gray-500">Email:</span>{" "}
          <span className="break-all text-gray-800">{student.email}</span>
        </p>
        <p>
          <span className="font-semibold text-gray-500">Semester:</span>{" "}
          <span className="text-gray-800">{student.semester}</span>
        </p>
      </div>

      <button
        onClick={() => onDelete(student.id)}
        className="w-full rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
      >
        Delete Student
      </button>
    </div>
  );
}