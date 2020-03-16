import {CardItem, Container, Left, Right} from 'native-base';
import React, {Component} from 'react';
import {
  PromoCardBadge,
  PromoCardBadgeText,
  PromoCardDescriptionAction,
  PromoCardDescriptionBody,
  PromoCardDescriptionTitle,
  PromoCardDescriptionView,
  PromoCardDueTo,
  PromoCardImage,
  PromoCardItemTags,
  PromoCardLayout,
} from './style';

const img = require('./img/image.png');

export default class PromoCard extends Component {
  render() {
    return (
      <Container>
        <PromoCardLayout>
          <CardItem cardBody>
            <PromoCardImage source={img} />
          </CardItem>
          <PromoCardItemTags>
            <Left>
              <PromoCardDueTo>Válido até 23/11/2019</PromoCardDueTo>
            </Left>
            <Right>
              <PromoCardBadge>
                <PromoCardBadgeText>PROMOÇÃO</PromoCardBadgeText>
              </PromoCardBadge>
            </Right>
          </PromoCardItemTags>
          <CardItem>
            <PromoCardDescriptionView>
              <PromoCardDescriptionTitle>
                Novo Cheese Tarik Crust
              </PromoCardDescriptionTitle>

              <PromoCardDescriptionBody>
                Novo saber com muito queijo especialmente pra você, porque
                sabemos o quanto você gosta!
              </PromoCardDescriptionBody>

              <PromoCardDescriptionAction>
                20% de desconto na primeira compra
              </PromoCardDescriptionAction>
            </PromoCardDescriptionView>
          </CardItem>
        </PromoCardLayout>
      </Container>
    );
  }
}
