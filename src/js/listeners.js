import { showModal, hideModal, backdrop } from './modal';
import TableItem from './TableItem';
import renewPage from './renewPage';
import { notes } from './data';


const addItemButton = document.querySelector('#show-modal');

const listener = () => {
    //materialize initialization
    M.AutoInit();
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems);
    });

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    });
    ///


    addItemButton.addEventListener('click', () => {
        showModal();
    }
    );

    backdrop.addEventListener('click', hideModal);


    document.getElementById('new-note').addEventListener('submit', e => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const datesStart = document.querySelector(`#date-start`).value.split('-').join('/');
        const datesEnd = document.querySelector(`#date-end`).value.split('-').join('/');
        const dates = [datesStart, datesEnd]
        const content = document.querySelector('#textarea').value;
        $('select').formSelect();  //materialize 
        const instance = M.FormSelect.getInstance($('#select-cat'));
        const category = instance.getSelectedValues()[0];
        const id = new Date().getTime();
        const created = new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const newNote = new TableItem(id, name, created, category, content, dates, true);
        notes.unshift(newNote);
        renewPage()
        hideModal();
    });
};


export default listener;