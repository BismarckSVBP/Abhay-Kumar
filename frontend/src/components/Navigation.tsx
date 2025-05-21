// // import { useState, useEffect } from "react";
// // import { Menu, X } from "lucide-react";
// // import { Button } from "@/components/ui/button";

// // export function Navigation() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [activeLink, setActiveLink] = useState("#home");
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   const navLinks = [
// //     { name: "Home", href: "#home" },
// //     { name: "About", href: "#about" },
// //     { name: "Projects", href: "#projects" },
// //     { name: "Profiles", href: "#profiles" },
// //     { name: "Resume", href: "#resume" },
// //     { name: "Contact", href: "#contact" },
// //   ];

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 50);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const sectionIds = navLinks.map((link) => link.href.slice(1));
// //     const observerOptions = {
// //       threshold: 0.4,
// //       rootMargin: "0px 0px -30% 0px",
// //     };

// //     const observer = new IntersectionObserver((entries) => {
// //       let topSection: string | null = null;

// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           if (
// //             !topSection ||
// //             entry.boundingClientRect.top <
// //               document.getElementById(topSection)?.getBoundingClientRect().top!
// //           ) {
// //             topSection = entry.target.id;
// //           }
// //         }
// //       });

// //       if (topSection) {
// //         setActiveLink(`#${topSection}`);
// //       }
// //     }, observerOptions);

// //     sectionIds.forEach((id) => {
// //       const section = document.getElementById(id);
// //       if (section) observer.observe(section);
// //     });

// //     return () => {
// //       sectionIds.forEach((id) => {
// //         const section = document.getElementById(id);
// //         if (section) observer.unobserve(section);
// //       });
// //     };
// //   }, []);

// //   const handleLinkClick = (href: string) => {
// //     const target = document.querySelector(href);
// //     if (target) {
// //       const yOffset = -70;
// //       const y =
// //         target.getBoundingClientRect().top + window.pageYOffset + yOffset;
// //       window.scrollTo({ top: y, behavior: "smooth" });
// //     }
// //     setMenuOpen(false);
// //   };

// //   return (
// //     <nav
// //       className={`newspaper-container sticky top-0 z-50 border-b border-newspaper-gray transition-all duration-300 ${
// //         isScrolled
// //           ? "bg-newspaper-white/90 dark:bg-newspaper-black/90 backdrop-blur-md shadow-sm"
// //           : "bg-newspaper-white dark:bg-newspaper-black"
// //       }`}
// //     >
// //       <div className="flex justify-between items-center px-4 py-2">
// //         <a
// //           href="#home"
// //           onClick={() => handleLinkClick("#home")}
// //           className="font-heading text-lg font-bold"
// //         >
// //           The Dev Times
// //         </a>

// //         <Button
// //           variant="ghost"
// //           className="md:hidden"
// //           onClick={() => setMenuOpen((prev) => !prev)}
// //         >
// //           {menuOpen ? <X size={20} /> : <Menu size={20} />}
// //         </Button>

// //         <ul className="hidden md:flex space-x-6">
// //           {navLinks.map((link) => (
// //             <li key={link.name}>
// //               <a
// //                 href={link.href}
// //                 onClick={() => handleLinkClick(link.href)}
// //                 className={`font-medium transition-colors ${
// //                   activeLink === link.href
// //                     ? "text-newspaper-sepia underline underline-offset-4"
// //                     : "hover:text-newspaper-sepia"
// //                 }`}
// //               >
// //                 {link.name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {menuOpen && (
// //         <ul className="md:hidden flex flex-col px-4 py-2 space-y-2 bg-newspaper-white dark:bg-newspaper-black transition-all">
// //           {navLinks.map((link) => (
// //             <li key={link.name}>
// //               <a
// //                 href={link.href}
// //                 onClick={() => handleLinkClick(link.href)}
// //                 className={`block font-medium rounded-md transition-colors px-2 py-1 ${
// //                   activeLink === link.href
// //                     ? "text-newspaper-sepia bg-newspaper-lightgray dark:bg-newspaper-gray/20"
// //                     : "hover:text-newspaper-sepia"
// //                 }`}
// //               >
// //                 {link.name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </nav>
// //   );
// // }
// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export function Navigation() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('#home');
//   const [isScrolled, setIsScrolled] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Profiles', href: '#profiles' },
//     { name: 'Resume', href: '#resume' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   // Smooth scrolling
//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto';
//     };
//   }, []);

