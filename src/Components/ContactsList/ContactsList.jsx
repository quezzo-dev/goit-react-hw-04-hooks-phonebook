import React from "react";
import s from "./ContactsList.module.css";
import ContactsItem from "../ContactsItem/ContactsItem";
import PropTypes from "prop-types";

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={s.item}>
            <ContactsItem
              name={name}
              number={number}
              id={id}
              onDeleteContact={onDeleteContact}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),

  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
