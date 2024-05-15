
import  styled  from "styled-components"

const cores = {
   darkcyan:`hsl(158,36%,37%)`,
   cream : `hsl(30,38,92)`,
   white:`#fff`,
   Verydarkblue: `hsl(212, 21%, 14%)`
}

export const Container = styled.section`
width: 600px;
height: 450px;
background-color: ${cores.white};
border-radius: 10px;
display: flex;
@media (max-width:800px){
    flex-direction: column;
}

`

export const Imagem = styled.img`
width: 50%;
border-radius: 10px 0 0 10px;

`

export const Produto = styled.p`
  font-size: 10px;
  color:${cores.Verydarkblue};
  letter-spacing: 3px;
  font-family: "Montserrat", sans-serif;

`
export const InfoContainer = styled.div`
margin-left:15px ;
align-items: flex-start;
`

export const Titulo = styled.h1`
font-size:40px;
color: ${cores.Verydarkblue};
font-weight: 700;
font-family: "Fraunces", serif;
`

export const Paragrafo = styled.p`
 font-size: 14px;
  color:${cores.Verydarkblue};
  font-family: "Montserrat", sans-serif;
`

export const Botao  = styled.button`
background-color: ${cores.darkcyan};
height: 40px;
width: 250px;
border: none;
cursor: pointer;
border-radius: 5px;
color:${cores.white};
font-family: "Montserrat", sans-serif;
font-weight: 700;

&:hover{
   // filter:brightness(0.8);
   background-color: black;
}
`

export const Preco1 = styled.h1`
color: ${cores.darkcyan};
`
