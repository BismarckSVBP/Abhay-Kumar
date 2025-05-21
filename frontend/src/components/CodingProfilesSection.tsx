
import { ExternalLink } from 'lucide-react';

export function CodingProfilesSection() {
  const profiles = [
    {
      platform: "LeetCode",
      username: "Abhay--Kumar",
      stats: "250+ problems solved",
      url: "https://leetcode.com/u/Abhay--Kumar",
    },
    {
      platform: "CodeChef",
      username: "agent_x9",
      stats: "2⭐ Coder",
      url: "https://www.codechef.com/users/agent_x9",
    },
    {
      platform: "Codeforces",
      username: "abhaykumar85",
      stats: "Newbie on Codeforces",
      url: "https://codeforces.com/profile/abhaykumar85",
    },
  ];

  return (
    <section id="profiles" className="newspaper-container py-12">
      <h2 className="section-title">THE CHALLENGE JOURNAL</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div key={profile.platform} className="newspaper-card flex flex-col">
            <h3 className="article-title">{profile.platform}</h3>
            <div className="flex-grow">
              <p className="mb-1 font-medium">{profile.username}</p>
              <p className="text-sm text-muted-foreground mb-4">{profile.stats}</p>
            </div>
            <a 
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-newspaper-sepia hover:underline mt-auto"
            >
              Visit Profile
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
