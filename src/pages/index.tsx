import { styled } from "../styles"

const Button = styled('button',{
  backgroundColor: 'red'
})

export default function Home() {
  return (
    <Button>
      Hallo World
    </Button>
  )
}
