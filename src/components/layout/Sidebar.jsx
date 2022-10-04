import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Sidebar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const makeSearch = (e) => {
    e.preventDefault();
    let mySearch = e.target.search_field.value;

    navigate("/seeker/" + mySearch, { replace: true });
  };

  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Seeker: </h3>
        <form onSubmit={makeSearch}>
          <input type="text" id="search_field" autoComplete="off" />
          <button type="submit" id="search" value="Search">
            Search
          </button>
        </form>
      </div>
      {/* <div className="add">
        <h3 className="title"></h3>
        <strong>
          Title
        </strong>
        <form>
          <input type="text" id="title" placeholder="Title" name="title" />
          <textarea
            id="description"
            placeholder="Description"
            name="description"
          ></textarea>
          <input type="submit" id="save" value="Save" />
        </form>
      </div> */}
    </aside>
  );
};
