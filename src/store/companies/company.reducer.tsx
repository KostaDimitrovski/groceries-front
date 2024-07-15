import { COMPANIES_ACTION_TYPES } from "./company.types";
import {Company} from "../../types";

interface CompaniesState {
    companies: Company[];
}


export const COMPANIES_INITIAL_STATE: CompaniesState = {
    companies: []
}

interface SetCompaniesMapAction {
    type: typeof COMPANIES_ACTION_TYPES.SET_COMPANIES;
    payload: Company[];
}

type CompaniesAction = SetCompaniesMapAction;


export const companiesReducer = (state: CompaniesState = COMPANIES_INITIAL_STATE, action: CompaniesAction): CompaniesState => {
    const { type, payload } = action;
    switch (type) {
        case COMPANIES_ACTION_TYPES.SET_COMPANIES:
            return { ...state, companies: payload };
        default:
            return state;
    }
}
