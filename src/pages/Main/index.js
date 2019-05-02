import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container, Card, Content, CardHeader, CardContent, CardFooter, Title, Description, Annotation
} from './styles'
import Header from '~/components/header'
import Tabs from '~/components/tabs'
import Menu from '~/components/menu'

export default function Main () {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
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
      </Content>
      <Tabs />
    </Container>
  )
}

