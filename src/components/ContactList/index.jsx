import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'redux/contacts'
const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getContacts);

    console.log(contacts)

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    const onClickDelete = id => {
        dispatch(contactsOperations.deleteContact(id));

    }


    const filter = "";
    return (<div className={css.contacts__list__container}>
        <ul>
            {contacts.map(contact => {
                if (contact.name.toLowerCase().includes(filter.toLowerCase()) || filter === 0)
                    return (
                        <li key={contact.id}>
                            <img className={css.avatar} src={contact.avatar} alt={contact.name} />
                            <p>{contact.name}: {contact.number}</p>
                            <button type="button" onClick={() => onClickDelete(contact.id)}>Delete</button>
                        </li>)
                else return "";
            })}</ul>
    </div>);
}

export default ContactList;