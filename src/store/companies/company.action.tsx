import { createAction } from '@reduxjs/toolkit'
import { COMPANIES_ACTION_TYPES} from "./company.types";
import {CompaniesMap} from "../../types";

export const setCompaniesMap = createAction<CompaniesMap>(
    COMPANIES_ACTION_TYPES.SET_COMPANIES
);