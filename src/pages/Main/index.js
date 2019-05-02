import React from 'react'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container, Card, Content, CardHeader, CardContent, CardFooter, Title, Description, Annotation
} from './styles'
import Header from '~/components/header'
import Tabs from '~/components/tabs'
import Menu from '~/components/menu'

export default function Main () {

  const translateY = new Animated.Value(0)
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: { translateY: translateY }
      }
    ],
    { useNativeDriver: true }
  )

  function onHandlerStateChange (event) {

  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange} >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-300, 0, 340],
                outputRange: [-50, 0, 340],
                extrapolate: 'clamp'
              })
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 100.000,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 1.000,00 recebida de Flávio Augusto hoje ás 08:00 horas
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  )

}

