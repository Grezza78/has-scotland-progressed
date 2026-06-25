const data = window.TRACKER_DATA;

const answer = document.querySelector("#answer");
const subanswer = document.querySelector("#subanswer");
const buildUp = document.querySelector("#build-up");
const compactStatus = document.querySelector("#compact-status");
const scenarios = document.querySelector("#scenarios");
const helpfulCount = document.querySelector("#helpful-count");
const helpfulNeeded = document.querySelector("#helpful-needed");
const progressBar = document.querySelector("#progress-bar");
const progress = document.querySelector(".progress");
const updatedAt = document.querySelector("#updated-at");
const replay = document.querySelector("#replay");

const messages = {
  waiting: {
    answer: "MAYBE!",
    subanswer: "Scotland are still alive, but we are now supporting a frankly undignified collection of draws, collapses and narrow defeats.",
    compact: "Still possible"
  },
  qualified: {
    answer: "YAY!",
    subanswer: "Scotland have progressed to the Round of 32. Cancel absolutely nothing.",
    compact: "Qualified"
  },
  eliminated: {
    answer: "AW.",
    subanswer: "Scotland have been eliminated. The arithmetic has finally stopped hurting us.",
    compact: "Eliminated"
  }
};

function renderCards() {
  scenarios.innerHTML = "";
  data.groups.forEach(item => {
    const card = document.createElement("article");
    card.className = `scenario ${item.state}`;

    const icon = item.state === "helpful" ? "✅" :
                 item.state === "harmful" ? "❌" : "⏳";

    card.innerHTML = `
      <div class="icon" aria-hidden="true">${icon}</div>
      <div>
        <h3>Group ${item.group}: ${item.title}</h3>
        <p>${item.requirement}</p>
      </div>
    `;
    scenarios.appendChild(card);
  });
}

function renderStatus() {
  const helpful = data.groups.filter(group => group.state === "helpful").length;
  const message = messages[data.status] ?? messages.waiting;

  document.body.classList.remove("waiting", "qualified", "eliminated");
  document.body.classList.add(data.status);

  helpfulCount.textContent = helpful;
  helpfulNeeded.textContent = data.helpfulNeeded;
  updatedAt.textContent = `Updated ${data.updatedAt}`;
  compactStatus.textContent = message.compact;

  const percentage = Math.min(100, (helpful / data.helpfulNeeded) * 100);
  progressBar.style.width = `${percentage}%`;
  progress.setAttribute("aria-valuemax", data.helpfulNeeded);
  progress.setAttribute("aria-valuenow", helpful);
}

function performReveal() {
  answer.textContent = "…";
  subanswer.textContent = "";
  buildUp.textContent = "WOOOOOOOOOOAH…";

  const hands = document.querySelectorAll(".hands span");
  hands.forEach(hand => {
    hand.style.animation = "none";
    void hand.offsetWidth;
    hand.style.animation = "";
  });

  window.setTimeout(() => {
    const message = messages[data.status] ?? messages.waiting;
    buildUp.textContent = data.status === "qualified" ? "WOOOOOOOOOOAH!" :
                          data.status === "eliminated" ? "Woooooooo—" :
                          "WOOOOOOOOOOAH…";
    answer.textContent = message.answer;
    subanswer.textContent = message.subanswer;
  }, 1850);
}

replay.addEventListener("click", performReveal);

renderCards();
renderStatus();
performReveal();
