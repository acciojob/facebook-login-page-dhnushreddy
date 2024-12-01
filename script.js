// Create main container
const mainDiv = document.createElement("div");
mainDiv.className = "main";

// Create logo container
const logoDiv = document.createElement("div");
logoDiv.className = "left";

// Create form container
const form = document.createElement("form");
form.className = "loginForm";

// Append children to mainDiv
mainDiv.appendChild(logoDiv);
mainDiv.appendChild(form);

// Add child to logoDiv
const p = document.createElement("p");
p.textContent = `Facebook helps you connect and 
share with the people in your life.`;

const heading = document.createElement("img");
heading.src = "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png";
heading.className = "heading";
heading.alt = "Facebook Logo";

logoDiv.appendChild(heading);
logoDiv.appendChild(p);

// Add children to form
const userName = document.createElement("input");
userName.placeholder = "Email address or phone number";
userName.type = "text";
userName.name = "email";
userName.id = "email";

const password = document.createElement("input");
password.placeholder = "Password";
password.type = "password";
password.name = "password";
password.id = "password";

const login = document.createElement("button");
login.textContent = "Log In";
login.type = "submit";

const forgot = document.createElement("a");
forgot.className = "forgot";
forgot.href = "/recover/initiate";
forgot.textContent = "Forgot account?";

const hr = document.createElement("hr");

const newAcc = document.createElement("button"); // Changed to button for better accessibility
newAcc.textContent = "Create new account";
newAcc.className = "signup";
newAcc.style.display = "block"; // Ensure the element is visible
newAcc.style.margin = "10px 0"; // Add some spacing
newAcc.onclick = (event) => {
  event.preventDefault(); // Prevent form submission
  window.location.href = "/reg/"; // Redirect to /reg/ on click
};

// Append inputs and buttons to form
form.appendChild(userName);
form.appendChild(document.createElement("br"));
form.appendChild(password);
form.appendChild(document.createElement("br"));
form.appendChild(login);
form.appendChild(document.createElement("br"));
form.appendChild(forgot);
form.appendChild(hr);
form.appendChild(newAcc);

// Append mainDiv to the body
document.body.appendChild(mainDiv);
