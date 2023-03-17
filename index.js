function generateFixtures() {
  var teamInput = document.getElementById("team-input");
  var teams = teamInput.value.split(",");
  for (var i = 0; i < teams.length; i++) {
    teams[i] = teams[i].trim();
  }
  var fixtures = [];
  while (teams.length > 1) {
    var team1 = teams.splice(Math.floor(Math.random() * teams.length), 1)[0];
    var team2 = teams.splice(Math.floor(Math.random() * teams.length), 1)[0];
    fixtures.push(team1 + " vs " + team2);
  }
  var fixtureList = document.getElementById("fixture-list");
  fixtureList.innerHTML = "";
  for (var i = 0; i < fixtures.length; i++) {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(fixtures[i]));
    fixtureList.appendChild(listItem);
  }
}
