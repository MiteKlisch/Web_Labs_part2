// eslint-disable-next-line no-undef
const projectModel = new Project();


function initAddFormProject () {
  const form = window.document.querySelector('#project-add-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const projectData = {};
    formData.forEach((value, key) => {
      projectData[key] = value;
    });

    projectModel.Create(projectData);

    e.target.reset();
  });
}

function initListProject () {
  window.jQuery('#project-list').DataTable({
    data: projectModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Project', data: 'projectName' },
      { title: 'Owner', data: 'owner' },
      { title: 'Short Description', data: 'description' }
    ]
  });
}

function initListEventsProject () {
  document.addEventListener('projectsListDataChanged', function (e) {
    const dataTable = window.jQuery('#project-list').DataTable();

    dataTable.clear();
    dataTable.rows.add(e.detail);
    dataTable.draw();
  }, false);
}


window.addEventListener('DOMContentLoaded', () => {
  initAddFormProject();
  initListProject();
  initListEventsProject();
});