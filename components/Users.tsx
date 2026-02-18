import React from 'react';
import { Server, Users as UsersIcon, Camera, ShieldCheck } from 'lucide-react';

const UserCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass?: string;
}> = ({ title, description, icon, colorClass="bg-zinc-100 text-zinc-700" }) => (
  <div className="p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-lg hover:border-brand-100 transition-all duration-300 group">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-zinc-900">{title}</h3>
    <p className="text-zinc-500 leading-relaxed">{description}</p>
  </div>
);

export const Users: React.FC = () => {
  return (
    <section id="users" className="py-24 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900">Built for everyone.</h2>
          <p className="text-zinc-500 text-lg">Whether you host the server or just view the photos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UserCard 
            title="Self-Hosters" 
            description="Running Immich, Nextcloud, or PhotoPrism? Get the polished mobile experience your server deserves."
            icon={<Server size={24} />}
            colorClass="bg-indigo-100 text-indigo-600"
          />
          <UserCard 
            title="Families & Friends" 
            description="View shared albums easily without installing multiple apps. Just click the link and enjoy."
            icon={<UsersIcon size={24} />}
            colorClass="bg-rose-100 text-rose-600"
          />
          <UserCard 
            title="Creators" 
            description="A unified viewer for client galleries and shared collections across different platforms."
            icon={<Camera size={24} />}
            colorClass="bg-amber-100 text-amber-600"
          />
          <UserCard 
            title="Privacy Focused" 
            description="For those who prefer self-hosted solutions over cloud giants but demand a premium UX."
            icon={<ShieldCheck size={24} />}
            colorClass="bg-emerald-100 text-emerald-600"
          />
        </div>
      </div>
    </section>
  );
};