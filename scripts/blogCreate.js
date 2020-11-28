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
const blogPreview = document.getElementById("blogPreview");
const buttonPreview = document.getElementById("upload");
const buttonFinish = document.getElementById("finish");
buttonFinish.addEventListener("click", finishCreate);
function finishCreate() {
  const data = {
    title: blogHeader.value,
    body: blogBody.value,
    type: "BLOG",
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
  dataToSend.previewImage = await response.text();
  response = await fetch("http://plony.hopto.org:70/posts", {
    headers: {
      Authorization: "Bearer " + document.cookie.replace("token=", ""),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(dataToSend),
  });
  result = await response.json();
  alert("Вы успешно создали пост");
  location.reload();
}
