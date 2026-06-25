/*
  EDIT THIS FILE AS RESULTS ARRIVE.

  status:
    "waiting"    = still mathematically possible
    "qualified"  = YAY!
    "eliminated" = AW.

  For each group:
    "pending" = not settled
    "helpful" = that group's third-place finisher is below Scotland
    "harmful" = that group's third-place finisher is above Scotland
*/

window.TRACKER_DATA = {
  status: "waiting",
  updatedAt: "25 June 2026, 14:15 BST",
  helpfulNeeded: 4,

  groups: [
    {
      group: "E",
      state: "pending",
      title: "Ecuador v Germany / Curaçao v Ivory Coast",
      requirement: "Scotland want both Ecuador and Curaçao to draw or lose. A win for either puts that side above Scotland."
    },
    {
      group: "F",
      state: "pending",
      title: "Japan v Sweden",
      requirement: "Sweden need to lose by at least four goals to drop below Scotland."
    },
    {
      group: "D",
      state: "pending",
      title: "Paraguay v Australia",
      requirement: "A Paraguay defeat by 2+ goals, or an Australia defeat by 4+ goals, is helpful. A draw is not."
    },
    {
      group: "I",
      state: "pending",
      title: "Senegal v Iraq",
      requirement: "A draw is ideal. A low-scoring Iraq win may also leave the third-placed side below Scotland."
    },
    {
      group: "H",
      state: "pending",
      title: "Uruguay v Spain / Cape Verde v Saudi Arabia",
      requirement: "Best case: Cape Verde win and Uruguay lose, leaving third place on two points."
    },
    {
      group: "G",
      state: "pending",
      title: "New Zealand v Belgium / Egypt v Iran",
      requirement: "Best case: Belgium and Egypt win, leaving Iran third on two points."
    },
    {
      group: "L",
      state: "pending",
      title: "Croatia v Ghana",
      requirement: "Scotland need Ghana to beat Croatia by at least three goals."
    },
    {
      group: "K",
      state: "pending",
      title: "DR Congo v Uzbekistan",
      requirement: "A draw helps; a low-scoring Uzbekistan win may also be enough."
    },
    {
      group: "J",
      state: "pending",
      title: "Algeria v Austria",
      requirement: "Scotland want Algeria to lose by at least two goals. A draw is bad news."
    }
  ]
};
