import React, { Component } from 'react'

import ModPageTags from './ModPageTags';

export default class ModPageDetails extends Component {
  render() {
    return (
      <section className="mod-details">
        <p className="md__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu mi non orci suscipit semper. Mauris a tristique elit, vitae egestas leo. Mauris malesuada lectus elit. Fusce a lectus et elit facilisis vehicula. Quisque quis cursus mauris. Duis non semper purus. Ut sollicitudin nisl vel ante eleifend ultricies. Proin ultrices eget massa vitae mollis. Suspendisse feugiat augue vitae nulla accumsan ullamcorper. Maecenas eleifend lacus eu rutrum tempor. Vivamus dapibus eros vehicula, pharetra quam in, volutpat nibh.</p>
        <br />
        <div className="md__image"></div>
        <br />
        <p className="md__text">Phasellus id pharetra ipsum. Aenean efficitur non libero nec lobortis. Aliquam ac massa vel dui pharetra blandit. Fusce est tellus, mattis sed velit at, convallis semper felis. Suspendisse suscipit sed metus ac ullamcorper. Aliquam mollis, purus et pellentesque tincidunt, ipsum arcu commodo turpis, in tristique ipsum purus in risus. In semper diam ipsum, a pretium velit finibus non. Fusce id volutpat nibh, eget auctor orci. Curabitur dictum ornare pellentesque. Proin aliquet varius sem vitae fringilla.</p>
        <ModPageTags />
      </section>
    )
  }
}
