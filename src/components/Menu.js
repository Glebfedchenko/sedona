import React, { Component } from "react";
import LogoM from "./SVG/LogoM";

export default class Menu extends Component {
  state = {
    active: false
  };
  toggle = () => {
    this.setState({ active: !this.state.active });
  };
  render() {
    const { active } = this.state;
    return (
      <seciton>
        <div className={!active? 'disabled': 'menu-mobilewrapper'}>
          <ul>
            <li><a>Home</a></li>
            <li><a>Poto & Video</a></li>
            <li><a>Reviews</a></li>
          </ul>
        </div>
        <div className='menu-cross' onClick={this.toggle}>
          <div className="oneActive" />
          <div className="twoActive"/>
          <div className="threeActive" />
        </div>
        <section className="menu-main">
        <div className='menu-wrapper'>
          <LogoM />
          <div className="menu-burger" onClick={this.toggle}>
            <div className={!active ? "one" : null} />
            <div className={!active ? "two" : null} />
            <div className={!active ? "three" : null} />
          </div>
          </div>
        </section>
      </seciton>
    );
  }
}
