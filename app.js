const input1=document.getElementById('input')
const button1=document.getElementById('button')
const ulist=document.getElementById('todoList')
button1.addEventListener('click', function add() {
    const userInput = input1.value;
    if (userInput.trim() === '') {
        console.log('Please enter a task!');
        return;
    }
    const listItem = document.createElement('li');
    listItem.textContent = userInput;
    ulist.prepend(listItem);
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    listItem.append(checkbox)
    const remove=document.createElement('button');
    remove.textContent='Remove'
    listItem.appendChild(remove)
    remove.addEventListener('click', function remove(){
        listItem.remove()
    })
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    });
    input1.value = '';
});
