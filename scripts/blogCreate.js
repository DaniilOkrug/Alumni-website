/*
/posts -> будет возвращать еще и id в себе
/posts/{id} -> определенный пост
/items -> возвращает список вещей
/items/{id} -> определенная вещь
/authorize -> вернет { ok: true, message: <username> } если ты авторизован
*/
if (!result.ok) {
  document.body.innerHTML = `Войдите перед использованием`;
} else {
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
  let response = await fetch("http://plony.hopto.org:70/posts", {
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
