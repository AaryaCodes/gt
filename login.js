// Create the login function here.
function Login() {

    player_name = document.getElementById("playername").value;
    localStorage.setItem("player_name", playername);
   
    window.location = "gamepage.html";
}