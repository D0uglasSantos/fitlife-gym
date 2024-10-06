import { Team } from "@/types/team";
import Image from "next/image";

interface CardTeamProps {
  team: Team;
}

const CardTeam = (props: CardTeamProps) => {
  const team = props.team;
  return (
    <div key={team.id} className="relative lg:w-[253px] lg:h-[253px]" id="team-card">
      <div className="w-full" id="team-img">
        <Image
          src={team.path_image}
          alt={team.name}
          width={253}
          height={253}
          className="w-full h-full object-cover opacity-100 transition-opacity"
        />
      </div>

      <div id="team.infos" className="absolute bottom-0 h-full w-full">
        <div
          className="flex flex-col gap-2 items-center justify-center bg-color-details py-2 px-1 opacity-0 transition-all hover:opacity-100 h-full hover:shadow-2xl "
          id="hidden-content"
        >
          <p className="py-4 border-b-2 border-white uppercase font-bold lg:text-xl text-white">
            {team.name}
          </p>
          <p className="py-4 font-light text-white lg:text-xl capitalize">
            {team.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
