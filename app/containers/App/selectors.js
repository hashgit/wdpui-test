import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const selectApp = (state) => state.get('app');

// demonstration only
const makeSelectLoading = () => createSelector(
  selectApp,
  (app) => app.get('loading')
);

const makeSelectEmployees = () => createSelector(
  selectApp,
  (app) => {
    const employees = app.get('employees');
    if (employees) {
      return employees.toJS();
    }

    return null;
  }
);

const makeSelectCompanyInfo = () => createSelector(
  selectApp,
  (app) => {
    const employees = app.get('companyInfo');
    if (employees) {
      return employees.toJS();
    }

    return null;
  }
);

export {
  makeSelectLocation,
  makeSelectLoading,
  makeSelectEmployees,
  makeSelectCompanyInfo,
};
