import { useRef } from "react";
import "./pdf.css";
import { useReactToPrint } from "react-to-print";

export default function Pdf() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "user-sys",
    onAfterPrint: () => alert("Print success"),
  });

  return (
    <div className="mainDiv">
      <div ref={componentRef}>
        <h1 className="mainText">User management System</h1>
        <h3 className="mainText">Waleteeee!!</h3>
      </div>
      <button className="printButton" onClick={handlePrint}>Print here</button>
    </div>
  );
}
