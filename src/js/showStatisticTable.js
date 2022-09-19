import { shop, thought, idea, quote } from "./TableItem";


const showStatistics = (categoryArr, dataArr) => {
    const parent = document.querySelector('#statistic-table');
    const element = document.createElement('tbody');

    parent.innerHTML = `
        <thead>
            <tr class="card-panel teal lighten-2">
                <th>Note Category</th>
                <th>Active</th>
                <th>Archived</th>
            </tr>
        </thead>`;
    if (categoryArr.length > 0 && dataArr.length > 0) {
        element.innerHTML = categoryArr.map(el => {
            let icon = '';
            if (el.category === 'Task') { icon = shop };
            if (el.category === 'Random Thought') { icon = thought };
            if (el.category === 'Idea') icon = idea;
            if (el.category === 'Quote') icon = quote;
            const active = dataArr.filter(item => item.category === el.category && item.notArcieved === true).length;
            const archived = dataArr.filter(item => item.category === el.category && item.notArcieved === false).length;
            if (active > 0 || archived > 0) {
                return `<tr>
                <td class="category-sell">${icon}
                    <span>${el.category}</span>
                </td>
                <td>${active}</td>
                <td>${archived}</td>
            </tr>
            `
            }
        }).join('');
    } else {
        element.innerHTML = '<h4>Notes Not Found!</h4>'
    }
    parent.append(element)

};

export default showStatistics;