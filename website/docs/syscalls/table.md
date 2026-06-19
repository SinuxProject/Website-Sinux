---
sidebar_position: 2
title: Supported Syscalls
---

# Supported Syscalls

The following system calls are currently implemented. Numbers match the Linux x86_64 syscall
table for compatibility.

| Number | Name | Description |
| --- | --- | --- |
| 0 | `read` | Read from fd |
| 1 | `write` | Write to fd |
| 2 | `open` | Open file |
| 3 | `close` | Close fd |
| 12 | `brk` | Set heap end |
| 22 | `pipe` | Create pipe |
| 39 | `getpid` | Get process ID |
| 57 | `fork` | Fork process |
| 59 | `execve` | Execute ELF binary |
| 60 | `exit` | Exit process |
| 61 | `wait4` | Wait for child |
| 62 | `kill` | Send signal |
| 110 | `getppid` | Get parent PID |
| 162 | `nanosleep` | Sleep |

See the [Syscall ABI](./abi) for the register calling convention.
