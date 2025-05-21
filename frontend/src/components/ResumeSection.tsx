// import { Download } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";

// export function ResumeSection() {
//   const handleDownload = async () => {
//     const toastId = toast.loading("Downloading resume...");

//     try {
//       const response = await fetch("/Abhay's resume4.pdf");
//       if (!response.ok) throw new Error("Failed to fetch resume");

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "Abhay_Kumar_Resume.pdf";
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       window.URL.revokeObjectURL(url);

//       toast.success("Download complete", { id: toastId });
//     } catch (error) {
//       toast.error("Failed to download resume", { id: toastId });
//     }
//   };

//   return (
//     <section id="resume" className="newspaper-container py-12 bg-muted">
//       <h2 className="section-title">CAREER OPPORTUNITIES</h2>

//       <div className="newspaper-border p-6 md:p-8 bg-newspaper-white dark:bg-newspaper-black">
//         <div className="text-center mb-6">
//           <h3 className="article-title text-2xl md:text-3xl">
//             TALENTED DEVELOPER SEEKING OPPORTUNITIES
//           </h3>
//           <p className="text-lg font-medium">
//             Full Stack MERN Developer | Open to Work
//           </p>
//         </div>

//         <div className="mb-8">
//           <h4 className="font-heading font-bold mb-2">QUALIFICATIONS:</h4>
//           <ul className="list-disc pl-5 space-y-2">
//             <li>
//               Hands-on experience in building full-stack projects using React,
//               Node.js, Express, and MongoDB
//             </li>
//             <li>
//               Strong understanding of data structures and algorithms with
//               regular practice in C++
//             </li>
//             <li>
//               Good problem-solving skills developed through competitive
//               programming on LeetCode, CodeChef, and Codeforces
//             </li>
//             <li>
//               Quick learner with the ability to adapt to new technologies and
//               tools
//             </li>
//             <li>
//               Successfully deployed real-world web applications and solved
//               technical challenges like API handling and authentication
//             </li>
//           </ul>
//         </div>

//         <div className="text-center">
//           <Button
//             variant="default"
//             size="lg"
//             className="group"
//             onClick={handleDownload}
//           >
//             <Download size={16} className="mr-2" />
//             Download Resume (PDF)
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ResumeSection() {
  const handleDownload = async () => {
    const toastId = toast.loading("Downloading resume...");

    try {
      const response = await fetch("/Abhay's resume4.pdf");
      if (!response.ok) throw new Error("Failed to fetch resume");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Abhay_Kumar_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      toast.success("Download complete", { id: toastId });

      // ✅ Smoothly scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      toast.error("Failed to download resume", { id: toastId });
    }
  };

  return (
    <section id="resume" className="newspaper-container py-12 bg-muted">
      <h2 className="section-title">CAREER OPPORTUNITIES</h2>

      <div className="newspaper-border p-6 md:p-8 bg-newspaper-white dark:bg-newspaper-black">
        <div className="text-center mb-6">
          <h3 className="article-title text-2xl md:text-3xl">
            TALENTED DEVELOPER SEEKING OPPORTUNITIES
          </h3>
          <p className="text-lg font-medium">
            Full Stack MERN Developer | Open to Work
          </p>
        </div>

        <div className="mb-8">
          <h4 className="font-heading font-bold mb-2">QUALIFICATIONS:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Hands-on experience in building full-stack projects using React,
              Node.js, Express, and MongoDB
            </li>
            <li>
              Strong understanding of data structures and algorithms with
              regular practice in C++
            </li>
            <li>
              Good problem-solving skills developed through competitive
              programming on LeetCode, CodeChef, and Codeforces
            </li>
            <li>
              Quick learner with the ability to adapt to new technologies and
              tools
            </li>
            <li>
              Successfully deployed real-world web applications and solved
              technical challenges like API handling and authentication
            </li>
          </ul>
        </div>

        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="group"
            onClick={handleDownload}
          >
            <Download size={16} className="mr-2" />
            Download Resume (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}
