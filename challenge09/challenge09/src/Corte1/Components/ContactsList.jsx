function ContactsList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name}: {contact.phone}
          <button onClick={() => deleteContact(index)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ContactsList

    