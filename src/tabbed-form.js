const tabs = document.querySelectorAll('.tab');
const contentSections = document.querySelectorAll('.tab-content');
const directionalLinks = document.querySelectorAll('.directional-link');

tabs.forEach((tab) => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();

        hideTabContent();

        const href = e.target.hash || e.target.children[0].hash; // OR condition allows for click in padding area
        if (href) {
            const id = href.slice(1); // remove hash # symbol
            const selectedTabContent = document.getElementById(id);

            this.classList.add('active-tab');
            showTabContent(selectedTabContent);
        }
    })
})

directionalLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    hideTabContent();

    const href = e.target.hash;

    const selectedTab = Array.from(tabs).find((tab) => {
      const link = tab.querySelector('.tablink');
      return link.hash === href;
    });
    selectedTab.classList.add('active-tab');

    const id = href.slice(1); // remove hash # symbol
    const selectedTabContent = document.getElementById(id);
    showTabContent(selectedTabContent);
  });
});

// hide all but the first tab on load
hideTabContent();
tabs[0].classList.add('active-tab');
showTabContent(contentSections[0]);

function hideTabContent() {
    tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
    });
    contentSections.forEach((section) => {
    section.classList.replace('active-tab', 'inactive-tab');
    section.classList.add('inactive-tab');
  });
}

function showTabContent(currentContent) {
    currentContent.classList.replace('inactive-tab', 'active-tab');
}
