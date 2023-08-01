import { AppProps } from "next/app"
import Link from "next/link"
import logoImage from "../assets/logo.svg"
import { globalStyles } from "../styles/global"
import { Container, Header } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Link href={'http://localhost:3000/'}>
          <img src={logoImage.src} alt="logo" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}