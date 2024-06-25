import React from "react";

function App() {
  const createAndDownloadFile = () => {
    // ข้อความที่ต้องการเขียนลงในไฟล์
    const content = "hello world!";

    // สร้าง Blob ด้วยข้อความ
    const blob = new Blob([content], { type: "text/plain" });

    // สร้าง URL สำหรับ Blob
    const url = URL.createObjectURL(blob);

    // สร้างลิงก์ชั่วคราวสำหรับดาวน์โหลดไฟล์
    const link = document.createElement("a");
    link.href = url;
    link.download = "db.txt";

    // เพิ่มลิงก์ในเอกสารและคลิกลิงก์
    document.body.appendChild(link);
    link.click();

    // ลบลิงก์ออกจากเอกสารและยกเลิก URL
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Download File</h1>
      <button onClick={createAndDownloadFile}>Download db.txt</button>
    </div>
  );
}

export default App;
