import React from 'react';
import {Header, Left, Icon, Button, Body, Title, Right} from 'native-base';

export default () => (
  <Header>
    <Left>
      <Button transparent>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      <Title>Iuryleto</Title>
    </Body>
    <Right />
  </Header>
);
