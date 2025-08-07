const buttons = document.querySelectorAll('.tab-button');

buttons.forEach(button => {

    button.addEventListener('click', () => {

        // check for buttons with active class and remove the class
        buttons.forEach(button => {
            if(button.classList.contains('active')) {
                button.classList.remove('active');
            }
        });

        // check for contents that are shown and hide it
        document.querySelectorAll('.tab-content').forEach(content => {
            if(!content.classList.contains('hidden')) {
                content.classList.add('hidden');
            }
        });
        
        // check which button was pressed and shows the content and highlight the button
        if(button.classList.contains('js-first-button')) {
            document.querySelector('.js-first-tab').classList.remove('hidden');
            document.querySelector('.js-first-button').classList.add('active');
        } else if(button.classList.contains('js-second-button')) {
            document.querySelector('.js-second-tab').classList.remove('hidden')
            document.querySelector('.js-second-button').classList.add('active');
        } else if(button.classList.contains('js-third-button')) {
            document.querySelector('.js-third-tab').classList.remove('hidden')
            document.querySelector('.js-third-button').classList.add('active');
        } else if(button.classList.contains('js-fourth-button')) {
            document.querySelector('.js-fourth-tab').classList.remove('hidden')
            document.querySelector('.js-fourth-button').classList.add('active');
        }
    });
});
    
// make the page load with the first buttron pressed
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    document.querySelector('.js-first-tab').classList.remove('hidden');
    document.querySelector('.js-first-button').classList.add('active');
});
