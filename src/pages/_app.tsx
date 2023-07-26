import { AppProps } from "next/app"
import logoImage from "../assets/logo.svg"
import { globalStyles } from "../styles/global"
import { Container, Header } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <img src={logoImage.src} alt="logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}