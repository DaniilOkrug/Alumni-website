/*
/posts -> будет возвращать еще и id в себе
/posts/{id} -> определенный пост
/items -> возвращает список вещей
/items/{id} -> определенная вещь
/authorize -> вернет { ok: true, message: <username> } если ты авторизован
*/
async function signConnect() {
  let response = await fetch("http://plony.hopto.org:70/authorize", {
    headers: {
      Authorization: "Bearer " + document.cookie.replace("token=", ""),
    },
    method: "GET",
  });
  result = await response.json();
  if (!result.ok) {
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
  let response = await fetch("http://plony.hopto.org:70/authorize/login", {
    headers: {
      Authorization: "Bearer " + document.cookie.replace("token=", ""),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(dataToSend),
  });
  result = await response.json();
}