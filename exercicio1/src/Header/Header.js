import React, { Component } from "react";
import { LogoComponent } from "./LogoComponent";
import { TopicListComponent } from "./TopicListComponent";
import { SearchInputComponent } from "./SearchInputComponent";

export class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <LogoComponent />
        <TopicListComponent topics={['1', '2', '3', '4']} />
        <SearchInputComponent />
      </header>
    );
  }
}

