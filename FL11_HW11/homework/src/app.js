let rootNode = document.getElementById('root');
const todo = document.getElementById('todo-list')
const newTaskBtn = document.getElementById('new-task-btn');
const tasksList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

newTaskBtn.addEventListener('click', addNewTask);

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
        todo.insertBefore(message, todo.children[2]);
        newTaskInput.disabled = 'disabled';
        newTaskBtn.removeEventListener('click', addNewTask);
    }
}

function addNewTask() {
    if(newTaskInput.value) {
        createNewTask();
    }
}

function createNewTask() {
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
        console.log(this);
        this.classList.remove('over');
        this.classList.remove('dragElem');
        bindTaskEvents(this);
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

    bindTaskEvents(taskItemContainer);

    return taskItemContainer;
}

function bindTaskEvents(item) {
    let checkBtn = item.querySelector('.checkbox');
    let editBtn = item.querySelector('.edit');
    let removeBtn = item.querySelector('.remove');

    checkBtn.addEventListener('click', markDoneTask);
    editBtn.addEventListener('click', editTask);
    removeBtn.addEventListener('click', removeTask);
}

function markDoneTask() {
    console.log(this);
    const markIconElem = createElement('i', 'material-icons');
    markIconElem.innerHTML = 'done';
    this.appendChild(markIconElem);
    this.removeEventListener('click', markDoneTask);
}

function editTask() {
    console.log(this);
    this.parentNode.style.display = 'none';
    const itemLi = this.parentNode.parentNode;

    const taskItemEditContainer = createElement('div', 'task-item-edit');
    itemLi.appendChild(taskItemEditContainer);

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
        console.log(this);
        itemLi.children[0].style.display = 'flex';
        itemLi.children[0].children[1].innerHTML = this.parentNode.children[0].value;
        taskItemEditContainer.style.display = 'none';
    }
}

function removeTask () {
    console.log(this);
    let taskItem = this.parentNode;    
    let li = taskItem.parentNode;
    let ul = li.parentNode;    
    ul.removeChild(li);
}
