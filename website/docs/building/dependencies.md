---
sidebar_position: 1
title: Installing Dependencies
---

# Installing Dependencies

You need a few toolchain packages to build and run Sinux.

## System requirements

### Host (build machine)

| Component | Minimum |
| --- | --- |
| OS | Any Linux (Arch, Ubuntu, Fedora…) |
| Architecture | x86_64 |
| RAM | 512 MiB free |
| Disk | 1 GiB free |

### Target (QEMU or real hardware)

| Component | Requirement |
| --- | --- |
| CPU | x86_64 with Long Mode (post ~2003) |
| RAM | 64 MiB minimum, 256 MiB recommended |
| Firmware | BIOS or UEFI (Secure Boot must be OFF) |
| Disk | Optional ATA/IDE for persistent storage |

## Install packages

### Arch Linux

```bash
sudo pacman -S --needed \
    nasm grub xorriso mtools \
    qemu-system-x86 edk2-ovmf \
    gcc binutils make
```

### Ubuntu / Debian

```bash
sudo apt install \
    nasm grub-pc-bin grub-efi-amd64-bin \
    xorriso mtools \
    qemu-system-x86 ovmf \
    gcc binutils make
```

### Fedora / RHEL

```bash
sudo dnf install \
    nasm grub2-tools xorriso mtools \
    qemu-system-x86 edk2-ovmf \
    gcc binutils make
```

Once dependencies are installed, continue to [Building](./build).
