import React from "react";

export const Sidebar = () => {
  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Seeker: </h3>
        <form>
          <input type="text" id="search_field" autoComplete="off" />
          <button id="search">Search</button>
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
