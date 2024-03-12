import { useState } from "react";
import "./App.css";

function App() {
  const [consentInfo, setconsentInfo] = useState(
    "./consent&info/consentInfo.docx"
  );

  return (
    <div>
      <h1>Welcome Page</h1>

      <div className="downloadInfo">
        <p>Please click on the link below to download the information.</p>
        <a href="#" download={`${consentInfo}`}>
          Consent and Information
        </a>
      </div>
    </div>
  );
}

export default App;
