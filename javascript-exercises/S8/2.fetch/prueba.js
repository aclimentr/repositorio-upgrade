fetch('https://api.nationalize.io?name=')
.then((response) => {
  return response.json();
})
.then((myJson) => {
  console.log(myJson);
});