// import { FaPhoneAlt, FaRegSmile, FaQuestion } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import css from "./Contact.module.css";
// import { deleteContact } from "../../redux/contacts/operations";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Card from "@mui/joy/Card";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// export default function Contact({ contact }) {
//   const dispatch = useDispatch();
//   return (
//     <Card variant="outlined" sx={{ maxWidth: 600 }}>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "16px",
//         }}
//       >
//         <div>
//           <p className={css.text}>
//             <FaRegSmile className={css.icon} />
//             {contact.name}
//           </p>
//           <p className={css.text}>
//             <FaPhoneAlt className={css.icon} />
//             {contact.number}
//           </p>
//         </div>
//         <Box sx={{ display: "flex", flexDirection: "column" }}>
//           <Button
//             type="button"
//             style={{ width: "200px" }}
//             variant="contained"
//             color="primary"
//             sx={{ mt: 1, mb: 1 }}
//             onClick={() => dispatch(deleteContact(contact.id))}
//           >
//             <EditIcon />
//           </Button>
//           <Button
//             type="button"
//             style={{ width: "200px" }}
//             variant="contained"
//             color="primary"
//             sx={{ mt: 1, mb: 1 }}
//             onClick={() => dispatch(deleteContact(contact.id))}
//           >
//             <DeleteIcon />
//           </Button>
//         </Box>
//       </Box>
//     </Card>
//   );
// }
import { useState } from "react";
import { FaPhoneAlt, FaRegSmile } from "react-icons/fa";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(contact.name);
  const [editedNumber, setEditedNumber] = useState(contact.number);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(
      editContact({
        id: contact.id,
        updatedData: { name: editedName, number: editedNumber },
      })
    ).then(() => {
      setIsEditing(false);
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(contact.name);
    setEditedNumber(contact.number);
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 600 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div>
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <input
                type="text"
                value={editedNumber}
                onChange={(e) => setEditedNumber(e.target.value)}
              />
            </>
          ) : (
            <>
              <p className={css.text}>
                <FaRegSmile className={css.icon} />
                {contact.name}
              </p>
              <p className={css.text}>
                <FaPhoneAlt className={css.icon} />
                {contact.number}
              </p>
            </>
          )}
        </div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {isEditing ? (
            <>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                variant="contained"
                color="primary"
                sx={{ mt: 1, mb: 1 }}
                onClick={handleEdit}
              >
                <EditIcon />
              </Button>
              <Button
                type="button"
                variant="contained"
                color="primary"
                sx={{ mt: 1, mb: 1 }}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                <DeleteIcon />
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Card>
  );
}
