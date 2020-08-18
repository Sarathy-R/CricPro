var scoreDetails = [
  ["Dhawan", "lbw b Malinga", 34, 23, 45.8, 5, 6],
  ["KL Rahul", "lbw b Malinga", 54, 53, 33.8, 2, 3],
  ["Virat", "run out", 64, 45, 23.8, 12, 3],
  ["Yuvraj", "c perara b Malinga", 11, 12, 7.8, 1, 0],
  ["MSD", "c sangakara b Malinga", 67, 12, 56.8, 5, 10],
  ["Raina", "not out", 54, 53, 33.8, 2, 3],
  ["Jadeja", "not out", 12, 23, 43.8, 1, 6],
  ["Extras", "", "15(b 1,lb 6 ,w 8,nb 0,p 0)", "", "", "", ""],
  ["Total", "", "254(5 wkts,45 Ovs)", "", "", "", ""],
  [
    "Did not bat",
    "",
    "Mohit Sharma,Praveen Kumar,B kumar,Shami",
    "",
    "",
    "",
    "",
  ],
];

DisplayScore();

//Displays the score Details via table format
function DisplayScore() {
  let tabEle = document.querySelector(".score-content");
  var rowCount = tabEle.rows.length;

  let totalrows = 7;

  scoreDetails.forEach((e, ind) => {
    var newRow = tabEle.insertRow(rowCount);

    for (let i = 0; i < totalrows; ++i) {
      newRow.insertCell(i).innerHTML = e[i];
    }
    rowCount += 1;
  });

  alignProper();
}

function alignProper() {
  let myTable = document.querySelector(".score-content");
  console.log(myTable.rows.length);

  let tablelen = myTable.rows.length;

  for (let y = tablelen - 3; y < tablelen; y++) {
    myTable.rows[y].cells[2].colSpan = 6;
    console.log(myTable.rows[y].cells[2].innerHTML);
  }
}
