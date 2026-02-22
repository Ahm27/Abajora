const messages = [
  "ما أصابك لم يكن ليخطئك، وما أخطأك لم يكن ليصيبك.",
  "اطمئن… تدبير الله ألطف مما تظن.",
  "كل تأخير في حياتك… وراءه حكمة.",
  "ربك يعلم تعبك… ويعد لك جبرًا يليق بقلبك.",
  "ابدأ ولو بخطوة صغيرة… البركة في الاستمرار.",
  "أنت أقوى مما تتخيل… لأن الله معك.",
  "لا تقارن رحلتك بأحد… لكلٍ طريقه المكتوب.",
  "الدعاء يغير أقدارًا لم تكن تظن أنها تتغير.",
  "أحيانًا المنع هو عين العطاء.",
  "اجعل نيتك صافية… وسيصلح الله طريقك."
];

const btn = document.getElementById("btn");
const message = document.getElementById("message");
const lamp = document.getElementById("lamp");

btn.addEventListener("click", () => {
  lamp.classList.remove("on");
  message.classList.remove("show");

  setTimeout(() => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = random;

    lamp.classList.add("on");
    message.classList.add("show");
  }, 300);
});