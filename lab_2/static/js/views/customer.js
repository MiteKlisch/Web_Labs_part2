// const Cusotmer = require('../models/customer');

// eslint-disable-next-line no-undef
const customerModel = new Customer();
function initAddForm () {
  const form = window.document.querySelector('#customer-add-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const customerData = {};
    formData.forEach((value, key) => {
      customerData[key] = value;
    });

    customerModel.Create(customerData);

    e.target.reset();
  });
}

function initList () {
  window.jQuery('#customer-list').DataTable({
    data: customerModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'name' },
      { title: 'Budget', data: 'budget' }
    ]
  });
}

function initListEvents () {
  document.addEventListener('customersListDataChanged', function (e) {
    const dataTable = window.jQuery('#customer-list').DataTable();

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