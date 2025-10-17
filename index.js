const loginBtn = document.getElementById("loginBtn");
const roleSection = document.getElementById("roleSection");
const lenderBtn = document.getElementById("lenderBtn");
const renterBtn = document.getElementById("renterBtn");
const lenderSection = document.getElementById("lenderSection");
const renterSection = document.getElementById("renterSection");
const formSection = document.getElementById("formSection");
const agreementSection = document.getElementById("agreementSection");
const agreementBtn = document.getElementById("agreementBtn");
const feedbackBtn = document.getElementById("feedbackBtn");
const feedbackSection = document.getElementById("feedbackSection");
const submitFeedback = document.getElementById("submitFeedback");
const thankMsg = document.getElementById("thankMsg");

loginBtn.addEventListener("click", () => {
  document.getElementById("mainContent").classList.add("hidden");
  roleSection.classList.remove("hidden");
});

lenderBtn.addEventListener("click", () => {
  roleSection.classList.add("hidden");
  lenderSection.classList.remove("hidden");
});

renterBtn.addEventListener("click", () => {
  roleSection.classList.add("hidden");
  renterSection.classList.remove("hidden");
});

function showForm() {
  lenderSection.classList.add("hidden");
  renterSection.classList.add("hidden");
  formSection.classList.remove("hidden");
}

agreementBtn.addEventListener("click", () => {
  formSection.classList.add("hidden");
  agreementSection.classList.remove("hidden");
});

feedbackBtn.addEventListener("click", () => {
  agreementSection.classList.add("hidden");
  feedbackSection.classList.remove("hidden");
});

submitFeedback.addEventListener("click", () => {
  const feedback = document.getElementById("feedbackInput").value.trim();
  if (feedback) {
    thankMsg.classList.remove("hidden");
    document.getElementById("feedbackInput").value = "";
  } else {
    alert("Please write your feedback before submitting.");
  }
});