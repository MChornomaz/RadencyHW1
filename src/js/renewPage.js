import { notes, categories } from "./data";
import showTable from "./showTable";
import showStatistics from "./showStatisticTable";
import { deleteItem, editNote, archiveItem } from "./tableHandlers";


const renewPage = () => {
    showTable(notes, '#main-table', true);
    showTable(notes, '#archive-table', false);
    showStatistics(categories, notes);

    const arciveIcon = document.querySelectorAll('.archive');
    arciveIcon.forEach(el => el.addEventListener('click', (event) => {
        const id = +event.target.id;
        archiveItem(id, notes)
    }));

    const deleteIcon = document.querySelectorAll('.delete');
    deleteIcon.forEach(el => el.addEventListener('click', (event) => {
        const id = +event.target.id;
        deleteItem(id, notes)
    }));

    const editIcon = document.querySelectorAll('.edit');
    editIcon.forEach(el => el.addEventListener('click', (event) => {
        const id = +event.target.id;
        editNote(id, notes)
    }));

    //Materialize initialization requires JQuery
    $(document).ready(function () {
        $('.collapsible').collapsible();
    });
};

export default renewPage;