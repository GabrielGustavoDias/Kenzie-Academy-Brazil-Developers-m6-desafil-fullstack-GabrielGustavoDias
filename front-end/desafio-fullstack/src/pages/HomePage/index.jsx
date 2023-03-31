import React, { useContext } from "react";
import ListContacts from "../../components/ListContacts";
import { ClientContext } from "../../context/ClientContext";
import { Main } from "./style";

const HomePage = () => {
  const { contactsList } = useContext(ClientContext);

  return (
    <Main>
      <ul>
        {contactsList?.map((contacts) => (
          <ListContacts key={contacts.id} contacts={contacts} />
        ))}
      </ul>
    </Main>
  );
};

export default HomePage;
