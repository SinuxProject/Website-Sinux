import React from 'react';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

export default function Hero(): React.ReactElement {
  return (
    <header className={styles.hero}>
      {/* 3D canvas renders client-side only (Docusaurus does SSR). */}
      <div className={styles.canvasWrap}>
        <BrowserOnly fallback={<div className={styles.canvasFallback} />}>
          {() => {
            const Scene = require('./Scene').default;
            return <Scene />;
          }}
        </BrowserOnly>
      </div>

      <div className={styles.gridOverlay} />

      <div className={styles.content}>
        <span className={styles.badge}>64-bit · written from scratch</span>
        <h1 className={styles.title}>Sinux</h1>
        <p className={styles.subtitle}>
          A minimal Unix-like operating system kernel, built from scratch in{' '}
          <strong>C</strong> and <strong>x86_64 Assembly</strong>. Boots via GRUB
          Multiboot2 on UEFI &amp; BIOS — real hardware or QEMU.
        </p>

        <div className={styles.buttons}>
          <Link className={styles.primaryBtn} to="/docs/intro">
            Get Started →
          </Link>
          <Link
            className={styles.secondaryBtn}
            to="https://github.com/CyberSinook/Sinux"
          >
            ★ View on GitHub
          </Link>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>14</span>
            <span className={styles.statLabel}>syscalls</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>Ring 3</span>
            <span className={styles.statLabel}>user mode</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>ext2</span>
            <span className={styles.statLabel}>persistent fs</span>
          </div>
        </div>
      </div>
    </header>
  );
}
