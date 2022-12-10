const postsFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    customz: "header",
    Accept: "application/json",
    Authrztn: "my_new_token",
  },
});