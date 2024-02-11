const photoUpload = document.getElementById("photoUpload");
const uploadButton = document.getElementById("uploadButton");
const preview = document.getElementById("preview");

preview.style.display ="none";
function handleFileUpload() {
  const file = photoUpload.files[0];
  if (file) {
    previewImage(file);
  }
}

function previewImage(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    preview.style.display = "block";
    preview.innerHTML = `<img id="previewImage" src="${e.target.result}" alt="ID Photo">`;
    const img = document.getElementById("previewImage");
    img.style.width = "100px";
    img.style.height = "100px";
  };
  reader.readAsDataURL(file);
}

uploadButton.addEventListener("click", handleFileUpload);

function generateIDCard() {
  var imageSrc = document.getElementById("previewImage").src;
  var studentName = document.getElementById("studentName").value;
  var rollNum = document.getElementById("rollNum").value;
  var branch = document.getElementById("branch").value;
  var year = document.getElementById("year").value;
  var CollegeName = document.getElementById("CollegeName").value;
  var email = document.getElementById("email").value;
  var phno = document.getElementById("phno").value;
  var activity = document.getElementById("activity").value;
  var participants = document.getElementById("participants").value;
  var idCardContainer = document.getElementById("idCard");

  idCardContainer.innerHTML = `
    <div class="card" >
    <img src="images/vemu-logo.jpg" style="height: 50px; width: 100%;" />
      <img src = "${imageSrc}" width="100px" height="100px">
      <h2>Student Pass</h2>
      <p><strong>Name:</strong> ${studentName}</p>
      <p><strong>Roll No: </strong> ${rollNum}</p>
      <p><strong>Branch: </strong> ${branch}</p>
      <p><strong>Year of study </strong> ${year}</p>
      <p><strong>College name: </strong> ${CollegeName}</p>
      <p><strong>Registered email: </strong> ${email}</p>
      <p><strong>Phone number: </strong> ${phno}</p>
      <p><strong>Event Name: </strong> ${activity}</p>
      <p><strong>Number of participants: </strong> ${participants}</p>
      <button onclick="printIDCard()">Print pass</button>
    </div>
  `;
}
// Trigger the print functionality
function printIDCard() {
  window.print();
}
