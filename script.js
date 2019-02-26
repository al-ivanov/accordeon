document.addEventListener('DOMContentLoaded', () => {
    let listLinks = document.querySelectorAll('.accordeon__item a'),
        listItems = document.querySelectorAll('.accordeon__item');

    for(let i = 0; i < listLinks.length; i++) {
        listLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            let thisListItems = this.parentNode.parentNode;
            if(!(thisListItems.classList.contains('active'))) {
                for (let i = 0; i < listItems.length; i++) {
                    listItems[i].classList.remove('active');
                }
            }
            thisListItems.classList.toggle('active');
        });
    }
});
