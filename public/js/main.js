document.addEventListener("DOMContentLoaded", () => {
  const authWrapper = document.getElementById("authWrapper");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
  const userExist = usersList.some((user) => user.id == userData?.id);

  function handleAuthentication() {
    if (userData && userExist) {
      authWrapper.innerHTML = '';

      const contactUsButton = document.createElement("a");
      contactUsButton.href = "#";
      contactUsButton.classList.add("btn", "btn-link", "nav-link");
      contactUsButton.innerHTML = '<i class="fas fa-headset fa-lg"></i> Contact Us';
      contactUsButton.addEventListener("click", openContactForm);
      authWrapper.appendChild(contactUsButton);

      const accountButton = document.createElement("button");
      accountButton.id = "accountButton";
      accountButton.classList.add("btn", "btn-primary", "rounded", "d-none");
      accountButton.textContent = "My Account";
      authWrapper.appendChild(accountButton);

      const signOutButton = document.createElement("button");
      signOutButton.id = "authButton";
      signOutButton.classList.add("btn", "btn-primary", "rounded");
      signOutButton.textContent = "Sign out";
      authWrapper.appendChild(signOutButton);
    } else {
      authWrapper.innerHTML = '';

      const signInButton = document.createElement("button");
      signInButton.id = "authButton";
      signInButton.classList.add("btn", "btn-primary", "rounded");
      signInButton.textContent = "Sign in";
      authWrapper.appendChild(signInButton);
    }
  }

  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.justifyContent = "space-between";
  document.body.style.alignItems = "stretch";
  document.body.style.minHeight = "100vh";

  handleAuthentication();

  authWrapper.addEventListener("click", (event) => {
    if (event.target.id === "authButton") {
      if (userData && userExist) {
        localStorage.removeItem("userData");
        localStorage.removeItem("userRole");
        window.location.href = "../home/index.html";
      } else {
        window.location.href = "../sign-in/index.html";
      }
    } else if (event.target.id === "accountButton") {
      if (userData.role === "customer") {
        window.location.href = "../user-dashboard/index.html";
      } else if (userData.role === "seller") {
        window.location.href = "../../../dashboard/seller/index.html";
      }
    }
  });

  function openContactForm(event) {
    event.preventDefault();

    const dialogHTML = `
      <div id="contactFormDialog" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Contact Us</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form id="contactForm">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" required>
                </div>
                <div class="form-group">
                  <label for="phone">Phone number</label>
                  <input type="tel" class="form-control" id="phone" required>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea class="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', dialogHTML);

    const contactFormDialog = new bootstrap.Modal(document.getElementById('contactFormDialog'));
    contactFormDialog.show();

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      if (name && email && phone && message) {
        const messagesList = JSON.parse(localStorage.getItem("messagesList")) || [];
        const newMessage = {
          id: messagesList.length + 1,
          name,
          email,
          phone,
          message
        };
        messagesList.push(newMessage);
        localStorage.setItem("messagesList", JSON.stringify(messagesList));

        contactFormDialog.hide();
        alert("Message sent successfully!");
      } else {
        alert("Please fill in all fields.");
      }
    });

    contactFormDialog.addEventListener('hidden.bs.modal', () => {
      document.getElementById('contactFormDialog').remove();
    });
  }
});
