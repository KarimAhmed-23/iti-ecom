/*------------- #Navbar Auth   --------------*/
document.addEventListener("DOMContentLoaded", () => {
  const authButton = document.getElementById("authButton");
  const accountButton = document.getElementById("accountButton");

  const userData = JSON.parse(localStorage.getItem("userData"));

  function handleAuthUser(){
    authButton.textContent = "Sign out";
    accountButton.classList.remove("d-none");
  }
  function handleNotAuthUser(){
    authButton.innerHTML = "Sign in";
    accountButton.classList.add("d-none");
  }

  if (userData) {
    handleAuthUser();
  } else {
    handleNotAuthUser();
  }

  authButton.addEventListener("click", () => {

    if(userData){
      localStorage.removeItem("userData");
      localStorage.removeItem("userRole");
      window.location.href = "../home/index.html";
    }else{
      window.location.href = "../sign-in/index.html";
    }
  });

  accountButton.addEventListener("click", () => {

    if(userData.role === "customer"){
      window.location.href = "../user-dashboard/index.html"; 
    }
    if(userData.role === "seller"){
      window.location.href = '../../../dashboard/seller/index.html';
    }

  });


});
