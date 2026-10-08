import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

const initialStudents = [
  { id: 1, name: "Nguyễn Văn A", score: 8.5, class: "D21CQCN01" },
  { id: 2, name: "Trần Thị B", score: 4.2, class: "D21CQCN02" },
  { id: 3, name: "Lê Văn C", score: 7.0, class: "D21CQCN01" },
];

const App = () => {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState("all");

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter((student) => {
    if (filter === "gioi") return student.score >= 8;
    if (filter === "truot") return student.score < 5;
    return true;
  });

  const totalStudents = students.length;
  const averageScore =
    totalStudents > 0
      ? (students.reduce((sum, s) => sum + s.score, 0) / totalStudents).toFixed(2)
      : 0;

  return (
    <div style={{ maxWidth: "800px", margin: "30px auto", fontFamily: "sans-serif" }}>
      <h1>Ứng dụng Quản lý Điểm Sinh viên</h1>

      <StudentForm onAddStudent={handleAddStudent} />

      <div style={{ marginBottom: "15px" }}>
        <span>Bộ lọc: </span>
        <button onClick={() => setFilter("all")}>Tất cả</button>
        <button onClick={() => setFilter("gioi")}>Sinh viên Giỏi (&gt;= 8)</button>
        <button onClick={() => setFilter("truot")}>Sinh viên Trượt (&lt; 5)</button>
      </div>

      <div style={{ marginBottom: "15px", background: "#f3f3f3", padding: "10px" }}>
        <p>{`Tổng số lượng: ${totalStudents} sinh viên`}</p>
        <p>{`Điểm trung bình toàn lớp: ${averageScore}`}</p>
      </div>

      <StudentTable students={filteredStudents} onDelete={handleDeleteStudent} />
    </div>
  );
};

export default App;