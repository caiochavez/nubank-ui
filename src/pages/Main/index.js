import React from 'react'
import {
  Container, Card, Content, CardHeader, CardContent, CardFooter, Title, Description, Annotation
} from './styles'
import Header from '~/components/header'
import Tabs from '~/components/tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Main () {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 8.000,00</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 1.000,00 recebida de Flávio Algusto hoje ás 08:00 horas
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  )
}

