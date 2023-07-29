const loginInput = async (event) => {
  event.preventDefault();

  const email = document
    .querySelector("#loginEmail")
    .value.trim()
    .toLowerCase();
  const password = document.querySelector("#loginPassword").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const signupInput = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#newName").value.trim().toLowerCase();
  const email = document.querySelector("#newEmail").value.trim().toLowerCase();
  const password = document.querySelector("#newPassword").value.trim();
  const passwordConfirm = document
    .querySelector("#newPasswordConfirm")
    .value.trim();

  if (name && email && password && password === passwordConfirm) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};
