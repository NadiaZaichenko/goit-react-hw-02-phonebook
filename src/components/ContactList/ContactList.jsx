import PropTypes from 'prop-types'
import { List } from './ContactList.styled'
import { ContactItem } from 'components/ContactItem/ContactItem'

export const ContactList = ({contacts, onDeleteButton}) => {
return (
    <List>
       {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={onDeleteButton}
          />
        );
      })}
    </List>
)
}

ContactList.propTypes = {
    contacts : PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    ).isRequired,
    onDeleteButton: PropTypes.func.isRequired,
}