// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

// import Link from 'next/link';

// export default function HomePage() {
//   return (
//     <section className="p-6 max-w-7xl mx-auto">
//       {/* Hero Section */}
//       <div className="text-center py-12">
//         <h1 className="text-4xl font-bold mb-4">Discover and Book Performing Artists</h1>
//         <p className="text-gray-600 mb-6">
//           Artistly helps event planners and managers connect with top performers.
//         </p>
//         <Link href="/artists">
//           <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
//             Explore Artists
//           </button>
//         </Link>
//       </div>

//       {/* Category Cards */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//         {categories.map((category) => (
//           <div
//          key={category.title}
//          className="bg-white border shadow p-6 rounded text-center hover:shadow-lg transition"
//           >
//        <div className="text-3xl mb-2">{category.icon}</div>
//       <h3 className="font-semibold text-lg text-gray-800">{category.title}</h3>
//       </div>

                   
//         ))}
//       </div>
//     </section>
//   );
// }

// const categories = [
//   { title: 'Singers', icon: '🎤' },
//   { title: 'Dancers', icon: '💃' },
//   { title: 'Speakers', icon: '🎙️' },
//   { title: 'DJs', icon: '🎧' },
// ];

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="p-6 max-w-7xl mx-auto font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12"
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Discover and Book <span className="text-blue-600">Performing Artists</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          Artistly helps event planners and managers connect with top performers for any occasion.
        </p>
        <Link href="/artists">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Explore Artists
          </motion.button>
        </Link>
      </motion.div>

      {/* Category Cards */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {categories.map((category) => (
          <motion.div
            key={category.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white border shadow-md p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="text-4xl mb-3">{category.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800">{category.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const categories = [
  { title: 'Singers', icon: '🎤' },
  { title: 'Dancers', icon: '💃' },
  { title: 'Speakers', icon: '🎙️' },
  { title: 'DJs', icon: '🎧' },
];
