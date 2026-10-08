import { useState } from "react";

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [className, setClassName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numScore = parseFloat(score);

    if (!name.trim() || !className.trim() || score === "") {
      setError("Vui lòng điền đầy đủ tất cả các trường!");
      return;
    }
    if (isNaN(numScore) || numScore < 0 || numScore > 10) {
      setError("Điểm số phải là số từ 0 đến 10!");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      score: numScore,
      class: className.trim(),
    };

    onAddStudent(newStudent);

    // Reset form
    setName("");
    setScore("");
    setClassName("");
    setError("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Họ tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          step="0.1"
          placeholder="Điểm số"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lớp"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <button type="submit">Thêm sinh viên</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default StudentForm;