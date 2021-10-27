const tabs = document.querySelectorAll('.tablink');
const contentSections = document.querySelectorAll('.tab-content');

console.log({ tabs });

tabs.forEach((tab) => {
    tab.addEventListener('click', function(e) {
        hideTabContent();

        const selectedTabContent = document.getElementById(tab.dataset.tabTarget);

        this.classList.add('active-tab');
        showTabContent(selectedTabContent);
    })
})

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
