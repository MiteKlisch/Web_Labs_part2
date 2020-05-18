
// eslint-disable-next-line no-undef
const doingProjectModel = new DoingProject();
function initAddForm () {
  const form = window.document.querySelector('#doingProject-add-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const doingProjectData = {};
    formData.forEach((value, key) => {
      doingProjectData[key] = value;
    });

    doingProjectModel.Create(doingProjectData);

    e.target.reset();
  });
}

function initList () {
  window.jQuery('#doingProject-list').DataTable({
    data: doingProjectModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'doingProjectName' },
      { title: 'Perfomer', data: 'perfomerProj' },
      { title: 'Start Date', data: 'startDate' },
      { title: 'End Date', data: 'endDate' }
    ]
  });
}

function initListEvents () {
  document.addEventListener('doingProjectsListDataChanged', function (e) {
    const dataTable = window.jQuery('#doingProject-list').DataTable();

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
