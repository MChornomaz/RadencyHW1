

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
});

const notes = [
    { id: 1, name: 'Shopping list', created: 'April 20, 2021', category: 'Task', content: 'Tomatoes, bread', dates: '3/5/2021', notArcieved: false },
    { id: 2, name: 'The theory of evolution', created: 'April 27, 2021', category: 'Random Thought', content: 'The evolution ...', dates: ' ', notArcieved: true },
    { id: 3, name: 'New Feature', created: 'May 05, 2021', category: 'Idea', content: 'Implement new ...', dates: '23/7/2021', notArcieved: true },
    { id: 4, name: 'William Gaddis', created: 'May 07, 2021', category: 'Quote', content: 'Power doesn\'t come...', dates: ' ', notArcieved: false },
    { id: 5, name: 'Books', created: 'May 15, 2021', category: 'Task', content: ' The Lean Startup', dates: ' ', notArcieved: true, },
    { id: 6, name: 'Shopping list', created: 'May 20, 2021', category: 'Task', content: 'Tomatoes, bread', dates: '13/6/2021', notArcieved: true },
    { id: 7, name: 'The theory of evolution', created: 'May 26, 2021', category: 'Random Thought', content: 'Development of the..', dates: ' ', notArcieved: true },
];

const categories = [
    { category: 'Task' },
    { category: 'Random Thought' },
    { category: 'Idea' },
    { category: 'Quote' },

];

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});






const shop = '<i class="fa-sharp fa-solid fa-cart-shopping category-img"></i>';
const thought = '<i class="fa-solid fa-user-gear category-img"></i>';
const idea = '<i class="fa-solid fa-lightbulb category-img"></i>';
const quote = '<i class="fa-solid fa-quote-right category-img"></i>';

document.addEventListener('DOMContentLoaded', () => {


    class TableItem {
        constructor(id, name, created, category, content, dates, notArcieved, parentSelector) {
            this.id = id;
            this.name = name;
            this.created = created;
            this.category = category;
            this.content = content;
            this.dates = dates;
            this.notArcieved = notArcieved;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('tr');
            let icon = '';
            if (this.category === 'Task') { icon = shop };
            if (this.category === 'Random Thought') { icon = thought };
            if (this.category === 'Idea') icon = idea;
            if (this.category === 'Quote') icon = quote;

            element.innerHTML = `
            
                    
                    <td class="category-sell">${icon}
                        <span>${this.name}</span>
                    </td>
                    <td>
                        <span>${this.created}</span>
                    </td>

                    <td>
                        ${this.category}
                    </td>
                    <td>
                        ${this.content}
                    </td>
                    <td>
                        ${this.dates}
                    </td>
                    <td class="icons">
                        <i class="fa-solid fa-pen"></i>
                        <i class="fa-solid fa-box-archive" id="${this.id}"></i>
                        <i class="fa-sharp fa-solid fa-trash"></i>
                    </td>
                    
                
            `;

            this.parent.append(element)
        }
    };

    const showTable = (arr, parentSelector, archive) => {
        arr.forEach(({ id, name, created, category, content, dates, notArcieved }) => {
            if (notArcieved === archive) {
                new TableItem(id, name, created, category, content, dates, notArcieved, parentSelector).render();
            }
        });
        if (arr.length === 0 || arr.filter(el => el.notArcieved === archive).length === 0) {
            parent = document.querySelector(parentSelector);
            const element = document.createElement('tr');
            parent.classList.add('center')
            element.innerHTML = '<h4>Notes Not Found!</h4>'
            parent.append(element)

        }

    };

    showTable(notes, '#main-table', true);
    showTable(notes, '#archive-table', false);

    const backdrop = document.querySelector('#backdrop');
    const modal = document.querySelector('#modal');

    const showModal = () => {
        backdrop.classList.add('backdrops')
        modal.classList.remove('hide')
        modal.classList.add('show');
    }

    const hideModal = () => {
        backdrop.classList.remove('backdrops')
        modal.classList.add('hide')
        modal.classList.remove('show');
    }

    const addItemButton = document.querySelector('#show-modal');
    const addItemInfoButton = document.querySelector('#hide-modal');

    addItemButton.addEventListener('click', () => {
        showModal()


    }
    );

    addItemInfoButton.addEventListener('click', () => {
        hideModal();
    });

    backdrop.addEventListener('click', hideModal);


    const renderSelectInput = (arr, parentSelector) => {
        const parent = document.querySelector(parentSelector);
        const element = document.createElement('select');
        element.innerHTML = '<option value="" disabled selected>Choose your category</option>' + arr.map(el => `<option value=${el.category}>${el.category}</option>`).join(' ');
        parent.append(element)
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    };



    renderSelectInput(categories, '#select-category');


    const showStatistics = (categoryArr, dataArr) => {
        const parent = document.querySelector('#statistic-table');
        const element = document.createElement('tbody');
        if (categoryArr.length > 0 && dataArr.length > 0) {
            element.innerHTML = categoryArr.map(el => {
                let icon = '';
                if (el.category === 'Task') { icon = shop };
                if (el.category === 'Random Thought') { icon = thought };
                if (el.category === 'Idea') icon = idea;
                if (el.category === 'Quote') icon = quote;
                return `<tr>
                <td class="category-sell">${icon}
                    <span>${el.category}</span>
                </td>
                <td>${dataArr.filter(item => item.category === el.category && item.notArcieved === true).length}</td>
                <td>${dataArr.filter(item => item.category === el.category && item.notArcieved === false).length}</td>
            </tr>
            `

            }).join('');
        } else {
            element.innerHTML = '<h4>Notes Not Found!</h4>'
        }


        parent.append(element)

    };

    showStatistics(categories, notes)















})
