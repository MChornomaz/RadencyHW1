import TableItem from "./TableItem";


const showTable = (arr, parentSelector, archive) => {
    parent = document.querySelector(parentSelector);
    parent.innerHTML = '';
    arr.forEach(({ id, name, created, category, content, dates, notArcieved }) => {
        if (notArcieved === archive) {
            new TableItem(id, name, created, category, content, dates, notArcieved, parentSelector).render();
        }
    });
    if (arr.length === 0 || arr.filter(el => el.notArcieved === archive).length === 0) {

        const element = document.createElement('tr');
        parent.classList.add('center')
        element.innerHTML = '<h4>Notes Not Found!</h4>'
        parent.append(element)

    };
};


export default showTable;