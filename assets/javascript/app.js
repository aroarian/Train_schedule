$(document).ready(function() {
  $("#first").timepicker();

 
  
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDNZ76Q7VZZCLWo3y7oE4E2plbkQv8lhEE",
  authDomain: "train-schedule-8ee90.firebaseapp.com",
  databaseURL: "https://train-schedule-8ee90.firebaseio.com",
  projectId: "train-schedule-8ee90",
  storageBucket: "train-schedule-8ee90.appspot.com",
  messagingSenderId: "467045358731"
};
firebase.initializeApp(config);

var database = firebase.database();



    database.ref('/trains').on("child_added", function(snapshot) {
      $(".table").append(
        "<tr><td>" +snapshot.val().name +"</td><td>" +
          snapshot.val().destination + "</td><td>" + snapshot.val().frequency + "</td><td>" + snapshot.val().next +"</td><td>"
          + snapshot.val().minAway + "</td></tr>"
      );
    });


    $(".addTrain").on("submit", function(event) {
      event.preventDefault();

      var name = $("#name").val().trim();
      var destination = $("#destination").val().trim();
      var first = $("#first").val().trim();
      var freq = $("#freq").val().trim();
      var format = moment(first, "HH:mm").format("X");
      var diffMinutes = moment().diff(moment.unix(format), "minutes") % freq;
      var minAway = freq - diffMinutes;
      var next = moment().add(minAway, "minutes").format("hh:mm A")
      
      console.log(first);
      console.log(format);
      // console.log(diffMinutes);
      // console.log(minAway);
      console.log(next);
      
      database.ref('/trains').push({
          name: name,
          destination: destination,
          first: first,
          frequency: freq,
          next: next,
          minAway: minAway
      });

      $("#name").val("")
      $("#destination").val("")
      $("#first").val("")
      $("#freq").val("");
    });
});