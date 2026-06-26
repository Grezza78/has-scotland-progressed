/*
  Updated: Friday 26 June 2026, 09:20 BST

  status:
    "waiting"    = still mathematically possible
    "qualified"  = YAY!
    "eliminated" = AW.

  Group state:
    "pending" = not settled
    "helpful" = that group's third-place finisher is below Scotland
    "harmful" = that group's third-place finisher is above Scotland
*/

window.TRACKER_DATA = {
  status: "waiting",
  updatedAt: "26 June 2026, 09:20 BST",
  helpfulNeeded: 4,

  groups: [
    {
      group: "D",
      state: "harmful",
      title: "Paraguay 0–0 Australia",
      requirement:
        "No favour here. Paraguay finished third with four points and moved above Scotland."
    },
    {
      group: "E",
      state: "harmful",
      title: "Ecuador 2–1 Germany",
      requirement:
        "A damaging result. Ecuador finished third with four points and qualified ahead of Scotland."
    },
    {
      group: "F",
      state: "harmful",
      title: "Japan 1–1 Sweden",
      requirement:
        "Sweden finished third with four points and qualified ahead of Scotland."
    },
    {
      group: "I",
      state: "pending",
      title: "Senegal v Iraq",
      requirement:
        "A draw is ideal. An Iraq win by one or two goals should also leave the third-placed team below Scotland. A Senegal win, or a large Iraq win, is bad news."
    },
    {
      group: "H",
      state: "pending",
      title: "Uruguay v Spain",
      requirement:
        "Scotland need Uruguay to lose. That would leave the third-placed side in Group H on no more than two points."
    },
    {
      group: "G",
      state: "pending",
      title: "Egypt v Iran",
      requirement:
        "Scotland need Egypt to beat Iran. That guarantees the third-placed team in Group G finishes on no more than two points."
    },
    {
      group: "L",
      state: "pending",
      title: "Croatia v Ghana",
      requirement:
        "Croatia must lose by at least three goals. A two-goal defeat would still leave Croatia ahead of Scotland on goals scored."
    },
    {
      group: "K",
      state: "pending",
      title: "DR Congo v Uzbekistan",
      requirement:
        "A draw helps. An Uzbekistan win by no more than three goals should also leave the third-placed team below Scotland. A DR Congo win is bad news."
    },
    {
      group: "J",
      state: "pending",
      title: "Algeria v Austria",
      requirement:
        "Algeria must lose by at least two goals. A one-goal defeat would leave them level on goal difference but ahead of Scotland on goals scored."
    }
  ]
};
