import React from "react";
import { iContact } from "../../context/ClientContext";

const ListContacts = ({ contacts }: any) => {
  return contacts.contact.map((contact: iContact) => (
    <li key={contact.id}>
      <h2>Name: {contact.completeName}</h2>
      <p>Email: {contact.email}</p>
      <p>Cellphone: {contact.cellphone}</p>
    </li>
  ));
};

export default ListContacts;
