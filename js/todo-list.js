document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input')
    const addButton = document.getElementById('add-button')
    const todoList = document.getElementById('todo-list')

    addButton.addEventListener('click, add');
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
        }
        add()
    })

    function add() {
        const inputValue = input.ariaValueMax.trim()

        if (inputValue !== '') {
            //alert(inputValue)
            const li = document.createElement('li')
            li.textContent = inputValue;

            const deleteButton = document.createElement('button')
            deleteButton.textContent = "Deletar"
            deleteButton.className = "delete"
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li)
            })

            li.appendChild(deleteButton)
            todoList.appendChild(li);
            todoInput.Value = '';
            todoInput.focus();
        }
    }
})