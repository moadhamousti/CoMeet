// import { CodeIcon } from "lucide-react";
// import Link from "next/link";

// const footerLinks = [
//   { href: "#", label: "Contact" },
//   { href: "#", label: "Privacy Policy" },
//   { href: "#", label: "Terms & Conditions" },
// ];

// export default function Footer() {
//   return (
//     <section className="py-16">
//       <div className="container">
//         <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
//           <Link
//             href="/home"
//             className="flex items-center gap-2 font-semibold text-2xl font-mono hover:opacity-80 transition-opacity"
//           >
//             <CodeIcon className="w-8 h-8 text-emerald-500" />
//             <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
//               Codevox
//             </span>
//           </Link>
//           <div>
//             <nav className="flex gap-6">
//               {footerLinks.map((link, index) => (
//                 <a
//                   key={index} // Add the key prop here
//                   href={link.href}
//                   className="text-white/50 text-sm"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
