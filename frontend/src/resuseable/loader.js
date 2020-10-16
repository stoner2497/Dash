import React from 'react';
import {ActivityIndicator} from 'react-native';
import Container from './Container';
export default function loader() {
  return (
    <Container>
      <ActivityIndicator size="large" color="white" />
    </Container>
  );
}
