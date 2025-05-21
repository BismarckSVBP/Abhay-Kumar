// export function AboutSection() {
//   return (
//     <section id="about" className="newspaper-container py-12">
//       <h2 className="section-title">ABOUT THE DEVELOPER</h2>

//       <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//         <div className="md:col-span-8 newspaper-column">
//           <article className="prose prose-lg max-w-none">
//             <h3 className="article-title">
//               A Passion for Solving Digital Problems
//             </h3>
//             <p className="article-lead">
//               Second-year CSE student with impressive portfolio of web
//               applications and competitive programming achievements.
//             </p>

//             <p className="mb-4">
//               Abhay Kumar, a second-year Computer Science and Engineering
//               student at MMMUT Gorakhpur, is building a solid reputation as a
//               skilled backend developer and problem solver. Even at this early
//               stage in his career, Abhay has created and deployed several
//               full-stack web applications using the MERN stack (MongoDB,
//               Express.js, React.js, and Node.js), showing his ability to build
//               real-world software solutions.
//             </p>

//             <p className="mb-4">
//               "I believe in combining practical coding with strong basics in
//               computer science," says Abhay, who enjoys turning ideas into
//               working applications while also focusing on writing clean and
//               efficient code.
//             </p>

//             <p className="mb-4">
//               In addition to web development, Abhay is active in competitive
//               programming on platforms like LeetCode, CodeChef, and Codeforces.
//               He has solved over 250 problems on LeetCode and ranked in various
//               college-level coding contests. His interest in data structures and
//               algorithms helps him write optimized solutions and think logically
//               under pressure.
//             </p>
//             <p>
//               With a passion for continuous learning and a commitment to
//               improvement despite financial challenges, Abhay is on a clear path
//               to becoming a skilled software developer who creates impactful and
//               scalable tech solutions.
//             </p>
//           </article>
//         </div>

//         <div className="md:col-span-4">
//           <div className="newspaper-card h-full flex flex-col">
//             <h3 className="text-xl font-heading font-bold mb-4 text-center border-b pb-2">
//               DEVELOPER PROFILE
//             </h3>
//             <div className="space-y-4 flex-grow">
//               <div>
//                 <h4 className="font-bold">Name:</h4>
//                 <p>Abhay Kumar</p>
//               </div>
//               <div>
//                 <h4 className="font-bold">Education:</h4>
//                 <p>
//                   B.Tech in Computer Science & Engineering (2023–2027) - Madan Mohan Malviya University of Technology
//                   Gorakhpur
//                 </p>
//               </div>
//               <div>
//                 <h4 className="font-bold">Focus Areas:</h4>
//                 <p>
//                   Full-Stack Web Development (MERN Stack), Competitive
//                   Programming, Data Structures & Algorithms
//                 </p>
//               </div>
//               <div>
//                 <h4 className="font-bold">Experience:</h4>
//                 <p>2+ Years of Coding and Real-world Project Development</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export function AboutSection() {
  return (
    <section id="about" className="newspaper-container py-12">
      <h2 className="section-title">ABOUT THE DEVELOPER</h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 newspaper-column">
          <article className="prose prose-lg max-w-none">
            <h3 className="article-title">
              A Passion for Solving Digital Problems
            </h3>
            <p className="article-lead">
              Second-year CSE student with impressive portfolio of web
              applications and competitive programming achievements.
            </p>

            <p className="mb-4">
              Abhay Kumar, a second-year Computer Science and Engineering
              student at MMMUT Gorakhpur, is building a solid reputation as a
              skilled backend developer and problem solver. Even at this early
              stage in his career, Abhay has created and deployed several
              full-stack web applications using the MERN stack (MongoDB,
              Express.js, React.js, and Node.js), showing his ability to build
              real-world software solutions.
            </p>

            <p className="mb-4">
              "I believe in combining practical coding with strong basics in
              computer science," says Abhay, who enjoys turning ideas into
              working applications while also focusing on writing clean and
              efficient code.
            </p>

            <p className="mb-4">
              In addition to web development, Abhay is active in competitive
              programming on platforms like LeetCode, CodeChef, and Codeforces.
              He has solved over 250 problems on LeetCode and ranked in various
              college-level coding contests. His interest in data structures and
              algorithms helps him write optimized solutions and think logically
              under pressure.
            </p>
            <p>
              With a passion for continuous learning and a commitment to
              improvement despite financial challenges, Abhay is on a clear path
              to becoming a skilled software developer who creates impactful and
              scalable tech solutions.
            </p>
          </article>
        </div>

        <div className="md:col-span-4">
          <div className="newspaper-card h-full flex flex-col items-center text-center p-4">
            <h3 className="text-xl font-heading font-bold mb-4 border-b pb-2 w-full">
              DEVELOPER PROFILE
            </h3>

            {/* Profile Image */}
            <img
              src="/picture5.jpg"
              alt="Abhay Kumar"
              className="w-32 h-32 rounded-full object-cover mb-4 border shadow"
            />

            <div className="space-y-4 flex-grow text-left w-full">
              <div>
                <h4 className="font-bold">Name:</h4>
                <p>Abhay Kumar</p>
              </div>
              <div>
                <h4 className="font-bold">Education:</h4>
                <p>
                  B.Tech in Computer Science & Engineering (2023–2027) - Madan Mohan Malviya University of Technology
                  Gorakhpur
                </p>
              </div>
              <div>
                <h4 className="font-bold">Focus Areas:</h4>
                <p>
                  Full-Stack Web Development (MERN Stack), Competitive
                  Programming, Data Structures & Algorithms
                </p>
              </div>
              <div>
                <h4 className="font-bold">Experience:</h4>
                <p>2+ Years of Coding and Real-world Project Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
