const firebaseConfig = {
      apiKey: "AIzaSyBqoXb2tfkZXDxXuV3mBKoBXSwt3Up3KXY",
      authDomain: "classtest-cd845.firebaseapp.com",
      databaseURL: "https://classtest-cd845-default-rtdb.firebaseio.com",
      projectId: "classtest-cd845",
      storageBucket: "classtest-cd845.appspot.com",
      messagingSenderId: "347320330872",
      appId: "1:347320330872:web:a3a1740939733ab2e69b8d"
};


firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + userName + "!";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("roomname" + Room_names);
                  row = "<div class='roomname' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";

                  document.getElementById("output").innerHTML += row;




            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}

function addRoom() {
      roomname = document.getElementById("roomName").value;
      firebase.database().ref("/").child(roomname).update({ purpose: "adding Room" });
      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html";

}
