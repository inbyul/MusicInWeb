var link = prompt("웹 주소 입력");
if (link.startsWith("http://") || link.startsWith("https://")) {
  alert("complete");

} else {
  alert("웹주소가 잘못되었습니다!");
}