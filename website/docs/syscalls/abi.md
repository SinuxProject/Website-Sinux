---
sidebar_position: 1
title: Syscall ABI
---

# Syscall ABI

Sinux follows the **Linux x86_64 ABI** for system calls. Arguments are passed in registers
and the syscall number goes in `RAX`.

| Register | Role |
| --- | --- |
| `RAX` | syscall number |
| `RDI` | arg 1 |
| `RSI` | arg 2 |
| `RDX` | arg 3 |
| `R10` | arg 4 |
| `R8`  | arg 5 |
| `R9`  | arg 6 |
| `RAX` | return value |

:::tip
Because the register convention matches Linux, userspace code written against the Linux
x86_64 calling convention can issue syscalls in the same way — though only the
[supported syscall numbers](./table) are implemented.
:::

A userspace program issues a syscall with the `syscall` instruction after loading the
appropriate registers. The kernel's dispatch table (in `kernel/syscall/`) routes the call
to the correct handler.
