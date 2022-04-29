import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Paginated() {
  const recipesToShow = useSelector((state) => state.recipesToShow);

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesXPage, setRecipesXPage] = useState(10);

  const totalPages = Math.ceil(recipesToShow.length / recipesXPage);

  const pages = [];

  const maxButtons = (() => {
    if (totalPages > 10) {
      if (currentPage + 5 >= totalPages) {
        return totalPages + 1;
      } else {
        if (currentPage < 6) {
          return 11;
        } else {
          return currentPage + 5;
        }
      }
    } else {
      return totalPages;
    }
  })();

  const initButton = (() => {
    if (totalPages > 10) {
      if (currentPage > 6) {
        if (currentPage + 5 < totalPages) {
          return currentPage - 5;
        } else {
          return totalPages - 9;
        }
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  })();

  for (let i = initButton; i < maxButtons; i++) {
    pages.push(i);
  }

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    console.log(currentPage);
    if (currentPage < recipesToShow.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    console.log(currentPage);
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  function handlePageSelect(e) {
    e.preventDefault();
    setRecipesXPage(e.target.value);
  }

  return (
    <div className="pages_container">
      <div className="label_current_page">
        Pag: <div className="current_page_label">{currentPage}</div>
      </div>
      <div className="label_current_page">
        Of: <div className="current_page_label">{totalPages}</div>
      </div>
      <ul className="ul_container">
        <li className="boton_paginado" onClick={() => prevPage()}>
          <button className="btn_prev_next">Previous</button>
        </li>
        {pages ? (
          pages.map((page) => (
            <li className="boton_paginado" key={page}>
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
        <li className="boton_paginado" onClick={() => nextPage()}>
          <button className="btn_prev_next">Next</button>
        </li>
      </ul>
      <label className="select_page_label">
        Pages to show:{" "}
        <select
          className="select_page"
          value={recipesXPage}
          onChange={(e) => handlePageSelect(e)}
        >
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </label>
    </div>
  );
}
