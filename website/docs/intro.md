---
sidebar_position: 1
slug: /intro
title: Introduction
---

# What is Sinux?

**Sinux** is a minimal 64-bit Unix-like operating system kernel written from scratch in **C** and **x86_64 Assembly**. It boots via GRUB Multiboot2, supports both **UEFI and BIOS**, and runs on real hardware or QEMU.

:::info It is not Linux
Sinux does **not** run Linux programs. It is an independent, educational kernel built to understand how real operating systems work at the lowest level.
:::

## Features

Sinux implements its own:

- 🧠 **Physical & virtual memory manager** (PMM + VMM)
- 📁 **VFS** (Virtual File System) with `ramfs` and `ext2` support
- 💾 **ATA PIO disk driver** for persistent storage
- ⌨️ **PS/2 keyboard** and **VGA text mode** drivers
- 🔌 **Serial (COM1)** debug output
- ⚙️ Low-level tables: **IDT, GDT, TSS, PIC, PIT**
- 🧩 **Syscall interface** (Linux x86_64 ABI compatible)
- 🔁 **Process scheduler** (round-robin)
- 📦 **ELF64 loader** for userspace programs
- 🛡️ **Ring 3** (user mode) execution
- 🔗 **Pipe and signal** primitives
- 🐚 Built-in **shell** with filesystem commands

## Quick links

- 📐 [Architecture overview](/docs/architecture/overview)
- 🚀 [Boot flow](/docs/architecture/boot-flow)
- 🧮 [Syscall ABI](/docs/syscalls/abi)
- 🛠️ [Build & run](/docs/building/dependencies)
- 💻 [Source on GitHub](https://github.com/CyberSinook/Sinux)

## Project status

Sinux is an active hobby project. The latest tagged release is **V0.04**. Follow the
[Updates](/blog) section for release notes and development progress.
