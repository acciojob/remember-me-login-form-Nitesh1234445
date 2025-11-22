//your JS code here. If required.
const form = document.getElementById('loginForm');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let checkbox = document.getElementById('checkbox');
const existingBtn = document.getElementById('existing');
let submit = document.getElementById('submit');

submit.addEventListener("click" , (e)=> {
	e.preventDefault();
	let username = usernameInput.value.trim();
	let password = passwordInput.value;
	
	alert(`Logged in as ${username}`);

	if(checkbox.checked){
		localStorage.setItem('username' , username);
		localStorage.setItem('password' , password);
	}else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
})

let localUsername = localStorage.getItem('username');
let localPassword = localStorage.getItem('password');

if(localPassword && localUsername){
	existingBtn.style.display = "block";
}else{
	existingBtn.style.display = "none";
}

existingBtn.addEventListener("click" , (e)=>{
	e.preventDefault();
	if(localUsername && localPassword){
		alert(`Logged in as ${localUsername}`);
	}
})



