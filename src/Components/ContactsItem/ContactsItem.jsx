import React from "react";
import s from "./ContactsItem.module.css";
import PropTypes from "prop-types";

const ContactsItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <p>{name + ": " + number}</p>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={s.btn}
      >
        Delete
      </button>
    </>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
