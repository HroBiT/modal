// Header.tsx
import React from "react";

type HeaderProps = {
  title: string;
  toggle: () => void;
};

export class Header extends React.Component<HeaderProps> {
  render() {
    const { title, toggle } = this.props;
    return (
      <div className="p-4 bg-white flex justify-between items-center">
        <h3>{title}</h3>
        <button className="bg-none border-none text-xl cursor-pointer" onClick={toggle}>
          &times;
        </button>
      </div>
    );
  }
}