import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setPageNumber } from '../../redux/actions/index'
import './styles/paginated.css'


export default function Paginated() {

  const dispatch = useDispatch();

  const defaultRecipesXPage = 12;

  const recipesToShow = useSelector((state) => state.recipesToShow);
  const currentPage = useSelector((state) => state.currentPage)

  const [recipesXPage, setRecipesXPage] = useState(defaultRecipesXPage);

  const totalPages = Math.ceil(recipesToShow.length / recipesXPage);

  const limit = currentPage * recipesXPage;
  const offset = limit - recipesXPage;

  useEffect(() => {
    const payload = {
      currentPage: currentPage,
      offset: offset,
      limit: limit
    }
    dispatch(setCurrentPage(payload))
  },[dispatch, offset, limit, currentPage])

  const defaultButtonsPerPage = 6;
  const halfPages = Math.ceil(defaultButtonsPerPage / 2);
  const maxButtons = (() => {
    if (totalPages <= defaultButtonsPerPage) {
      return totalPages;
    } else if (
      currentPage + halfPages <= totalPages &&
      currentPage >= halfPages
    ) {
      return currentPage + halfPages;
    } else if (currentPage < halfPages) {
      return defaultButtonsPerPage;
    } else {
      return totalPages;
    }
  })();

  const initButton = (() => {
    if (totalPages <= defaultButtonsPerPage) {
      return 1;
    } else if (
      currentPage + halfPages <= totalPages &&
      currentPage >= halfPages
    ) {
      return currentPage - halfPages + 1;
    } else if (currentPage < halfPages) {
      return 1;
    } else {
      return totalPages - defaultButtonsPerPage + 1;
    }
  })();
  
  const pages = [];
  for (let i = initButton; i <= maxButtons; i++) {
    pages.push(i);
  }

  const pagination = (pageNumber) => {
    const payload = {
      currentPage: pageNumber,
      offset: 0,
      limit: recipesXPage
    }
    dispatch(setCurrentPage(payload));
  };

  const nextPage = () => {
    if(currentPage === totalPages) return
    if (currentPage < recipesToShow.length) {
      dispatch(setPageNumber(currentPage + 1));
    }
  };
  const prevPage = () => {
    if(currentPage === 1) return
    if (currentPage !== 1) {
      dispatch(setPageNumber(currentPage - 1));
    }
  };

  function handlePageSelect(e) {
    e.preventDefault();
    dispatch(setPageNumber(1))
    setRecipesXPage(e.target.value);
  }

  return (
    <div className="general_container">
      <section className="label_pagOf_container">
        <div className="label_current_page">
          Pag: <div className="current_page_input">{currentPage}</div>
        </div>
        <div className="label_current_page">
          Of: <div className="current_page_input">{totalPages}</div>
        </div>
      </section>
      <ul className="paginated_container">
        <li className="btn_paginated btn_pn_container" onClick={() => prevPage()}>
          <button className="btn_primary btn_prev_next">Prev</button>
        </li>
        {pages ? (
          pages.map((page) => (
            <li className="btn_paginated btn_main_paginated" key={page}>
              <button
                className={
                  currentPage === page ? "btn_primary_active" : "btn_primary"
                }
                onClick={() => pagination(page)}
                value={page}
              >
                {page}
              </button>
            </li>
          ))
        ) : (
          <li></li>
        )}
        <li className="btn_paginated btn_pn_container" onClick={() => nextPage()}>
          <button className="btn_primary btn_prev_next">Next</button>
        </li>
      </ul>
      <section className="toShow_selector">
        <label className="select_page_label">
          Pages to show:{" "}
          <select
            className="select_page"
            value={recipesXPage}
            onChange={(e) => handlePageSelect(e)}
          >
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
          </select>
        </label>
      </section>
    </div>
  );
}
