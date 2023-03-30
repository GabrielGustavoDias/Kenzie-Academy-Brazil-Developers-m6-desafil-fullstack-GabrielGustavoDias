import React, { useContext } from "react";
import ListContacts from "../../components/ListContacts";
import { ClientContext } from "../../context/ClientContext";

const HomePage = () => {
  const { contactsList } = useContext(ClientContext);

  return (
    <>
      <ul>
        {contactsList?.map((contacts) => (
          <ListContacts key={contacts.id} contacts={contacts} />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
