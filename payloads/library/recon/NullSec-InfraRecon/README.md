# NullSec Infrastructure Recon

**Author:** NullSec (bad-antics)  
**Version:** 1.0  
**Category:** Recon  
**Target:** Linux / macOS  
**Device:** Bash Bunny

## Description

Comprehensive network infrastructure reconnaissance payload for the Bash Bunny. Uses only native system tools to collect detailed information about the target's network infrastructure.

### Data Collected

| Category | Details |
|----------|---------|
| System | OS version, kernel, hostname, user context |
| Interfaces | All network interfaces with IPs and MACs |
| Routing | Full routing table |
| ARP | Neighbor table with MAC addresses |
| DNS | Resolver configuration |
| Services | All listening ports with process names |
| Connections | Active TCP connections |
| Firewall | iptables/ufw/pf rules |
| Shares | SMB and NFS shares |
| SSH | Server config, authorized keys, known hosts |
| Subnet | Ping sweep of the /24 gateway subnet |
| Containers | Docker/Podman running containers |
| Cron | Scheduled jobs |

## LED Status

| LED | Status |
|-----|--------|
| Magenta (solid) | Setting up |
| Yellow (blink) | Attack in progress |
| Green (blink) | Complete |
| Red (blink) | Failed |

## Output

Report saved to `udisk/loot/nullsec-infrarecon/infrarecon_YYYYMMDD_HHMMSS.txt`

## Setup

No configuration required. Deploy to switch position and insert.

## Notes

- Zero external dependencies — uses only native commands
- Parallel ping sweep for speed (~15 seconds for /24)
- For authorized penetration testing only
