const MIN_AGE = 18;
const MAX_AGE = 65;

const input = document.getElementById("age");
const button = document.getElementById("verifyBtn");
const message = document.getElementById("message");

function verifyAge(value) {
  if (value === "" || value === null) {
    return { status: "error", text: "Please enter your age." };
  }
  const age = Number(value);
  if (!Number.isInteger(age)) {
    return { status: "error", text: "Age must be a whole number." };
  }
  if (age < 0 || age > 120) {
    return { status: "error", text: `Age is not valid.` };
  }
  if (age < MIN_AGE || age > 65) {
    return { status: "fail", text: `Access denied.` };
  }
  return { status: "pass", text: "Access granted." };
}

button.addEventListener("click", () => {
  const result = verifyAge(input.value);
  message.textContent = result.text;
  message.className = `message ${result.status}`;
});