import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';
import PropTypes from 'prop-types';
import {Notes} from '../api/notes.js';

export class Editor extends React.Component{
  render() {
    if (this.props.note) {
      return (<p>Got note</p>);
    } else {
      return (
      <p>{this.props.selectedNoteId ? 'Note not found.' : 'Pick or create a note to get started.'}</p>
      );
    }
  }
};

Editor.PropTypes = {
  note: PropTypes.object,
  selectedNoteId: PropTypes.String
}

export default createContainer (() => {
  const selectedNoteId = Session.get('selectedNoteId');

  return {
    selectedNoteId,
    note:Notes.findOne(selectedNoteId)
  };
},Editor);
