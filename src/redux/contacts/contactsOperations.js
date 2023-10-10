import axios from 'axios';
import * as contactsActions from './contactsActions';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest);

  try {
    const contacts = await axios
      .get('https://652541e867cfb1e59ce6f87a.mockapi.io/all/contacts')
      .then(resp => {
        return resp.data;
      })
      .catch(err => err);
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
