import React from 'react';
import Container, { ContainerProps } from './Container';

class Item extends React.Component<ContainerProps> {
  static defaultProps = {
    flex: false,
  };

  render() {
    return <Container {...this.props} />;
  }
}

export default Item;
