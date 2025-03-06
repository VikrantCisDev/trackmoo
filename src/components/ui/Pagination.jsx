import Pagination from 'react-bootstrap/Pagination';
import React from 'react'

function CustomPagination() {
  return (
    <Pagination className='custom-pagination'>
      {/* <Pagination.First /> */}
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item>{6}</Pagination.Item>
      <Pagination.Item>{7}</Pagination.Item>
      <Pagination.Item>{8}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{50}</Pagination.Item>
      <Pagination.Next />
      {/* <Pagination.Last /> */}
    </Pagination>
  );
}

export default CustomPagination;