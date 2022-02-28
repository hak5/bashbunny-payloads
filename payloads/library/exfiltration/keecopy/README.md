# KeePass Automated Exporter

- Title:         KeeCopy
- Author:        jrwimmer
- Version:       1.0
- Target:        Windows Vista+
- Category:      Exfiltration

## Description

Performs keystroke automation to export an unencrypted copy of an unlocked KeePass database
The copy is saved to the loot folder on the Bash Bunny USB Mass Storage partition

Important Considerations:

This script makes the following assumptions.
- The target computer is unlocked
- The target computer has KeePass 2.x installed and running with an unlocked database
- KeePass only has one database open, or the desired database was the last one in focus
- KeePass is using the default "Show KeePass window" hot key of: `Ctrl + Alt + K`

## Configuration

Hot key settings and/or script tweaks may be necessary depending on the target system.

## STATUS

| LED      | Status                    |
| -------- | ------------------------- |
| STAGE1   | Determine output location |
| STAGE2   | Export database           |
| FINISH   | Payload complete          |

