


export const backdrop = document.querySelector('#backdrop');
const modal = document.querySelector('#modal');

export const showModal = () => {
    backdrop.classList.add('backdrops');
    modal.classList.remove('hide');
    modal.classList.add('show');
};

export const hideModal = () => {
    backdrop.classList.remove('backdrops')
    modal.classList.add('hide');
    modal.classList.remove('show');
    const editModal = document.querySelector('#edit-modal');
    if (editModal) {
        editModal.remove();
    };
};