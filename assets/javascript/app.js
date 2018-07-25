$( document ).ready(function() {
   
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


  database.ref('/schedule').on('child_added', function(snapshot){
    console.log(snaphot.val());
    // $('.container').append(
    //   '<tr><td>' + snap.val().trainName + '</td><td>'
    //   + snap.val().firstTrainTime + '</td><td>'
    //   + snap.val().trainDest+ '</td></tr>'
    // )
  })


  $('.add-train').on('submit', function(event){
    event.preventDefault()
    console.log('works');
    // var trainName = $('#train-name').val()
    // var firstTrainTime = $('#first-train-time').val()
    // var trainDest = $('#train-dest').val()
    // database.ref('/schedule').push({
    //   trainName: trainName,
    //   firstTrainTime: firstTrainTime,
    //   trainDest: trainDest
    })
  })

















});