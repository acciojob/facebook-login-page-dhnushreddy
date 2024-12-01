//your JS code here. If required.
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
p.textContent =
`Facebook helps you connect and 
	share with the people in your life.`
const heading = document.createElement("img");
heading.src ="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
heading.className = "heading";
heading.alt = "Facebook Logo";
logoDiv.appendChild(heading);
logoDiv.appendChild(p); // Corrected typo from appendCihld to appendChild

// Add children to form
const userName = document.createElement("input");
userName.placeholder = "Email address or phone number"; // Corrected from input.placeHolder to userName.placeholder
userName.type = "text";
userName.name = "email";
userName.id="email"
const password = document.createElement("input");
password.placeholder = "Password"; // Corrected from input.placeHolder to password.placeholder
password.type = "password";
password.name = "password";
password.id="password" ;
const login = document.createElement("button");
login.textContent = "Log In";
login.type = "submit";

const forgot = document.createElement("a");
forgot.className = "forgot";
forgot.href="/recover/initiate";
forgot.textContent = "Forgot account?";

const hr = document.createElement("hr");
const br = document.createElement("br");
const br1 = document.createElement("br");
const br2 = document.createElement("br");
const newAcc = document.createElement("div");
newAcc.textContent = "Create new account";
newAcc.className = "new-account";
newAcc.onclick = () => {
  window.location.href = "/reg/"; // Redirect to /reg/ on click
};
// Append inputs and buttons to form
form.appendChild(userName);
form.append(br);
form.appendChild(password);
form.append(br1);
form.appendChild(login);
form.append(br2);
form.appendChild(forgot);
form.appendChild(hr);
form.appendChild(newAcc);

// Append mainDiv to the body
document.body.appendChild(mainDiv);
