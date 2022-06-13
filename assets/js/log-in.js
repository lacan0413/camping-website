/////////////////////切換tab的function(code來源:https://www.w3schools.com/howto/howto_js_tabs.asp)/////////////////////
function openTab(event, tabName) {
  // Declare all variables (using let)
  let i, tabContent, tabLink;

  // Get all elements with class="tabContent" and hide them
  tabContent = document.getElementsByClassName('tabContent');
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  // Get all elements with class="tabLink" and remove the class "active"
  tabLink = document.getElementsByClassName('tabLink');
  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.className += ' active';
}






// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

/////////////////////登入按鈕的alert box/////////////////////
function logIn() {
  alert('您已登入，點選確認後進入導覽頁面');
}

/////////////////////註冊按鈕的alert box/////////////////////
function signUp() {
  alert('註冊成功，點選確認後進入導覽頁面');
}
