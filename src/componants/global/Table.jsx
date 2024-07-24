import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography} from '@mui/material';

function Table({ columns, rows, heading, SubmitButton }) {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Typography variant='h3' sx={{ mb: 3, textAlign: 'center' }}>{heading}</Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pb: 2 }}>
                {SubmitButton}
            </Box>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Box>
    );
}
export default Table;