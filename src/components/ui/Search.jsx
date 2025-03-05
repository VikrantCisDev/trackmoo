import React, { useState } from "react";
import {  FaTimes } from "react-icons/fa";
import searchIcon from '../../assets/Images/searchIcon.svg'

const Search = ({ onSearch,searchInputClassName,searchContainer, bgColor = "#fff" }) => {
    const [query, setQuery] = useState("");
    const [isActive, setIsActive] = useState(false);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        if (onSearch) {
            onSearch(e.target.value);
        }
        setIsActive(e.target.value.length > 0);
    };

    const clearSearch = () => {
        setQuery("");
        if (onSearch) {
            onSearch("");
        }
        setIsActive(false);
    };

    return (
        <div className={`search-container ${searchContainer} ${isActive ? "active" : ""}`} style={{background: bgColor}}>


            {!isActive && 
                <img src={searchIcon} alt="searchIcon" />
            }
            <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleSearch}
                className={`search-input ${searchInputClassName}`} 
            />
            {isActive && <FaTimes className="clear-icon" onClick={clearSearch} />}
        </div>
    );
};

export default Search;
