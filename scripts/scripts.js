async function sendToServer(dataToSend, url) {
  let response = await fetch(url, {
    headers: {
      Authorization: "Bearer " + document.cookie.replace("token=", ""),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(dataToSend),
  });
  let result = await response.json();
  console.log(result);
  return result;
}
async function sendToServerImage(dataToSend) {
  let response = await fetch("http://plony.hopto.org:70/images", {
    method: "POST",
    body: dataToSend,
    headers: {
      Authorization: "Bearer " + document.cookie.replace("token=", ""),
      Accept: "application/json",
    },
  });
  return await response.text();
}
