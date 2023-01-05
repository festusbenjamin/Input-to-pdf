import { useRef } from "react";
import "./pdf.css";
import { useReactToPrint } from "react-to-print";
import { useLocation } from "react-router-dom";

export default function Pdf() {
  const componentRef = useRef();
  const location = useLocation();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "user-sys",
    onAfterPrint: () => alert("Print success"),
  });

  return (
    <div className='mainDiv'>
      <div ref={componentRef}>
        <h1 className='mainText'>{location.state.data.firstName}</h1>
        <h3 className='mainText'>{location.state.data.secondName}</h3>
      </div>
      <button className='printButton' onClick={handlePrint}>
        Print here
      </button>
    </div>
  );
}
