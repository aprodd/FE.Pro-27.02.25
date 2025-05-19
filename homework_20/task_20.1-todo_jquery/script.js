let myModal = new bootstrap.Modal(document.getElementById("modal"), {});
const buttonAdd = $('#btn_add');
const btnClose = $('button');
const input = $('input');
const list = $('ul');

function createEl() {
    const li = $('<li>');
    let value = $(input).val();
    $(li).text(value);
    $(list).append(li);
    $(input).val('');


    $(li).on('click', function(e) {
        document.querySelector('.modal-body').innerText = `${e.target.textContent}`;
        myModal.show();
    });

    $(btnClose).on('click', function() {
        myModal.hide();
    });
}

$(buttonAdd).on('click', (e)=> {
    $(input).val().length == 0 ? e.stopPropagation() : createEl();
})



