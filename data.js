/*
  Updated: Saturday 27 June 2026, 09:55 BST

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
  updatedAt: "27 June 2026, 09:55 BST",
  helpfulNeeded: 4,

  groups: [
    {
      group: "D",
      state: "harmful",
      title: "Paraguay 0–0 Australia",
      requirement:
        "Paraguay finished third with four points and ranked above Scotland."
    },
    {
      group: "E",
      state: "harmful",
      title: "Ecuador 2–1 Germany",
      requirement:
        "Ecuador finished third with four points and ranked above Scotland."
    },
    {
      group: "F",
      state: "harmful",
      title: "Japan 1–1 Sweden",
      requirement:
        "Sweden finished third with four points and ranked above Scotland."
    },
    {
      group: "G",
      state: "harmful",
      title: "Egypt 1–1 Iran",
      requirement:
        "Iran finished third with three points and goal difference 0, comfortably above Scotland."
    },
    {
      group: "H",
      state: "helpful",
      title: "Uruguay 0–1 Spain",
      requirement:
        "A favour at last. Uruguay finished third with two points and ranked below Scotland."
    },
    {
      group: "I",
      state: "harmful",
      title: "Senegal 5–0 Iraq",
      requirement:
        "Senegal finished third with three points and a much better goal difference than Scotland."
    },
    {
      group: "L",
      state: "pending",
      title: "Croatia v Ghana",
      requirement:
        "Croatia must lose by at least three goals. Any other result leaves Group L's third-placed side above Scotland."
    },
    {
      group: "K",
      state: "pending",
      title: "DR Congo v Uzbekistan",
      requirement:
        "A draw is helpful. An Uzbekistan win by one, two or three goals is also helpful. A DR Congo win, or an Uzbekistan win by four or more, is bad news."
    },
    {
      group: "J",
      state: "pending",
      title: "Algeria v Austria",
      requirement:
        "Austria must beat Algeria by at least two goals, or Algeria must beat Austria by at least four. Anything else leaves the third-placed team above Scotland."
    }
  ]
};
