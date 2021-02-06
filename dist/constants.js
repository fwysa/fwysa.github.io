const CONSTANTS = {
  genders: ["Male", "Female"],
  statuses: [
    "Unassigned",
    "Assigned",
    "Continue to Follow Up",
    "Contacted",
    "Not Interested",
    "Do Not Contact",
    "Unable to Contact",
    "YSA Member",
    "Other"
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
  communication: {
    contactMethods: ["Text", "Call", "Email", "Visit"],
    choiceMatrix: {
      "": [],
      Text: [0, 1, 2],
      Call: [3, 4, 2],
      Email: [5, 6, 7],
      Visit: [8, 9, 10]
    },
    statusMatrix: [
      [],
      [2, 3, 4, 5, 8],
      [1, 6, 8],
      [],
      [2, 3, 4, 5, 8],
      [],
      [2, 3, 4, 5, 8],
      [1, 6, 8],
      [],
      [2, 3, 4, 5, 8],
      [1, 6, 8]
    ],
    results: [
      "Left a text message",
      "Had text conversation",
      "Wrong number",
      "Left a voicemail",
      "Had a conversation",
      "Emailed but no response",
      "Had an email conversation",
      "Wrong email address",
      "Visited but not home/available",
      "Visited and had a conversation",
      "Wrong address"
    ]
  },
  sources: [
    "YSA Fellowship",
    "Church",
    "YSA Activity",
    "Home Evening",
    "Other"
  ],
  lists: {
    callers: "d45d3ef9-d25c-422c-8d22-1263564a281d",
    fheLeaders: "b6609528-3e1e-410f-97fa-b418d2fbc923"
  },
  roles: [
    "Admin",
    "Leader",
    "Activities",
    "HE Group Leader",
    "Fellowshipper"
  ]
};
export default CONSTANTS;
