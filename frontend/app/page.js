import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`flex flex-col h-[100vh] items-center w-[100%] justify-center gap-16 z-20`}>
      <main className={styles.main}>
        <Image
          // className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="http://localhost:3000/tasks"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Todo App made by <strong>Ahmed Ayaz</strong> →
        </a>
      </footer>
    </div>
  );
}
