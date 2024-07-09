document.addEventListener("DOMContentLoaded", () => {
  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
  const userData = JSON.parse(localStorage.getItem("userData"));


  if (!userData || !usersList.some((user) => user.id == userData.id ) || userData.role != "seller" ) {
    alert("Auth error");
    localStorage.removeItem("userData");
    return;
  }

  $("#userName").text(userData.name);
});
