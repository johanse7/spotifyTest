import React from "react";
import SearchInput from "../../styles/common/inputStyle";
import { GoSearch } from "react-icons/go";

const SearchForm = ({ refInput, handleInput }) => {
  return (
    <SearchInput>
      <div className="search-icon">
        <GoSearch />
      </div>
      <input
        type="search"
        ref={refInput}
        onChange={handleInput}
        placeholder="Search"
      />
    </SearchInput>
  );
};

export default SearchForm;
