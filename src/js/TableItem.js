

export const shop = '<i class="fa-sharp fa-solid fa-cart-shopping category-img"></i>';
export const thought = '<i class="fa-solid fa-user-gear category-img"></i>';
export const idea = '<i class="fa-solid fa-lightbulb category-img"></i>';
export const quote = '<i class="fa-solid fa-quote-right category-img"></i>';

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
                    <td class="content-cell">
                        <ul class="collapsible">
                            <li>
                            <div class="collapsible-header">${this.content.substr(0, 15)}...</div>
                            <div class="collapsible-body"><span>${this.content}</span></div>
                            </li>
                        </ul>
                        
                    </td>
                    <td>
                        <p>${this.dates[0] ? this.dates[0].split('-').join('/') : ''}</p>
                        <p>${this.dates[1] ? this.dates[1].split('-').join('/') : ''}</p>
                        
                    </td>
                    <td class="icons">
                        <i class="fa-solid fa-pen edit " id="${this.id}"></i>
                        <i class="fa-solid fa-box-archive archive" id="${this.id}"></i>
                        <i id="${this.id}" class="fa-sharp fa-solid fa-trash delete" ></i>
                    </td>
                    
                
            `;

        this.parent.append(element)

    }
};

export default TableItem;