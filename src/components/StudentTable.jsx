import StudentItem from "./StudentItem";

const StudentTable = ({ students, onDelete }) => {
  return (
    <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Mã SV</th>
          <th>Họ tên</th>
          <th>Điểm</th>
          <th>Lớp</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          students.map((student) => (
            <StudentItem key={student.id} student={student} onDelete={onDelete} />
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              Không có sinh viên nào
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default StudentTable;