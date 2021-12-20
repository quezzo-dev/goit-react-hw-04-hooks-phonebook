import React from "react";
import s from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ value, changefilter }) => {
  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={changefilter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changefilter: PropTypes.func.isRequired,
};

export default Filter;
