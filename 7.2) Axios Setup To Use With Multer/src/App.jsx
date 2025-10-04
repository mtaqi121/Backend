import { useState } from "react";
import { apiRequest } from "./Service/app";

const App = () => {
  const [image, setImage] = useState([]);

  const upload = async () => {
    try {
      if (!image) {
        alert("Please select an image first!");
        return;
      }

      const formData = new FormData();
      formData.append("userPhoto", image);

      const response = await apiRequest("POST", "/uploads", formData);
      console.log("response", response.data);
         

    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed, check console for details");
    }
  };

  return (
    <div>
      <input
        type="file"
        name="newPhoto"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setImage(file);
          }
        }}
      />
      <button onClick={upload}>Submit</button>

    </div>
  );
};

export default App;
