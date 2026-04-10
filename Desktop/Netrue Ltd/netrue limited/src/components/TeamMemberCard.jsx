import { ExternalLink, Facebook, Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import Button from "./Button";

const iconMap = {
  LinkedIn: Linkedin,
  X: Twitter,
  Instagram: Instagram,
  Facebook: Facebook,
  Website: Globe
};

function TeamMemberCard({ member }) {
  const Icon = iconMap[member.socialPlatform] || Globe;
  const initials = member.name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="surface-card overflow-hidden">
      <div className="relative h-72 bg-brand-green">
        {member.image ? (
          <img alt={member.name} className="h-full w-full object-cover" src={member.image} />
        ) : (
          <div className="grid h-full place-items-center bg-gradient-to-br from-brand-green to-brand-red/80">
            <span className="font-display text-5xl font-semibold text-white">{initials || "NT"}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">{member.position}</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-950">{member.name}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{member.note}</p>
        <div className="mt-6">
          <Button href={member.socialUrl} target="_blank" variant="outline">
            <Icon className="h-4 w-4" />
            {member.socialPlatform}: @{member.socialHandle}
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}

export default TeamMemberCard;
