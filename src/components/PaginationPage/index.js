import {useState} from 'react'
import ReactPaginate from 'react-paginate'

import ProjectItem from '../ProjectItem'
import './index.css'

const PaginationPage = props => {
  const {itemsPerPage, projects} = props

  const [itemOffset, setItemOffset] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)

  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = projects.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(projects.length / itemsPerPage)

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % projects.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    )
    setItemOffset(newOffset)
    setPageNumber(event.selected + 1)
  }

  return (
    <>
      <ul className="list-container">
        {currentItems.map(eachItem => (
          <ProjectItem eachProject={eachItem} key={eachItem.projectId} />
        ))}
      </ul>
      <div className="pagination-container">
        <p className="page-number-item">
          {pageNumber} of {pageCount}
        </p>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={0}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          previousClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </>
  )
}

export default PaginationPage
