import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
