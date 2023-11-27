import React from "react";
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({
                        page,
                        totalCountries,
                        onPageChange
                    }) => {

    return (
        <Pagination
            count={Math.ceil(totalCountries / page)}
            variant="outlined"
            shape="rounded"
            onChange={(event, value) => onPageChange(value)}
        />
    )
}

export default CustomPagination