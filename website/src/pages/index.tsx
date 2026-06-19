import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Hero from '@site/src/components/Hero';
import Features from '@site/src/components/Features';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function QuickStart(): React.ReactElement {
  return (
    <section className={styles.quickstart}>
      <div className={styles.qsInner}>
        <div className={styles.qsText}>
          <h2 className={styles.qsHeading}>Build &amp; boot in minutes</h2>
          <p className={styles.qsSub}>
            Clone the repo, install the toolchain, and boot Sinux in QEMU. It runs on any
            x86_64 Linux host.
          </p>
          <Link className={styles.qsBtn} to="/docs/building/dependencies">
            Full build guide →
          </Link>
        </div>
        <div className={styles.qsCode}>
          <CodeBlock language="bash">
{`# Clone the source
git clone https://github.com/CyberSinook/Sinux.git
cd Sinux

# Build kernel + userspace
make

# Build bootable ISO (first time only)
make iso

# Boot it in QEMU
make run-bios`}
          </CodeBlock>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — 64-bit OS kernel`}
      description="A minimal 64-bit Unix-like operating system kernel written from scratch in C and x86_64 Assembly."
    >
      <Hero />
      <main>
        <Features />
        <QuickStart />
      </main>
    </Layout>
  );
}
