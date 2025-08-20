
let attendanceData = [];

const bookBtn = document.getElementById("book-now-btn");
const formContainer = document.getElementById("user-form-container");


formContainer.style.display = "none";

bookBtn.style.position = "absolute";
bookBtn.style.top = "20px";
bookBtn.style.left = "50%";
bookBtn.style.transform = "translate(-50%)";
bookBtn.style.zIndex = "10";
bookBtn.style.padding = "15px 30px";
bookBtn.style.fontSize = "1.2rem";
bookBtn.style.backgroundColor = "#73ff00ff";
bookBtn.style.color = "#fff";
bookBtn.style.border = "none";
bookBtn.style.borderRadius = "8px";
bookBtn.style.cursor = "pointer";
bookBtn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";


bookBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
  bookBtn.style.display = "none";
  formContainer.scrollIntoView({ behavior: 'smooth' });
});


const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => {
  const attendanceDate = document.getElementById("attendance-date").value;
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;


  if (!attendanceDate) {
    alert("Please select a date of attendance.");
    return;
  }

 
  attendanceData.push({ attendanceDate, adults, children });
  console.log("Step 1 data saved:", attendanceData);

  
  alert("Step 1 completed! Next step will be implemented here.");
});