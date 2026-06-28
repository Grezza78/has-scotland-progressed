/*
  Final update: Sunday 28 June 2026

  Scotland have been eliminated from the 2026 World Cup.

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
  status: "eliminated",
  updatedAt: "28 June 2026 — final",
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
      title: "Egypt 0–0 Iran",
      requirement:
        "Iran finished third with three points and a better goal difference than Scotland."
    },
    {
      group: "H",
      state: "helpful",
      title: "Uruguay 0–1 Spain",
      requirement:
        "Uruguay finished third with two points and ranked below Scotland. One favour was received."
    },
    {
      group: "I",
      state: "harmful",
      title: "Senegal 5–0 Iraq",
      requirement:
        "Senegal finished third with three points and a far better goal difference than Scotland."
    },
    {
      group: "J",
      state: "harmful",
      title: "Algeria 3–3 Austria",
      requirement:
        "Algeria finished third with four points. A stoppage-time equaliser sent both teams through."
    },
    {
      group: "K",
      state: "harmful",
      title: "DR Congo 3–1 Uzbekistan",
      requirement:
        "DR Congo came from behind to finish third with four points and progress."
    },
    {
      group: "L",
      state: "harmful",
      title: "Croatia 2–1 Ghana",
      requirement:
        "Ghana finished third but still ranked above Scotland. This result formally ended Scotland's hopes."
    }
  ]
};
