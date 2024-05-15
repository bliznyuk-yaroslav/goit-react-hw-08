import { FaPhoneAlt, FaRegSmile, FaQuestion } from "react-icons/fa";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <div className={css.cont}>
      <div>
        <p className={css.text}>
          <FaRegSmile className={css.icon} />
          {contact.name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt className={css.icon} />
          {contact.number}
        </p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}
