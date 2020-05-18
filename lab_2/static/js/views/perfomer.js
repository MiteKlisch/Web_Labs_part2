
// eslint-disable-next-line no-undef
const perfomerModel = new Perfomer();
function initAddForm () {
  const form = window.document.querySelector('#perfomer-add-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const perfomerData = {};
    formData.forEach((value, key) => {
      perfomerData[key] = value;
    });

    perfomerModel.Create(perfomerData);

    e.target.reset();
  });
}

function initList () {
  window.jQuery('#perfomer-list').DataTable({
    data: perfomerModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'namePerf' },
      { title: 'Expirience', data: 'expirience' },
      { title: 'Count of workers', data: 'count' }
    ]
  });
}

function initListEvents () {
  document.addEventListener('perfomersListDataChanged', function (e) {
    const dataTable = window.jQuery('#perfomer-list').DataTable();

    dataTable.clear();
    dataTable.rows.add(e.detail);
    dataTable.draw();
  }, false);
}

window.addEventListener('DOMContentLoaded', () => {
  initAddForm();
  initList();
  initListEvents();
});
