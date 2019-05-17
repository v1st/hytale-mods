import React, { Component } from 'react'

import './TextEditor.scss';
import Quill from 'quill';

import '../../../node_modules/quill/dist/quill.snow.css';

export default class TextEditor extends Component {
  componentDidMount() {
    // Impoort font size
    const Size = Quill.import('attributors/style/size');
    Size.whitelist = ['1rem', '1.4rem', '3.5rem', '5rem'];
    Quill.register(Size, true);

    // Editor toolbar settings
    const toolbarOptions = [
      [{ 'size': ['1rem', '1.4rem', '3.5rem', '5rem'] }],      // custom dropdown
      ['bold', 'italic', 'underline', 'strike'],     // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'color': [] }, { 'background': [] }],       // dropdown with defaults from theme
      ['clean']                                      // remove formatting button
    ];
    // Initiate Quill Text Editor
    // eslint-disable-next-line
    const quill = new Quill('#editor', {
      theme: 'snow',
      placeholder: 'Enter your mod description / 5000 character limit...',
      modules: {
        toolbar: toolbarOptions
      },
    });

    // Limit max char length
    const limit = 5000;

    quill.on('text-change', (delta, old, source) => {
      if (quill.getLength() > limit) {
        quill.deleteText(limit, quill.getLength());
      }
    });
  }

  render() {

    return (
      <React.Fragment>
        {/* Rich Text Editor */}
        <div id="editor"></div>
      </React.Fragment>
    )
  }
}
