import React from "react";

type ContentProps = {
  children: React.ReactNode;
};

export class Content extends React.Component<ContentProps> {
  render() {
    return <div className="p-4 bg-white">{this.props.children}</div>;
  }
}