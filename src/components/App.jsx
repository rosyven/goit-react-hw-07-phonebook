import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts, addContact } from "redux/operations";

export default function App() {
  const { items, isLoading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const contacts = useSelector(addContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formSubmit = contact => {
    if (items.find(({ name }) => name === contact.name)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    dispatch(addContact(contact));
  };

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={formSubmit}/>

        <h2>Contacts</h2>
        {!isLoading && contacts.length > 0 && <Filter />}
        {!isLoading && contacts.length > 0 && <ContactList />}
      </div>
    );
}
