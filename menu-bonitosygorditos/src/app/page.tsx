// app/page.tsx
'use client';

import React from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      
        <div className={styles.ctas}>
        </div>

        <div className={styles.pdfContainer}>
          <iframe
            src="/menubonitosygorditos.pdf"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
          >
            Este navegador no soporta iframes.
          </iframe>
        </div>
      </main>
    </div>
  );
}
