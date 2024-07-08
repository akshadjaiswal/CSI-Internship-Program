import React, { useState } from 'react';
import { productRows } from '../constants/dummyData';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { randomUser } from '../assets/index.js';
import UserImage from '../components/UserImage.jsx';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
const ProductList = () => {
    const [data,setData] = useState(productRows);
    const handleDelete = ()=>{

    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Product Name',
          width: 250,
          editable: true,
          renderCell: (params) => {
            return (
              <div className='flex justify-between gap-4 items-center '>
                <UserImage UserImage={params.row.img} />
                {params.row.name}
              </div>
            )
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 100,
          editable: true,
        },
        {
          field: 'price',
          headerName: 'Price',
          type: 'number',
          width: 100,
          editable: true,
        },
        {
          field: 'actions',
          headerName: 'Actions',
          width: 100,
          renderCell: (params) => {
            return (
              <div className='flex justif-center items-center gap-4'>
                <div className="edit">
                  <Link to={`/product/${params.row.id}`}>
                    <EditOutlinedIcon className='text-green-700 cursor-pointer' />
    
                  </Link>
                </div>
                <div className="delete" onClick={() => {
                  handleDelete(params.row.id)
                }}>
                  <DeleteOutlineOutlinedIcon className='text-red-700 cursor-pointer' />
                </div>
    
    
              </div>
            )
          }
        },
    
      ];
    
  return (
    <div className="productList">
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[9]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  )
}

export default ProductList
