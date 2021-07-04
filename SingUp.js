function GetSingUpValues() {
  const formData = document.querySelectorAll("#form input");
  const email = formData[0].value;
  const password = formData[1].value;
  const confirmPassword = formData[2].value;
  const nationality = formData[3].value;
  const dateOfBirth = formData[4].value;
  const accountType = document.querySelector("#accountType").value;
  Registration(
    email,
    password,
    confirmPassword,
    nationality,
    dateOfBirth,
    accountType
  );
}
function Registration(
  email,
  pasword,
  confirmPassword,
  nationality,
  dateOfBirth,
  accountType
) {
  //TODO => Send POST request to api with registration request
}
