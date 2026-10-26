import { useState } from "react";
import StudentList from "./Components/StudentList";

const initialStudents = [
  {
    id: 101,
    name: "Aarav Patel",
    course: "BCA",
    email: "aarav@example.com",
    semester: "Semester 5",
  },
  {
    id: 102,
    name: "Diya Shah",
    course: "BCA",
    email: "diya@example.com",
    semester: "Semester 3",
  },
  {
    id: 103,
    name: "Krish Mehta",
    course: "BBA",
    email: "krish@example.com",
    semester: "Semester 2",
  },
  {
    id: 104,
    name: "Ananya Desai",
    course: "BCA",
    email: "ananya@example.com",
    semester: "Semester 5",
  },
  {
    id: 105,
    name: "Rohan Joshi",
    course: "B.Com",
    email: "rohan@example.com",
    semester: "Semester 4",
  },
  {
    id: 106,
    name: "Mira Trivedi",
    course: "BCA",
    email: "mira@example.com",
    semester: "Semester 1",
  },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");

  function handleDelete(id) {
    const student = students.find((item) => item.id === id);

    if (!student) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );

    if (confirmed) {
      setStudents((previousStudents) =>
        previousStudents.filter((item) => item.id !== id)
      );
    }
  }

  const filteredStudents = students.filter((student) => {
    const query = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(query) ||
      student.course.toLowerCase().includes(query) ||
      String(student.id).includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      <header className="border-b border-violet-100 bg-white/90">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-5 sm:px-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-2xl text-white shadow-lg shadow-violet-200">
            🎓
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
              StudentHub
            </h1>
            <p className="text-sm text-gray-500">
              Student Management System
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <section className="mb-8 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-7 text-white shadow-xl shadow-violet-200 sm:p-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-200">
            Dashboard
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Manage Your Students
          </h2>

          <p className="mt-3 max-w-xl text-violet-100">
            View student information and easily remove students from
            your list whenever needed.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Total Students
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-4xl font-extrabold text-violet-700">
                {students.length}
              </span>
              <span className="rounded-xl bg-violet-100 p-3 text-2xl">
                👨‍🎓
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Students currently in the list
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Search Results
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-4xl font-extrabold text-indigo-700">
                {filteredStudents.length}
              </span>
              <span className="rounded-xl bg-indigo-100 p-3 text-2xl">
                🔎
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Students matching your search
            </p>
          </div>
        </section>

        <section>
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Student List
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Select a student to remove them from the displayed list.
              </p>
            </div>

            <div className="relative w-full sm:max-w-sm">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, course or ID..."
                className="w-full rounded-xl border border-violet-200 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </div>

          <StudentList
            students={filteredStudents}
            onDelete={handleDelete}
          />
        </section>

        <footer className="mt-10 border-t border-violet-100 py-5 text-center text-sm text-gray-500">
          StudentHub · Built with React and Tailwind CSS
        </footer>
      </main>
    </div>
  );
}