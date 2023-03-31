import { iContact } from "../../context/ClientContext";
import { ListContat } from "./styles";

const ListContacts = ({ contacts }: any) => {
  return contacts.contact.map((contact: iContact) => (
    <ListContat key={contact.id}>
      <h2>Name: {contact.completeName}</h2>
      <p>Email: {contact.email}</p>
      <p>Cellphone: {contact.cellphone}</p>
    </ListContat>
  ));
};

export default ListContacts;
