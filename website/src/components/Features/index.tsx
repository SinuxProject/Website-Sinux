import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Feature = {
  icon: string;
  title: string;
  description: string;
  to?: string;
};

const FEATURES: Feature[] = [
  {
    icon: '🧠',
    title: 'Memory Management',
    description:
      'Bitmap-based physical memory manager (PMM) and a virtual memory manager (VMM) with full paging.',
    to: '/docs/architecture/memory-layout',
  },
  {
    icon: '📁',
    title: 'Virtual File System',
    description:
      'A VFS layer over ramfs, ext2 (persistent on ATA disk), and procfs for kernel introspection.',
    to: '/docs/architecture/overview',
  },
  {
    icon: '🧩',
    title: 'Linux-style Syscalls',
    description:
      'A syscall interface compatible with the Linux x86_64 ABI — read, write, fork, execve, and more.',
    to: '/docs/syscalls/abi',
  },
  {
    icon: '📦',
    title: 'ELF64 Loader',
    description:
      'Loads and executes userspace ELF64 binaries in Ring 3, with its own minimal C library.',
    to: '/docs/architecture/overview',
  },
  {
    icon: '🔁',
    title: 'Process Scheduler',
    description:
      'A round-robin scheduler with fork, wait, pipes, and signal primitives for real multitasking.',
    to: '/docs/architecture/overview',
  },
  {
    icon: '🚀',
    title: 'Multiboot2 Boot',
    description:
      'Boots via GRUB 2 on both UEFI and BIOS, transitioning from 32-bit to 64-bit long mode.',
    to: '/docs/architecture/boot-flow',
  },
];

export default function Features(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Everything, from scratch</h2>
        <p className={styles.sub}>
          Sinux is an independent kernel — not Linux. Every subsystem is built by hand to
          understand how operating systems really work.
        </p>

        <div className={styles.grid}>
          {FEATURES.map((f) => {
            const card = (
              <div className={styles.card} key={f.title}>
                <div className={styles.cardIcon}>{f.icon}</div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.description}</p>
              </div>
            );
            return f.to ? (
              <Link key={f.title} to={f.to} className={styles.cardLink}>
                {card}
              </Link>
            ) : (
              card
            );
          })}
        </div>
      </div>
    </section>
  );
}
