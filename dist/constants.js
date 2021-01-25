const CONSTANTS = {
  genders: ["Male", "Female"],
  statuses: [
    "Unassigned",
    "Assigned",
    "Contacted",
    "Not Interested",
    "Unable to Contact",
    "YSA Member"
  ],
  fheGroups: ["Cameron", "Maryville", "Kearney", "Gallatin", "Virtual"],
  homeWards: [
    "Crooked River Ward",
    "Far West Ward",
    "Far West YSA Ward",
    "Fishing River Ward",
    "Gallatin Ward",
    "Grand River Valley Ward",
    "Grindstone Creek Ward",
    "Kearney Ward",
    "Maryville Ward",
    "Spring Hill Ward",
    "Three Forks Ward",
    "Whitmer Ward",
    "Yellow Creek Branch"
  ],
  contactMethods: ["Text", "Call", "Email"],
  sources: [
    "YSA Fellowship",
    "Church",
    "YSA Activity",
    "Home Evening",
    "Other"
  ],
  fheLeaders: {
    Cameron: [{name: "Mailey Simpson", phone: "816-284-5790"}],
    Gallatin: [{name: "Camille Perry", phone: "801-674-3403"}],
    Kearney: [
      {name: "Jose Dominguez", phone: "816-778-9336"},
      {name: "Jenette Pratt", phone: "816-877-2998"}
    ],
    Maryville: [
      {name: "Kasey Ryan", phone: "907-715-8819"},
      {name: "Danielle Magnuson", phone: "816-209-2551"}
    ],
    Virtual: [{name: "Chance Rogers", phone: "816-885-2924"}]
  }
};
export default CONSTANTS;
