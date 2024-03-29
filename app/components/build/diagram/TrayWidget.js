import * as React from 'react';

export interface TrayWidgetProps {}

export interface TrayWidgetState {}

export class TrayWidget extends React.Component<
  TrayWidgetProps,
  TrayWidgetState
> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="tray"> {this.props.children} </div>;
  }
}
