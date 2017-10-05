import React from 'react';
import api from '../api';

export class ContactDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    const { contactId } = this.props.params;
    api(`/contacts/id?q=${contactId}`)
      .then(res => {
        const { contacts } = res.data || [];
        this.setState({ contacts })
      });
  }

  render() {
    const [ contact ] = this.state.contacts;
    if (!contact) { return null; }
    const {
      name,
      email,
      department,
      image,
    } = contact;

    return (
      <div>
        <img src={image} height="300" width="auto" alt={name} />
        <h1>{name}</h1>
        <h3>{email}</h3>
        <h3>{department}</h3>
      </div>
    )
  }
}
