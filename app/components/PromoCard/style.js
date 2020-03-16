import styled from 'styled-components';
import {Card, CardItem, Text, Badge, View} from 'native-base';
import {Image} from 'react-native';

export const PromoCardLayout = styled(Card)`
  border-radius: 15px;
  height: 650px;
  elevation: 15;
  overflow: hidden;
  font-family: Lato;
`;

export const PromoCardItemTags = styled(CardItem)`
  height: 20px;
`;

export const PromoCardImage = styled(Image)`
  height: 500px;
  flex: 1;
`;

export const PromoCardDueTo = styled(Text)`
  position: absolute;
  left: -10px;
  font-size: 10px;
  color: #545f79;
`;

export const PromoCardBadge = styled(Badge)`
  background-color: red;
  position: absolute;
  top: -18px;
  width: 100px;
`;

export const PromoCardBadgeText = styled(Text)`
  color: white;
  font-size: 10px;
`;

export const PromoCardDescriptionTitle = styled(Text)`
  font-weight: bold;
  color: #545f79;
`;
export const PromoCardDescriptionBody = styled(Text)`
  font-size: 13px;
  color: #545f79;
`;

export const PromoCardDescriptionAction = styled(Text)`
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
  color: #e51937;
`;

export const PromoCardDescriptionView = styled(View)`
  flex-direction: column;
`;
