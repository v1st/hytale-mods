import React, { Component } from 'react'

import './ImageDrop.scss';

class ImageDrop extends Component {
  constructor(props) {
    super(props);

    this.handleFileSelection = this.handleFileSelection.bind(this);
  }


  handleFileSelection(e) {
    let files = e.target.files // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (let i = 0, f; f = files[i]; i++) {
      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      const reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = ((theFile) => {
        return (e) => {
          // Render thumbnail.  
          let span = document.createElement('span');
          span.innerHTML =
            [
              '<img class="thumb" src="',
              e.target.result,
              '" title="', escape(theFile.name),
              '"/>'
            ].join('');

          document.getElementById('list').insertBefore(span, null);
        };
      })(f);
      files.remove(0);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }


  render() {
    return (
      <section className="img-dropbox__wrap">
        <h3 className="tab__label">Upload Images</h3>
        <div className="drop">
          <ul id="list">

          </ul>
          <h2 className="drop__title">DRAG &amp; DROP</h2>
          <span className="drop__sub">up to 10 images, or</span>
          <button className="drop__btn">click here to browse</button>
          <input type="file"
            onChange={this.handleFileSelection}
            name="files[]"
            multiple={true}
            accept=".png, .jpg, .jpeg"
            className="img-dropbox" />
        </div>
      </section>
    )
  }
}

export default ImageDrop;
