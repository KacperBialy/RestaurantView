function GetSingInValues() {
  const formData = document.querySelectorAll("#form input");
  const email = formData[0].value;
  const password = formData[1].value;
  Loggin(email, password);
  return false;
}
async function Loggin(email, password) {
  const jsonResponse = await postData(
    "https://localhost:5001/api/account/login",
    {
      email: email,
      password: password,
    }
  );
  if (jsonResponse == null) {
    console.log("Wrong email or password");
  } else {
    console.log(jsonResponse.Bearer);
  }
}

function SingUpClick() {
  document.getElementById("linkSingUp").href =
    config.serverPath + "/SingUp.html";
}
