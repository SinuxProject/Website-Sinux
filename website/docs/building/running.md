---
sidebar_position: 3
title: Running
---

# Running Sinux

After [building](./build) the ISO, you can boot Sinux in QEMU.

## BIOS mode

```bash
make run-bios
```

## UEFI mode

```bash
make run-uefi
```

## Headless / serial

Run with output redirected to your terminal (useful over SSH or for logging):

```bash
make run-serial
```

## Debugging

Run with the QEMU interrupt log enabled:

```bash
make run-debug
```

:::tip Real hardware
Sinux can also boot on real x86_64 hardware. Write the ISO to a USB drive and make sure
**Secure Boot is OFF** in your firmware settings.
:::

Once booted, you'll land in the built-in shell with filesystem commands. Explore the
[architecture docs](/docs/architecture/overview) to understand what's running underneath.
