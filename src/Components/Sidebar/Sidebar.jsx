import React, { Component } from 'react'

import './Sidebar.scss';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      sort: 0,
      time: 0,
    }
    this.toggleSort = this.toggleSort.bind(this);
  }

  toggleSort(group, index) {
    this.setState({ [group]: index });
  }

  render() {
    // Generate Category checklist
    let checklist = [];
    for (let i = 0; i < 20; i++) {
      let id = `check${i}`
      checklist.push(
        <React.Fragment key={id}>
          <li className="category__item">
            <input type="checkbox" className="side-filter__checkbox" id={id} />
            <label className="side-filter__item" htmlFor={id}>Place Holder</label>
          </li>
          <br />
        </React.Fragment>
      );
    }

    // Toggle active sort buttons
    let getActiveSort = (name, group, index) => {
      if (index === this.state[group])
        return name + '--active';
      return name;
    }

    return (
      <section className="sidebar">
        <div className="side-filter">
          <h3 className="side-filter__title">Sort</h3>
          <ul>
            <li className={getActiveSort("side-filter__item", "sort", 0)} onClick={() => this.toggleSort("sort", 0)}>Most Popular</li>
            <li className={getActiveSort("side-filter__item", "sort", 1)} onClick={() => this.toggleSort("sort", 1)}>Latest</li>
            <li className={getActiveSort("side-filter__item", "sort", 2)} onClick={() => this.toggleSort("sort", 2)}>Highest Rated</li>
          </ul>
        </div>

        <div className="side-filter">
          <h3 className="side-filter__title">Time Period</h3>
          <ul>
            <li className={getActiveSort("side-filter__item", "time", 0)} onClick={() => this.toggleSort("time", 0)}>All Time</li>
            <li className={getActiveSort("side-filter__item", "time", 1)} onClick={() => this.toggleSort("time", 1)}>Daily</li>
            <li className={getActiveSort("side-filter__item", "time", 2)} onClick={() => this.toggleSort("time", 2)}>Last Week</li>
            <li className={getActiveSort("side-filter__item", "time", 3)} onClick={() => this.toggleSort("time", 3)}>Last Month</li>
          </ul>
        </div>

        <div className="side-filter">
          <h3 className="side-filter__title">Categories</h3>
          <ul>
            {checklist}
          </ul>
        </div>
      </section>
    )
  }
}
