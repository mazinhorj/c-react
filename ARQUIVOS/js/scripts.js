console.log(axios);
const getData = async () => {
  try {
    const response = await postsFetch.get(
      "/users",
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  };
};

getData();

const container = document.querySelector("#user_container");

const printData = async () => {
  const data = await getData();
  console.log(data);
  data.forEach((user) => {
    const div = document.createElement("div");
    const nameElement = document.createElement("h3");
    nameElement.textContent = user.name;
    div.appendChild(nameElement);
    const emailElement = document.createElement("li");
    emailElement.textContent = user.email;
    div.appendChild(emailElement);
    const phoneElement = document.createElement("li");
    phoneElement.textContent = user.phone;
    div.appendChild(phoneElement);
    const webSiteElement = document.createElement("li");
    webSiteElement.textContent = user.website;
    div.appendChild(webSiteElement);
    const companyElement = document.createElement("li");
    companyElement.textContent = user.company.name;
    div.appendChild(companyElement);
    const cityElement = document.createElement("li");
    cityElement.textContent = user.address.city;
    div.appendChild(cityElement);
    container.appendChild(div);
  });
};

printData();

const form = document.querySelector("#post_form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  postsFetch.post(
    "/posts",
    {
      title: titleInput.value,
      body: bodyInput.value,
      userId: 1
    }
  );
})
