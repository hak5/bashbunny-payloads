# EDR/XDR Telemetry Flooder (Bash Bunny Payload)

![Category](https://img.shields.io/badge/Category-Red%20Team%20%2F%20Simulation-red)
![Platform](https://img.shields.io/badge/Platform-Bash%20Bunny-blue)
![Target](https://img.shields.io/badge/Target-Windows%20%2F%20Linux-lightgrey)

## 📌 Overview

**EDR/XDR Telemetry Flooder** is a Bash Bunny payload designed for Red Team and Purple Team simulations. It tests the detection, alerting, and incident response capabilities of Security Operations Centers (SOC) and EDR/XDR solutions.

The primary objective of this tool is to saturate security telemetry channels by generating a high volume of high-priority, yet benign, security alerts (Benign Noise) on the target host within a short timeframe. It allows teams to measure analyst alert fatigue and evaluate SOC efficiency in detecting true positives hidden within noise.

---

## 🔬 How It Works

1. **Dual-Mode Initialization:** The Bash Bunny mounts as both an **HID** (Keyboard Emulation) and **Storage** device.
2. **Noise Generation:** Executes a sequence of benign commands designed to trigger common EDR detection rules (Sigma, YARA, MITRE ATT&CK signatures):
   - **Discovery:** Rapid loops of `whoami`, `netstat`, `nltest`, and `systeminfo`.
   - **Registry Auditing:** Queries sensitive registry keys using `reg query`.
   - **Process Creation:** Rapid spawning of legitimate system tools (`cmd.exe`, `powershell.exe`) with varied arguments.
3. **Log & Cleanup:** Concludes execution by clearing temporary artifacts and gracefully closing the session.

---

## 📂 Repository Structure

```text

├── payload.sh # the payload         
├── core/
|   └── noise-marker.ps1 # the script that makes noise to blind the EDR/XDR
├── README.md # here is the description of the payload
├── loot/ # here is the loot

```

## 🛡️ Detection & Remediation (Blue Team Guidance)
### Recommended assessment steps for SOC analysts and Security Engineers:

- Rate Limiting / Threshold Rules: Implement meta-rules to detect an unusually high volume of execution calls originating from a single parent process tree within a short window (e.g., <10 seconds).

- Parent Process Anomaly: Monitor for cmd.exe or powershell.exe processes spawned from hardware-level emulation or unusual parent processes.

- Alert Prioritization: Shift from single-command alerting to correlation rules that aggregate low-severity discovery events into a high-confidence incident score.

## ⚠️ !!! Disclaimer !!! ⚠️

This tool is intended strictly for authorized security testing, Purple Team exercises, and educational purposes. Unauthorized deployment against systems without explicit prior consent is illegal and violates professional codes of conduct. The developers assume no liability for misuse.