const { hash } = window.location;

 const message = (atob(hash.replace('#', '')))

 document.querySelector('.header-text').textContent = 'Send Your Secret Message';
 
 if(message){
     document.querySelector('#message-form').classList.add('hide');
     document.querySelector('#message-show').classList.remove('hide');
    
     document.querySelector('h1').innerHTML = message;
     document.querySelector('.header-text').textContent = 'Here is your Secret Message';
 }

document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault();

    
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');

        const encrypted = btoa(input.value)

    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select()
});