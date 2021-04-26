let r = "https://website.name";
let o = {
  someHeader : "header content"
}

let get = () => {
  fetch(r,{method: 'GET', headers: o}).then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  });
}
