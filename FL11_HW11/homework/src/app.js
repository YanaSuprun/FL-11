let rootNode = document.getElementById('root');
const newTaskBtn = document.getElementById('new-task-btn');
const tasksList = document.getElementById('task-list');
let newTaskInput = document.getElementById('new-task');


function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function checkItemQuantity(list) {
    const maxLength = 9;
    if(list.children.length > maxLength) {
        let message = createElement('p', 'message');
        message.innerHTML = 'Maximum item per list are created!';
        list.insertBefore(message, list.children[0]);
        newTaskInput.disabled = 'disabled';
        newTaskBtn.removeEventListener('click', addNewTask);
    }
}

newTaskBtn.addEventListener('click', addNewTask);

function addNewTask() {
    checkItemQuantity(tasksList);

    let newTask = document.getElementById('new-task').value;

    // create li
    const taskItemContainer = createElement('li', 'task-item-container');
    tasksList.appendChild(taskItemContainer);
    taskItemContainer.setAttribute('draggable', 'true');

    // create div task-item
    const taskItem = createElement('div', 'task-item');
    taskItemContainer.appendChild(taskItem);

    // create check btn
    const checkBtnElem = createElement('button', 'checkbox');
    taskItem.appendChild(checkBtnElem);

    // create task text
    const TaskElem = createElement('span', 'task');
    taskItem.appendChild(TaskElem);
    TaskElem.innerHTML = newTask;

    // create edit btn
    const editBtnElem = createElement('button', 'edit');
    taskItem.appendChild(editBtnElem);
    editBtnElem.classList.add('remove-btn-style');
    const iconEditBtn = createElement('i', 'material-icons');
    iconEditBtn.innerHTML = 'create';
    editBtnElem.appendChild(iconEditBtn);

    // create remove btn
    const removeBtnElem = createElement('button', 'remove');
    taskItem.appendChild(removeBtnElem);
    removeBtnElem.classList.add('remove-btn-style');
    const iconRemoveBtn = createElement('i', 'material-icons');
    iconRemoveBtn.innerHTML = 'delete';
    removeBtnElem.appendChild(iconRemoveBtn);


    // Function edit li
    editBtnElem.addEventListener('click', editTask)

    function editTask() {
        taskItem.style.display = 'none';

        const taskItemEditContainer = createElement('div', 'task-item-edit');
        taskItemContainer.appendChild(taskItemEditContainer);

        // create input
        const inputItemEdit = createElement('input', 'edit-task-input');
        taskItemEditContainer.appendChild(inputItemEdit);

        // create button
        const saveBtnElem = createElement('button', 'save-btn');
        saveBtnElem.classList.add('remove-btn-style');
        taskItemEditContainer.appendChild(saveBtnElem);

        // create icon
        const markIconElem = createElement('i', 'material-icons');
        markIconElem.innerHTML = 'save';
        saveBtnElem.appendChild(markIconElem);


        // updated task
        saveBtnElem.addEventListener('click', saveUpdatedTask);

        function saveUpdatedTask() {
            TaskElem.innerHTML = inputItemEdit.value;
            taskItem.style.display = 'block';
            taskItemEditContainer.style.display = 'none';
        }
    }

    // check task
    checkBtnElem.addEventListener('click', markDoneTask);
    
    function markDoneTask() {
        const markIconElem = createElement('i', 'material-icons');
        markIconElem.innerHTML = 'done';
        checkBtnElem.appendChild(markIconElem);

        checkBtnElem.removeEventListener('click', markDoneTask);
    }

    // delete task
    removeBtnElem.addEventListener('click', removeTask);

    function removeTask() {
        taskItemContainer.remove();
    }

    // dragable
    let dragElement = null;

    function handleDragStart(e) {
        dragElement = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.outerHTML);

        this.classList.add('dragElem');
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        this.classList.add('over');
        e.dataTransfer.dropEffect = 'move';

    }

    function handleDragLeave() {
        this.classList.remove('over');
        this.classList.remove('dragElem');
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        if (dragElement !== this) {
            this.parentNode.removeChild(dragElement);
            let dropHTML = e.dataTransfer.getData('text/html');
            this.insertAdjacentHTML('beforebegin',dropHTML);
            let dropElem = this.previousSibling;

            addDnDHandlers(dropElem);
        }

        this.classList.remove('over');
        this.classList.remove('dragElem');
    }

    function handleDragEnd() {
        this.classList.remove('over');
        this.classList.remove('dragElem');
    }

    function addDnDHandlers(elem) {
        elem.addEventListener('dragstart', handleDragStart, false);
        elem.addEventListener('dragover', handleDragOver, false);
        elem.addEventListener('dragleave', handleDragLeave, false);
        elem.addEventListener('drop', handleDrop, false);
        elem.addEventListener('dragend', handleDragEnd, false);
    }

    let cols = document.querySelectorAll('.task-item-container');
    console.log(cols);
    [].forEach.call(cols, addDnDHandlers);

}





