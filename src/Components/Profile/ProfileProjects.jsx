import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProfileProjects extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    }
  }

  render() {
    const { isLoading } = this.state;
    // Display Loader if waiting
    if (isLoading) {
      return (
        <section className="p-projects">
          <div className="loader">Loading...</div>
        </section>
      );
    }

    const modList = ["Hytale Mod Name", "Hytale Mod Name", "Hytale Mod Name", "Hytale Mod Name", "Hytale Mod Name"];

    const renderProjects = modList.map((project, index) => {
      let delay = index * 100;
      return (
        <li key={index} className="p-projects__list-item" data-aos="fade-up" data-aos-delay={delay} data-aos-once="true">
          <img className="p-project-avatar" src="" alt="" />
          <div className="p-project-details">
            <Link to="/mod" className="p-project__name">{project}</Link>
            <span className="p-project__dates">Updated 5 days ago</span>
            <span className="p-project__dates">Hytale Mod that shows mod recipes and items</span>
          </div>
        </li>)
    });

    return (
      <div className="p-projects">
        <ul className="p-projects__list">
          {renderProjects}
        </ul>
      </div>
    )
  }
}
