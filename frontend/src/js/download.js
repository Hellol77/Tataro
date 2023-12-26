$(document).ready(function () {
  $("#sharePageButtonImg").on("click", function () {
    html2canvas($("#copy_div")[0]).then(function (canvas) {
      let img = document.createElement("a");
      img.download = "tataro.png";
      img.href = canvas.toDataURL();
      document.body.appendChild(img);
      img.click();
    });
  });
});
