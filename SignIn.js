function GetSingInValues()
{
const formData = document.querySelectorAll("#form input");
const email = formData[0].value;
const password = formData[1].value;
Loggin(email,password);
}
function Loggin(email, pasword)
{
//TODO => Send POST request to api with login request
}