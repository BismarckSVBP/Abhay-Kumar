export function ExpertiseSection() {
  const skills = {
    Languages: ["C", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
    "Data Structures & Algorithms": ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs"],
    "Runtime Environments": ["Node.js"],
    Frameworks: ["React.js", "Next.js (Basics only)", "Express.js"],
    Libraries: ["Redux", "Tailwind CSS"],
    Databases: ["MongoDB", "Mongoose", "MySQL"],
  };

  return (
    <section className="newspaper-container py-12 bg-muted">
      <h2 className="section-title">TECHNICAL EXPERTISE</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="newspaper-card">
            <h3 className="article-title border-b pb-2 mb-4">{category}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="decorative-divider mt-8">
        <span className="text-xl font-heading px-4">★</span>
      </div>
    </section>
  );
}
