// Footer.tsx
import React from "react";

type FooterProps = {
  callToActionLabel: string;
  toggle: () => void;
};

export class Footer extends React.Component<FooterProps> {
  handleCallToAction = () => {
    alert("OK");
    this.props.toggle();
  };

  render() {
    const { callToActionLabel, toggle } = this.props;
    return (
      <div className="p-4 bg-white flex justify-end gap-2">
        <button onClick={toggle}>Cancel</button>
        <button onClick={this.handleCallToAction}>{callToActionLabel}</button>
      </div>
    );
  }
}