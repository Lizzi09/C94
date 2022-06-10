

// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyAkRcbsCsM7CZl44ZWcKWZXKWSicJaC77Y",
    authDomain: "letschat-2-45139.firebaseapp.com",
    databaseURL: "https://letschat-2-45139-default-rtdb.firebaseio.com",
    projectId: "letschat-2-45139",
    storageBucket: "letschat-2-45139.appspot.com",
    messagingSenderId: "768418063512",
    appId: "1:768418063512:web:4ea3c2dda3655f91d95ced"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

   function addRoom(){
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
        purpose:"Adding room name."
       });
       localStorage.setItem("room_name", room_name);
       window.location="kwitter_page.html";
    }

    function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
     });
   });
 
 }

 getData();