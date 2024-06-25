import React, { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [savedContent, setSavedContent] = useState("");

  useEffect(() => {
    // โหลดข้อมูลจาก Local Storage เมื่อคอมโพเนนต์ถูก mount
    const storedContent = localStorage.getItem("fileContent");
    if (storedContent) {
      setSavedContent(storedContent);
    }
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const saveContent = () => {
    const content = inputValue;
    setSavedContent(content);
    localStorage.setItem("fileContent", content);
  };

  return (
    <div>
      <h1>Save Text</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter some text"
      />
      <button onClick={saveContent}>Save text</button>
      <p>Saved text: {savedContent}</p>
    </div>
  );
}

export default App;
