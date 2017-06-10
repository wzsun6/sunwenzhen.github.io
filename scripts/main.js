var myButton = document.querySelector('button');
var myHead = document.querySelector('h1');
function setUserName(){
	var name = prompt('请输入你的姓名:');
	localStorage.setItem('name',name);
	myHead.innerHTML = '你好啊，'+ name;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHead.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function(){
	setUserName();
}