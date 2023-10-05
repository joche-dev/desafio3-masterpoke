import ImgPikachu from '../assets/imgs/pikachu.webp'

export default function Home() {
  return (
    <main>
        <h1>Bienvenido maestro Pokemón</h1>
        <img className="home" src={ImgPikachu} alt="Pikachu" />
    </main>
  )
}
