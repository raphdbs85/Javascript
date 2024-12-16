const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('tab-active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tab.classList.add('tab-active');

        const contentClass = tab.classList[1].replace('tab-', 'content-');
        const correspondingContent = document.querySelector(`.${contentClass}`);
        if (correspondingContent) {
            correspondingContent.classList.add('active');
        }
    });
});
