import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/PageBtnContainer.js";
import { changePage } from "../features/allJobs/allJobsSlice.js";

const PageBtnContainer = () => {
  const { page, numOfPages } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch()

  const nextPage = () => {
    let newPage = page + 1
    if(newPage > numOfPages) newPage = 1
    dispatch(changePage(newPage))
  }

  const prevPage = () => {
    let newPage = page - 1
    if(newPage < 1) newPage = numOfPages
    dispatch(changePage(newPage));
  }

  const firstPage = () => {
    dispatch(changePage(1))
  }

  const lastPage = () => {
    dispatch(changePage(numOfPages));
  }
  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={firstPage}>
        <HiChevronDoubleLeft />
        First
      </button>
      <button type="button" className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <button type="button" className="page-btn">
        {page}
      </button>
      <button type="button" className="next-btn" onClick={nextPage}>
        Next
        <HiChevronDoubleRight />
      </button>
      <button type="button" className="next-btn" onClick={lastPage}>
        Last
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
