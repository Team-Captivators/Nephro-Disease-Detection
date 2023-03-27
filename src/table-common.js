import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box } from '@mui/material';

export default function Table({ data }) {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'sample_type',
                header: 'Sample Type',
                size: 250,
            },
            {
                accessorKey: 'disease',
                header: 'Disease Name',
                size: 250,
            },
            {
                accessorKey: 'result',
                header: 'Prediction Result',
                size: 50,
                Cell: ({ cell }) => (
                    <Box
                      component="span"
                      sx={(theme) => ({
                        backgroundColor:
                          cell.getValue() === "Positive"
                            ? theme.palette.error.dark
                            : cell.getValue() === "Negative" && cell.getValue() === "Positive"
                            ? theme.palette.warning.dark
                            : theme.palette.success.dark,
                        borderRadius: '0.25rem',
                        color: '#fff',
                        maxWidth: '1ch',
                        p: '0.25rem',
                        fontSize: '1rem',
                      })}
                    >
                      {cell.getValue()?.toLocaleString?.('en-US', {
                        style: 'txt',
                      })}
                    </Box>
                  ),
            },
            {
                accessorKey: 'Confidence_level',
                header: 'Description',
                size: 400,
            },
        ],
        [],
    );

    return <MaterialReactTable columns={columns} data={data} />;
};