function calculatePriority() {

  let subject = document.getElementById("subject").value;

  let difficulty = Number(document.getElementById("difficulty").value);
  let days = Number(document.getElementById("days").value);
  let time = Number(document.getElementById("time").value);

  if (!subject || !difficulty || !days || !time) {
    alert("Fill all fields please!");
    return;
  }

  let urgency = 10 - days;

  let priority = (difficulty * 2) + urgency + time;

  let status = "";

  if (priority <= 15) {
    status = "Chill you’re on track";
  }
  else if (priority <= 25) {
    status = "!!Start soon!!";
  }
  else {
    status = "🚨 DO THIS NOW";
  }

  let resultBox = document.getElementById("result");

  resultBox.style.display = "block";

  resultBox.innerHTML =
    `<strong>${subject}</strong><br>
     Priority Score: ${priority}<br>
     ${status}`;
}
