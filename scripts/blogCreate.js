const blogHeader = document.getElementById("blogHeader");
const blogBody = document.getElementById("blogBody");
const blogPreview = document.getElementById("blogPreview");
const buttonPreview = document.getElementById("upload");
const buttonFinish = document.getElementById("finish");
buttonFinish.addEventListener("click", finishCreate);


let type;
if (document.title === "Блог") {
  type="BLOG"
}
if (document.title === "Новости") {
  type="NEWS"
}
if (document.title === "Статьи") {
  type="ARTICLE"
}
function finishCreate() {
  const data = {
    title: blogHeader.value,
    body: blogBody.value,
    type: type,
  };
  const formData = new FormData();
  formData.append("file", blogPreview.files[0]);
  data.previewImage = sendToServerImage(formData);

  sendToServer(data, "http://plony.hopto.org:70/posts");
  alert("Вы успешно создали блог");
  location.reload();
}
