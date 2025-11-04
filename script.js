const quotes = {
  happy: [
    "Keep smiling, it makes people wonder what you’re up to!",
    "Happiness is contagious — spread it around!",
    "A day without laughter is a day wasted."
  ],
  sad: [
    "It’s okay to feel sad — even rain helps flowers grow.",
    "Tough times never last, but tough people do.",
    "Breathe. This too shall pass."
  ],
  angry: [
    "For every minute you’re angry, you lose 60 seconds of peace.",
    "Don’t let anger control you — channel it into action.",
    "Stay calm, you’re stronger than your emotions."
  ],
  tired: [
    "Rest isn’t weakness — it’s how you grow.",
    "Even the stars need darkness to shine.",
    "Take a break. You deserve it."
  ]
};

const buttons = document.querySelectorAll(".moods button");
const quoteDisplay = document.getElementById("quote");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const mood = btn.getAttribute("data-mood");
    const randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
    quoteDisplay.textContent = randomQuote;

    // background color based on mood
    changeBackground(mood);
    localStorage.setItem("lastMood", mood);
  });
});

function changeBackground(mood) {
  const colors = {
    happy: "linear-gradient(to right, #f9d423, #ff4e50)",
    sad: "linear-gradient(to right, #2c3e50, #4ca1af)",
    angry: "linear-gradient(to right, #cb2d3e, #ef473a)",
    tired: "linear-gradient(to right, #757f9a, #d7dde8)"
  };
  document.body.style.background = colors[mood];
}

// Load last mood
window.onload = () => {
  const lastMood = localStorage.getItem("lastMood");
  if (lastMood) {
    const randomQuote = quotes[lastMood][Math.floor(Math.random() * quotes[lastMood].length)];
    quoteDisplay.textContent = randomQuote;
    changeBackground(lastMood);
  }
};
