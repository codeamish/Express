
const login = async (email, password) => {
  console.log(email, password)

  // const url = "http://127.0.0.1:3000/api/v1/users/login";

  // fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     Accept: "application/json, text/plain, */*",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //      email,
  //     password,
  //   }),
  // }).then((response) => response.json())
  // .then((data) => console.log(data))
  // .catch((err) => {
  //   console.log(err);
  //  });
    try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err.response.data);
  }



};

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;

  const password = document.getElementById('password').value;
  login(email, password );
});
