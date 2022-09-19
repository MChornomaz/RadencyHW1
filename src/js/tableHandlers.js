import renewPage from "./renewPage";
import { backdrop } from "./modal";




export function deleteItem(id, arr) {
    const index = arr.findIndex(el => el.id === id);
    arr.splice(index, 1);
    renewPage()
};



export function archiveItem(id, arr) {
    const index = arr.findIndex(el => el.id === id);
    if (arr[index].notArcieved === true) {
        arr[index].notArcieved = false;
    } else {
        arr[index].notArcieved = true;
    }
    renewPage()
};


export function editNote(id, arr) {
    backdrop.classList.add('backdrops')
    const parent = document.querySelector('main');
    const element = document.createElement('div');
    element.classList.add('show');
    element.setAttribute('id', 'edit-modal');
    const index = arr.findIndex(el => +el.id === +id);
    const item = arr[index];

    element.innerHTML = `
            <div class="modal-content">
                <h3>Edit Note</h3>
                <div class="row  ">
                    <form class="col l12 xl12" id="edit-note">
                        <div class="input-field col l12">
                            <input placeholder="Placeholder" id="name-of${item.id}" type="text"  value="${item.name}" maxlength="23">
                                
                        </div>
                        <div class="input-field col l12" id="select-category">
                            <select id="select-changed-category">
                                <option disabled>Choose your category</option>
                                <option ${item.category === "Random Thought" ? 'selected' : ''} value="Random Thought">Random Thought</option>
                                <option ${item.category === "Task" ? 'selected' : ''} value="Task">Task</option>
                                <option ${item.category === "Quote" ? 'selected' : ''} value="Quote">Quote</option>
                                <option ${item.category === "Idea" ? 'selected' : ''} value="Idea">Idea</option>
                            </select>
                        </div>
                        <div class="input-field col l12 ">
                            <input type="date" id="date-of${item.id}-start" value="${item.dates[0] ? item.dates[0].split('/').join('-') : ''}">
                            <input type="date" id="date-of${item.id}-end" value="${item.dates[1] ? item.dates[1].split('/').join('-') : ''}">
                            
                        </div>
                        <div class="input-field col l12">
                            <textarea id="textarea-of${item.id}" class="materialize-textarea" maxlength="200" >${item.content}</textarea>
                            
                        </div>
                        <button type="submit" class="waves-effect waves-light btn-large" id="item-change-btn">Edit Note</button>
                    </form>
                </div>
            </div>
        `;

    parent.append(element);
    //select initialization
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    //
    const editNoteForm = document.querySelector('#edit-note');
    editNoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector(`#name-of${item.id}`).value;
        const datesStart = document.querySelector(`#date-of${item.id}-start`).value.split('-').join('/');
        const datesEnd = document.querySelector(`#date-of${item.id}-end`).value.split('-').join('/');
        const content = document.querySelector(`#textarea-of${item.id}`).value;
        $('select').formSelect();
        const instance = M.FormSelect.getInstance($('#select-changed-category'));
        const category = instance.getSelectedValues()[0];
        item.name = name;
        item.dates = [datesStart, datesEnd]
        item.content = content;
        item.category = category;

        renewPage()
        element.remove()
        backdrop.classList.remove('backdrops')
    })

};