var iframeArea = document.createElement("div");
document.body.appendChild("iframeArea");
iframeArea.style.position = "fixed";
iframeArea.style.right = "20px";
iframeArea.style.bottom = "20px";
var iframeBtn = document.createElement("button");
iframeBtn.innerHTML =
  '<img src="https://cdn-icons-png.flaticon.com/128/2076/2076218.png" />';
openIframe.onclick = function myFunction() {
  if (iframe.style.display === "block") {
    iframeBtn.innerHTML =
      '<img src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png" />';
    iframe.style.display = "none";
  } else {
    iframe.style.display = "block";
  }
};
var iframe = document.createElement("iframe");
iframe.src = "https://shaghayeghnaimi.github.io/Chat-page/";
iframe.style.width = "350px";
iframe.style.height = "450px";
iframe.style.position = "fixed";
iframe.style.bottom = "20px";
iframe.style.right = "20px";
iframe.style.zIndex = "9999";
iframe.style.border = "1px solid #ccc";
iframe.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)";
iframeArea.appendChild(iframe);
iframeArea.appendChild(openIframe);
