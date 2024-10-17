import CardTeam from "../CardTeam";

interface TeamMember {
  id: number;
  path_image: string;
  name: string;
  position: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    path_image: "/images/card-team-jhonatan.svg",
    name: "Jhonatan",
    position: "Instrutor de Luta",
  },
  {
    id: 2,
    path_image: "/images/card-team-lily.svg",
    name: "Lily",
    position: "Ludomotricista",
  },
  {
    id: 3,
    path_image: "/images/card-team-luiz.svg",
    name: "Luiz",
    position: "Instrutor",
  },
  {
    id: 4,
    path_image: "/images/card-team-julia.svg",
    name: "Júlia",
    position: "Instrutora",
  },
  {
    id: 5,
    path_image: "/images/card-team-rodrigo.svg",
    name: "Rodrigo",
    position: "Instrutor",
  },
  {
    id: 6,
    path_image: "/images/card-team-luana.svg",
    name: "Luana",
    position: "Instrutora",
  },
  {
    id: 7,
    path_image: "/images/card-team-matheus.svg",
    name: "Matheus",
    position: "Avaliador Físico",
  },
  {
    id: 8,
    path_image: "/images/card-team-sarah.svg",
    name: "Sarah",
    position: "Fisioterapeuta",
  },
];

const EquipeSection: React.FC = () => {
  return (
    <section className="bg-bgSectionTeam bg-no-repeat bg-cover w-full h-max flex flex-col items-center gap-10 py-10">
      <h1 className="uppercase text-center text-5xl text-color-primary font-bold">
        conheça nossa equipe!!
      </h1>
      <div className="w-3/4 flex flex-wrap items-center justify-center gap-4">
        {teamMembers.map((member) => (
          <CardTeam key={member.id} team={member} />
        ))}
      </div>
      <h3 className="font-bold text-black text-xl">
        Sempre disposta a ajudar e torcer pela{" "}
        <span className="text-color-primary">sua evolução!</span>
      </h3>
    </section>
  );
};

export default EquipeSection;
