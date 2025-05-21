
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="newspaper-container pt-6 md:pt-10">
      <div className="flex justify-between items-center">
        <div className="text-xs uppercase tracking-widest">
      {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <ThemeToggle />
      </div>
      
      <div className="text-center py-8 border-y-2 border-newspaper-black dark:border-newspaper-white my-4">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">THE DEV TIMES</h1>
        <div className="mt-2 italic">Developer Portfolio - Est. 2025</div>
      </div>
      
      <div className="flex justify-between items-center py-3 border-b border-newspaper-gray">
        <h2 className="font-heading text-xl md:text-2xl font-bold">Abhay Kumar</h2>
        <p className="italic text-sm md:text-base">Backend Developer | Coder</p>
      </div>
    </header>
  );
}
