import { RootState } from '../root-reducer';

export const selectCompaniesMap = (state: RootState) => state.companies.companies;
