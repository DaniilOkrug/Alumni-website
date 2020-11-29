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
  const formData = new FormData();
  formData.append("file", blogPreview.files[0]);
  dataToSend.primaryImage = await sendToServerImage(formData);

  const formData2 = new FormData();
  formData.append("file", blogPreview2.files[0]);
  dataToSend.secondaryImage = await sendToServerImage(formData2);
  sendToServer(data);
  alert("Вы вынесли товар в магазин");
  location.reload();
}
