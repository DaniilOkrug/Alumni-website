async function signConnect() {
  let response = await fetch("http://plony.hopto.org:70/authorize", {
    headers: {
      Authorization: "Bearer " + document.cookie.replace("token=", ""),
    },
    method: "GET",
  });
  result = await response.json();
  if (result.ok) {
  } else {
    loggedOff();
  }
}
signConnect();
function loggedOff() {
  const emptyDiv = document.getElementById("ALL");
  emptyDiv.innerHTML = "";
}

const blogHeader = document.getElementById("blogHeader");
const blogBody = document.getElementById("blogBody");
const blogPreview = document.getElementById("productPreview1");
const blogPreview2 = document.getElementById("productPreview2");
const blogPrice = document.getElementById("blogPrice");
const buttonPreview = document.getElementById("upload");
const buttonFinish = document.getElementById("finish");
const sale = document.getElementById("badgeCheck1");
const hot = document.getElementById("badgeCheck2");
const category = document.getElementById("categoryDropdown");
buttonFinish.addEventListener("click", finishCreate);
function finishCreate() {
  const type =
    category.innerText === "Кепка"
      ? "CAP"
      : category.innerText === "Футболка"
      ? "SHIRT"
      : "HOODIE";
  const tagss = [];
  if (sale.cheked) tagss.push("SALE");
  if (hot.cheked) tagss.push("HOT");
  let data = {
    name: blogHeader.value,
    description: blogBody.value,
    price: blogPrice.value,
    category: type,
    sizes: ["S", "M"],
    tags: tagss,
  };

  sendToServer(data);
}

async function sendToServer(dataToSend) {
  const formData = new FormData();

  formData.append("file", blogPreview.files[0]);

  let response = await fetch("http://plony.hopto.org:70/images", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: "Bearer " + document.cookie.replace("token=", ""),
      Accept: "application/json",
    },
  });
  dataToSend.primaryImage = await response.text();

  const formData2 = new FormData();

  formData.append("file", blogPreview2.files[0]);

  response = await fetch("http://plony.hopto.org:70/images", {
    method: "POST",
    body: formData2,
    headers: {
      Authorization: "Bearer " + document.cookie.replace("token=", ""),
      Accept: "application/json",
    },
  });
  dataToSend.secondaryImage = await response.text();
  response = await fetch("http://plony.hopto.org:70/items", {
    headers: {
      Authorization: "Bearer " + document.cookie.replace("token=", ""),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(dataToSend),
  });
  result = await response.json();
  alert("Вы вынесли товар в магазин");
  location.reload();
}
