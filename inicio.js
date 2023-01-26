
//AÑADE TUS ENLACES DE FIREBASE

//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyC21Mr6JOpT3nwipTrCpRVAWqq_z_x5xK4",
  authDomain: "tinstagram-ebcf4.firebaseapp.com",
  databaseURL: "https://tinstagram-ebcf4-default-rtdb.firebaseio.com",
  projectId: "tinstagram-ebcf4",
  storageBucket: "tinstagram-ebcf4.appspot.com",
  messagingSenderId: "1099492815111",
  appId: "1:1099492815111:web:69adb6601c0264089c55a2",
  measurementId: "G-YLHD8PJGBP"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Bienvenido " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="kwitter_page.html";
  }

  function logOut()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("index.html")
  }



      
