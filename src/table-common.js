import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

export default function Table({ data }) {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'sample_type',
                header: 'Sample Type',
            },
            {
                accessorKey: 'disease',
                header: 'Disease Name',
            },
            {
                accessorKey: 'result',
                header: 'Prediction Result',
            },
            {
                accessorKey: 'Confidence_level',
                header: 'Description',
            },
        ],
        [],
    );

    return <MaterialReactTable columns={columns} data={data}  />;
};