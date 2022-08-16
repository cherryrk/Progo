const firebaseConfig = {
    apiKey: "AIzaSyBt4CI032KUCFOKcmX2PGp9s4tinKMDOQY",
    authDomain: "lets-chat-app-d1ad4.firebaseapp.com",
    projectId: "lets-chat-app-d1ad4",
    storageBucket: "lets-chat-app-d1ad4.appspot.com",
    messagingSenderId: "121887386618",
    appId: "1:121887386618:web:b6060806e5234ec5e35243"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();