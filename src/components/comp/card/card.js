import React from 'react';
import {
  Card,
  CardHeaderContainer,
  CardBody,
  CardFooter,
  HeaderTitle,
  HeaderSubtitle
} from './card.elements.js';

const CardHeader = ({ title, subtitle }) => (
  <CardHeaderContainer>
    {title && <HeaderTitle>{title}</HeaderTitle>}
    {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
  </CardHeaderContainer>
);

export {
  Card,
  CardHeaderContainer,
  CardFooter,
  CardBody,
  HeaderTitle,
  CardHeader
};