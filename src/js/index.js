import showStatistics from './showStatisticTable';
import { notes, categories } from './data';
import showTable from './showTable';
import renewPage from './renewPage';
import listener from './listeners';





document.addEventListener('DOMContentLoaded', () => {
    listener();
    showTable(notes, '#main-table', true);
    showTable(notes, '#archive-table', false);
    showStatistics(categories, notes);
    renewPage();

});
