
import { 
    Container,
     Imagem,
      Paragrafo,
      Produto,
       Titulo,
       InfoContainer,
       Preco1,
       Botao
     } from '../App/Styles/App'


import imagemPerfume from './images/image-product-desktop.jpg'


const App = () => {
    return(
    <Container> 
    <Imagem src={imagemPerfume} />
    <InfoContainer> <Produto>PERFUME</Produto>
    <Titulo>Gabrielle Essense Eau De Parfum</Titulo>
    <Paragrafo>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores molestias qui! Perspiciatis asperiores modi error, alias veniam numquam temporibus, voluptate, esse repellendus magni deleniti quisquam et quia quam molestias.</Paragrafo>
    <Preco1>149.99</Preco1>
    <Botao>Add to Cart</Botao>
    </InfoContainer>
    </Container>
    )
}

export default App;