//   // Sticky nav on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       // Home section fallback for top of page
//       if (window.scrollY < 150) {
//         setActiveLink('#home');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Intersection Observer (ScrollSpy)
//   useEffect(() => {
//     const sectionIds = navLinks.map(link => link.href.replace('#', ''));
//     const sections = sectionIds
//       .map(id => document.getElementById(id))
//       .filter(Boolean);

//     if (sections.length === 0) return;

//     const observer = new IntersectionObserver(
//       entries => {
//         const visible = entries
//           .filter(e => e.isIntersecting)
//           .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

//         if (visible.length > 0) {
//           const topVisibleId = visible[0].target.id;

//           // Don't override #home unless we're off the top
//           if (window.scrollY > 150 || topVisibleId === 'contact') {
//             setActiveLink(`#${topVisibleId}`);
//           }
//         }
//       },
//       {
//         root: null,
//         rootMargin: '-45% 0px -45% 0px',
//         threshold: 0,
//       }
//     );

//     sections.forEach(section => observer.observe(section));
//     return () => sections.forEach(section => observer.unobserve(section));
//   }, [navLinks]);

//   const handleLinkClick = (href: string) => {
//     setActiveLink(href);
//     setMenuOpen(false);
//   };

//   return (
//     <nav
//       className={`newspaper-container sticky top-0 z-50 border-b border-newspaper-gray transition-all duration-300 ${
//         isScrolled
//           ? 'bg-newspaper-white/90 dark:bg-newspaper-black/90 backdrop-blur-md shadow-sm'
//           : 'bg-newspaper-white dark:bg-newspaper-black'
//       }`}
//     >
//       <div className="flex justify-between items-center px-4 py-2">
//         <a
//           href="#home"
//           onClick={() => handleLinkClick('#home')}
//           className="font-heading text-lg font-bold"
//         >
//           The Dev Times
//         </a>

//         {/* Mobile toggle */}
//         <Button
//           variant="ghost"
//           className="md:hidden"
//           onClick={() => setMenuOpen(prev => !prev)}
//         >
//           {menuOpen ? <X size={20} /> : <Menu size={20} />}
//         </Button>

//         {/* Desktop links */}
//         <ul className="hidden md:flex space-x-6">
//           {navLinks.map(link => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 onClick={() => handleLinkClick(link.href)}
//                 className={`font-medium transition-colors ${
//                   activeLink === link.href
//                     ? 'text-newspaper-sepia underline underline-offset-4'
//                     : 'hover:text-newspaper-sepia'
//                 }`}
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile links */}
//       {menuOpen && (
//         <ul className="md:hidden flex flex-col px-4 py-2 space-y-2 bg-newspaper-white dark:bg-newspaper-black">
//           {navLinks.map(link => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 onClick={() => handleLinkClick(link.href)}
//                 className={`block font-medium rounded-md transition-colors px-2 py-1 ${
//                   activeLink === link.href
//                     ? 'text-newspaper-sepia bg-newspaper-lightgray dark:bg-newspaper-gray/20'
//                     : 'hover:text-newspaper-sepia'
//                 }`}
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// }
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll and sticky background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Highlight home if near top
      if (window.scrollY < 150) setActiveLink('#home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

        if (visibleSections.length > 0) {
          const topId = visibleSections[0].target.id;

          // Set only if off top or Contact section in view
          if (window.scrollY > 150 || topId === 'contact') {
            setActiveLink(`#${topId}`);
          }
        }
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    const sectionElements = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    sectionElements.forEach((el) => observer.observe(el));
    return () => sectionElements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = -70; // adjust based on sticky height
      const top =
        target.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`newspaper-container sticky top-0 z-50 border-b border-newspaper-gray transition-all duration-300 ${
        isScrolled
          ? 'bg-newspaper-white/90 dark:bg-newspaper-black/90 backdrop-blur-md shadow-sm'
          : 'bg-newspaper-white dark:bg-newspaper-black'
      }`}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <a
          href="#home"
          onClick={() => handleLinkClick('#home')}
          className="font-heading text-lg font-bold"
        >
          The Dev Times
        </a>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`font-medium transition-colors ${
                  activeLink === link.href
                    ? 'text-newspaper-sepia underline underline-offset-4'
                    : 'hover:text-newspaper-sepia'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col px-4 py-2 space-y-2 bg-newspaper-white dark:bg-newspaper-black">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block font-medium rounded-md transition-colors px-2 py-1 ${
                  activeLink === link.href
                    ? 'text-newspaper-sepia bg-newspaper-lightgray dark:bg-newspaper-gray/20'
                    : 'hover:text-newspaper-sepia'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
