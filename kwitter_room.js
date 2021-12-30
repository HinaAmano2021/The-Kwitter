var firebaseConfig = {
    apiKey: "AIzaSyC3HkOFaij0ZNe3TAoTsentGJteHj8WprA",
    authDomain: "kwitter-691a8.firebaseapp.com",
    projectId: "kwitter-691a8",
    storageBucket: "kwitter-691a8.appspot.com",
    messagingSenderId: "599285018121",
    appId: "1:599285018121:web:b2dbdbea7bbc00530292d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child (room_name).update({
    purpose:"add room name"     
    })
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html"      
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"      
}
function logout(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"      
}