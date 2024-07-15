import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/root-reducer";

const Companies = () => {

    const companiesMap = useSelector((state: RootState) => state.companies.companies);
    console.log(companiesMap+"asd");
    return (
        <div>
            <h2>HomePage</h2>

            <div>
                {Object.keys(companiesMap).map(companyId => (
                    <div key={companyId}>
                       <h2>{companyId}</h2>
                    </div>
                ))}
            </div>

        </div>
    );


};

export default Companies;