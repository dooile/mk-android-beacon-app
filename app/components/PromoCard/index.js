import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Badge,
  View,
} from 'native-base';

const uri =
  'https://static.wixstatic.com/media/bce2ba_7e2d5f2410264bb989b8c80639f70007~mv2_d_1241_1754_s_2.jpg/v1/fill/w_1241,h_1754,al_c/bce2ba_7e2d5f2410264bb989b8c80639f70007~mv2_d_1241_1754_s_2.jpg';

export default class PromoCard extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card
            style={{
              borderRadius: 15,
              // overflow: 'hidden',
              height: 550,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 15,
              elevation: 15,
            }}>
            <CardItem cardBody>
              <Image
                source={{uri}}
                style={{height: 400, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem style={{height: 20}}>
              <Left>
                <Text
                  style={{
                    position: 'absolute',
                    left: -10,
                    fontSize: 10,
                    color: '#545f79',
                  }}>
                  Válido até 23/11/2019
                </Text>
              </Left>
              <Right>
                <Badge
                  style={{
                    backgroundColor: 'red',
                    position: 'absolute',
                    top: -18,
                    width: 100,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
                    PROMOÇÃO
                  </Text>
                </Badge>
              </Right>
            </CardItem>
            <CardItem>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold', color: '#545f79'}}>
                  Novo Cheese Tarik Crust
                </Text>

                <Text style={{fontSize: 13, color: '#545f79'}}>
                  Novo saber com muito queijo especialmente pra você, porque
                  sabemos o quanto você gosta!
                </Text>

                <Text style={{fontSize: 15, marginTop: 0, fontWeight: 'bold', color: '#e51937'}}>
                  20% de desconto na primeira compra
                </Text>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
