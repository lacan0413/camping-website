//改自:https://www.w3schools.com/howto/howto_js_tabs.asp
function openTab(event, tabName) {

  let i, tabContent, tabLink;

  tabContent = document.getElementsByClassName('tabContent');

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  tabLink = document.getElementsByClassName('tabLink');

  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(' active', '');
  }

  document.getElementById(tabName).style.display = 'block';

  event.currentTarget.className += ' active';
}



document.getElementById('defaultOpen').click();



/////////////////////登入按鈕/////////////////////
function logIn() {
  setTimeout(() => {
    setTimeout(() => {
      alert('您已登入，點選確認後進入導覽頁面');
    }, 0)
    document.location.href = "./nav-page.html";
  }, 0);
}



/////////////////////註冊按鈕/////////////////////
function signUp() {
  setTimeout(() => {
    setTimeout(() => {
      alert('註冊成功，點選確認後進入導覽頁面');
    }, 0)
    document.location.href = "./nav-page.html";
  }, 0);
}
