import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css";
export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.contactPage}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
