document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const answers = new FormData(this);

  let scores = {
    web: 0,
    software: 0,
    data: 0,
    security: 0,
    ai: 0,
    "UI/UX": 0
  };

  for (const [question, answer] of answers.entries()) {
    if (scores.hasOwnProperty(answer)) {
      scores[answer]++;
    }
  }

  let maxScore = 0;
  let bestField = "";

  for (const field in scores) {
    if (scores[field] > maxScore) {
      maxScore = scores[field];
      bestField = field;
    }
  }

  const fieldNames = {
    web: "تطوير الويب وتصميم الواجهات",
    software: "هندسة البرمجيات والتطوير",
    data: "تحليل البيانات",
    security: "الأمن السيبراني",
    ai: "الذكاء الاصطناعي وتعلم الآلة",
    "UI/UX": "تصميم تجربة المستخدم والواجهات"
  };

  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.textContent = maxScore > 0
    ? `المسار التقني المناسب لك هو: ${fieldNames[bestField]}`
    : "يرجى اختيار الإجابات أولاً";
});
