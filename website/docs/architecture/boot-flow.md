---
sidebar_position: 2
title: Boot Flow
---

# Boot Flow

Sinux boots through GRUB 2 using the Multiboot2 protocol, transitions from 32-bit protected
mode to 64-bit long mode, and finally jumps into the C entry point `kernel_main()`.

```
BIOS/UEFI → GRUB 2 → Multiboot2
  → boot.asm (32-bit)
      ├── Validate Multiboot2 magic
      ├── Check CPUID + Long Mode support
      ├── Build PML4/PDPT/PDT page tables (identity map first 1 GiB)
      ├── Enable PAE + LME + Paging
      ├── Load 64-bit GDT
      └── Jump to kernel_main() (64-bit C)
```

## Stages explained

1. **Firmware (BIOS/UEFI)** loads GRUB. Secure Boot must be **OFF**.
2. **GRUB 2** loads the kernel using the **Multiboot2** specification and passes a boot
   information structure.
3. **`boot.asm`** runs in 32-bit mode and:
   - Validates the Multiboot2 magic value.
   - Uses `CPUID` to confirm **Long Mode** (64-bit) support.
   - Builds page tables (PML4 → PDPT → PDT) that identity-map the first **1 GiB**.
   - Enables **PAE**, the **LME** bit, and **paging**.
   - Loads the 64-bit **GDT**.
   - Far-jumps into 64-bit `kernel_main()`.

From there, the C kernel initializes the memory managers, drivers, filesystem, and scheduler
before dropping into the built-in shell.
