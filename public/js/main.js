/*------------- #Navbar Auth   --------------*/
document.addEventListener("DOMContentLoaded", () => {
  const authButton = document.getElementById("authButton");
  const accountButton = document.getElementById("accountButton");

  const userData = JSON.parse(localStorage.getItem("userData"));
  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
  const userExist = usersList.some((user) => user.id == userData?.id );


  function handleAuthUser(){
    authButton.textContent = "Sign out";
    accountButton.classList.remove("d-none");
  }
  function handleNotAuthUser(){
    authButton.innerHTML = "Sign in";
    accountButton.classList.add("d-none");
  }

  if (userData && userExist) {
    handleAuthUser();
  } else {
    handleNotAuthUser();
    localStorage.removeItem("userData");
    localStorage.removeItem("userRole");
  }

  authButton.addEventListener("click", () => {

    if(userData && userExist){
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
