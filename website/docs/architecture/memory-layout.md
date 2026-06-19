---
sidebar_position: 3
title: Memory Layout
---

# Memory Layout

Sinux loads at the traditional **1 MiB** mark and manages physical memory above the kernel
through a bitmap-based physical memory manager (PMM).

```
0x000000 - 0x0FFFFF    Low memory (BIOS, reserved)
0x100000               Kernel load address (1 MiB)
0x200000               PMM bitmap
[kernel BSS]           Page tables, kernel stack (32 KiB)
[above kernel]         Free physical pages (PMM managed)
/                      ramfs (in RAM, lost on reboot)
/mnt/disk              ext2 on ATA drive (persistent)
/proc                  procfs (kernel info)
```

## Notes

- The **PMM bitmap** tracks which physical pages are free or used.
- The kernel stack is **32 KiB**.
- `/` is backed by **ramfs** and is therefore volatile — its contents are lost on reboot.
- `/mnt/disk` is backed by **ext2** on an ATA drive and provides persistent storage.
- `/proc` exposes kernel information via **procfs**.

See the [boot flow](./boot-flow) for how paging is enabled before the kernel runs.
