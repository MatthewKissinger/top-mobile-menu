let mobileMenu = (function () {
  //cache dom
  let contentContainer = document.querySelector('#content');
  let menuWrapper = document.querySelector('.menu-wrapper');
  let tabIcons = document.querySelectorAll('.tab-icon');

  // bind events
  menuWrapper.addEventListener('click', selectTab);

  // render function
  // sets inital highlight on first tab
  highlightTab(tabIcons[0]);
  // sets inital content to first tab
  setContent('Search');

  // methods
  function highlightTab(menuTab) {
    menuTab.style.color = 'rgb(80, 249,255)';
  }

  function setContent(tabName) {
    contentContainer.innerHTML = '';
    contentContainer.innerHTML = `<div class="content-wrapper">${tabName} content</div>`;
  }

  function selectTab(e) {
    let target = e.target;
    let icon = target.closest('li').children[0];
    let contentName = target.closest('li').children[1].innerText;
    tabIcons.forEach((tab) => (tab.style.color = 'white'));
    highlightTab(icon);
    setContent(contentName);
  }
})();
