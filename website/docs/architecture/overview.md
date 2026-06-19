---
sidebar_position: 1
title: Overview
---

# Architecture Overview

Sinux is organized into clearly separated subsystems. Architecture-specific code lives under
`arch/`, while the portable kernel logic, memory managers, drivers, and userspace are kept apart.

## Source tree

```
sinux/
├── arch/x86_64/        Architecture-specific (GDT, IDT, PIC, PIT, syscall, boot)
├── kernel/
│   ├── core/           kernel_main, panic, multiboot2 parser
│   ├── proc/           Process management, ELF loader, scheduler, usermode
│   ├── fs/             VFS, ramfs, ext2, procfs
│   ├── ipc/            Pipes, signals
│   └── syscall/        Syscall dispatch table
├── mm/                 Physical (PMM) and virtual (VMM) memory managers
├── drivers/            VGA, serial, keyboard, TTY, ATA
├── lib/                string, printk, io.h
├── userspace/
│   ├── libc/           Minimal C library
│   └── hello/          Example userspace program
├── boot/               grub.cfg, linker.ld
└── scripts/            iso.mk, qemu.mk, mkdisk.sh
```

## Subsystem summary

| Subsystem | Responsibility |
| --- | --- |
| `arch/x86_64` | Low-level CPU setup: GDT, IDT, PIC, PIT, syscall entry, boot stub |
| `kernel/core` | Entry point, panic handling, Multiboot2 parsing |
| `kernel/proc` | Processes, scheduler, ELF64 loader, ring-3 transitions |
| `kernel/fs` | VFS abstraction over ramfs, ext2, and procfs |
| `kernel/ipc` | Pipes and signal delivery |
| `kernel/syscall` | Syscall dispatch table (Linux x86_64 ABI) |
| `mm` | Physical (PMM) and virtual (VMM) memory management |
| `drivers` | VGA text, serial COM1, PS/2 keyboard, TTY, ATA PIO |
| `userspace` | Minimal libc and example programs |

Continue to the [boot flow](./boot-flow) to see how the kernel comes up, or jump to the
[memory layout](./memory-layout).
