import { BoxesContainer } from "@/app/styles/Home"


export const BoxesHome = () => {
  return (
    <BoxesContainer>
      <div className="box-1">
        <div className="title">
          <p>Equipo</p>
          <b>Multidiciplinario</b>
        </div>
      </div>
      <div className="box-2">
        <div className="title">
          <p>Tecnología de</p>
          <b>última generación</b>
        </div>
      </div>
      <div className="box-3">
        <div className="title">
          <p>Profesionales</p>
          <b>experimentados</b>
        </div>
      </div>
    </BoxesContainer>
  )
}
