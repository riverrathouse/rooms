var firebaseconfig = {
    apiKey: "AIzaSyDtrgwkA1k0J41esUtcMHC0MKW3LqMaKRg",
    authDomain: "kwitter-27de3.firebaseapp.com",
    databaseURL: "https://kwitter-27de3-default-rtdb.firebaseio.com",
    projectId: "kwitter-27de3",
    storageBucket: "kwitter-27de3.appspot.com",
    messagingSenderId: "177060927268",
    appId: "1:177060927268:web:5e452afd7eb4bb729205b1"
}
firebase.initializeApp(firebaseconfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name
function addroom (){
    room_names = document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_names);
  firebase.database().ref("/").child(room_names).update({
        purpose:"adding room name"
  })
  window.location = "room.html";
}
