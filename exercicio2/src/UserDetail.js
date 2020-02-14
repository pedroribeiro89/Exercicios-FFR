import React, { Component } from "react";

export class UserDetail extends Component {
    componentDidMount() {
        document.title = this.props.match.params.name;
    }

  render() {
    return (
      <div>
        <p>{this.props.match.params.name}</p>
      </div>
    );
  }
}