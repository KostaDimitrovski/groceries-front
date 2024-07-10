
import React, { useEffect, useState } from 'react';
import ApiCallService  from '../service/ApiCallService';

const Companies: React.FC = () => {
    const [companies, setCompanies] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCompanies = async () => {
            try {
                const response = await ApiCallService.deleteUser(1);
                setCompanies(response.data);
                console.log(response.data)
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch companies');
                setLoading(false);
            }
        };

        getCompanies();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Companies List</h1>
            <ul>
                <h2>companies.username</h2>

            </ul>
        </div>
    );
};

export default Companies;
