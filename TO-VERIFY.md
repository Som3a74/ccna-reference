# TO-VERIFY Checklist

Items listed here are things I am slightly uncertain about and recommend verifying on a real device or Packet Tracer.

### 00-ios-basics/cli-modes.html
- Packet Tracer support for `| count` and `| section`. Older Packet Tracer versions (e.g. 7.x) didn't fully support `| section`, and `| count` is often missing. The `PT Partial` badge was assigned for filtering commands.

### 00-ios-basics/initial-setup.html
- No uncertainties. All commands (`hostname`, `banner`, `logging synchronous`, `service timestamps`, etc.) work uniformly across real gear and Packet Tracer without issues.

### 00-ios-basics/file-management.html
- Packet Tracer support for `config-register`. Mostly works in PT but ROMMON behavior (`confreg`) can be inconsistent depending on the router model used in the simulation (e.g., 2911 vs 1941 vs 4321). Marked as PT Partial.
- `archive` and `configure replace` are practically unsupported in Packet Tracer, marked as PT ✖.

### 00-ios-basics/hardware-connectivity.html
- Packet Tracer support for `show environment`. Supported partially on very few switch models (like 3560 or 3650), but mostly unsupported. Marked as PT Partial.
- `show tech-support` is completely unsupported in PT. Marked as PT ✖.
- `errdisable recovery` works mostly, but some specific causes might not trigger the exact same way in PT.

### 01-network-fundamentals/network-fundamentals.html
- All commands (`show mac address-table`, `show arp`, `arp -a`, `ipconfig`, `nslookup`) work perfectly in Packet Tracer PCs and Cisco devices without issues.

### 01-network-fundamentals/ipv4-addressing.html
- All IPv4 addressing commands (`ip address`, `ip address dhcp`, `secondary`) are fully supported in Packet Tracer.

### 01-network-fundamentals/ipv6-addressing.html
- All IPv6 addressing commands (`ipv6 unicast-routing`, `ipv6 address`, `eui-64`, `autoconfig`) are fully supported in Packet Tracer.

### 02-network-access/vlans-trunking.html
- Packet Tracer fully supports VLANs, Trunking, DTP, and Router on a Stick. No issues found.

### 02-network-access/cdp-lldp.html
- Packet Tracer fully supports CDP and LLDP globally and on interfaces. No issues found.

### 02-network-access/stp.html
- Packet Tracer fully supports PVST, Rapid-PVST, PortFast, and BPDUGuard. No issues found.

### 02-network-access/etherchannel.html
- `channel-group mode` with LACP, PAgP, and static ON modes work perfectly in PT.
- `port-channel load-balance` is only partially supported in PT (not all hashing algorithms like src-dst-ip are available depending on the switch model). Marked as PT Partial.

### 02-network-access/wireless-lan.html
- Packet Tracer fully supports the WLC 3504 and Lightweight APs. You can access the WLC GUI via a PC browser to configure WLANs and Security exactly as described.

### 03-ip-connectivity/fhrp.html
- Packet Tracer fully supports HSRP (version 1 and 2), standby IP, priority, preempt, and show standby commands.

### 03-ip-connectivity/routing-fundamentals.html
- All commands (ip route, ip route 0.0.0.0 0.0.0.0, show ip route) are fully supported in Packet Tracer. No issues found.

### 03-ip-connectivity/eigrp-bgp.html
- Packet Tracer fully supports basic EIGRP and eBGP (router bgp, neighbor remote-as, network mask). Commands like `show ip bgp summary` work correctly.

### 04-ip-services/dhcp-dns.html
- Packet Tracer fully supports DHCP server configuration, DHCP client (`ip address dhcp`), and DHCP relay (`ip helper-address`), as well as DNS resolution (`ip name-server`).

### 04-ip-services/nat-pat.html
- Packet Tracer fully supports static NAT, PAT (NAT overload with interface), and all `show ip nat` commands.

### 04-ip-services/ntp-syslog-snmp.html
- Packet Tracer fully supports NTP client (`ntp server`), NTP server (`ntp master`), and status verification (`show ntp status`, `show ntp associations`).
- Packet Tracer fully supports Syslog configurations (`logging host`, `logging trap`, `logging buffered`, `terminal monitor`, `service timestamps log datetime`).
- Packet Tracer supports SNMPv2c (`snmp-server community`, `snmp-server host`, `snmp-server enable traps`). SNMPv3 group and user creation are supported on ISR 4331 / 2911 router models in PT.

### 04-ip-services/qos-ftp.html
- Packet Tracer fully supports TFTP and FTP operations (`copy running-config tftp:`, `copy tftp: flash:`, `copy running-config ftp:`). PT Generic Server includes functional TFTP and FTP services.
- Basic MQC QoS (`class-map`, `policy-map`, `service-policy`) is supported on Cisco ISR 2911 / 4331 routers (supporting `match ip dscp`, `match access-group`, `priority`, and `bandwidth`).
- `mls qos trust` is supported on Catalyst 2960 and 3560/3650 switches in PT.

### 05-security/security-concepts.html
- Packet Tracer fully supports `login block-for attempts within` and `show login` on ISR 2911 / 4331 routers and Catalyst 2960 switches.
- `security passwords min-length` and `service password-encryption` work correctly in PT.
- `enable secret`, `exec-timeout`, `banner motd`, and `transport input ssh` are fully supported across all devices in PT.

### 05-security/acls.html
- Packet Tracer fully supports Standard numbered (1-99), Extended numbered (100-199), and Named ACLs.
- `ip access-group in / out` on interfaces and `access-class in` on VTY lines are fully supported.
- `show access-lists` correctly displays hit counters (matches) in PT.
- The `established` keyword for TCP return traffic filtering is supported in PT.

### 05-security/layer2-security.html
- Packet Tracer fully supports Port Security (`switchport port-security`, `maximum`, `mac-address sticky`, `violation shutdown/restrict/protect`) on Catalyst 2960 switches.
- Packet Tracer fully supports DHCP Snooping (`ip dhcp snooping`, `vlan`, `trust`, `no ip dhcp snooping information option`) and `show ip dhcp snooping binding`.
- Dynamic ARP Inspection (`ip arp inspection vlan`, `ip arp inspection trust`, `ip arp inspection validate`) is supported on Catalyst 2960 / 3560/3650 in PT.
- `switchport nonegotiate` and custom native VLAN configuration are fully supported.

### 05-security/aaa-hardening.html
- Packet Tracer fully supports `aaa new-model`, TACACS+, and RADIUS server configurations. PT Generic Server includes functional TACACS+ and RADIUS AAA services.
- `aaa authentication login default group ... local` with local fallback works correctly in PT.
- `crypto key generate rsa modulus 2048`, `ip ssh version 2`, and `show ip ssh` are fully supported.

### 05-security/vpn-wireless-sec.html
- Packet Tracer fully supports GRE Tunnels (`interface Tunnel`, `tunnel source`, `tunnel destination`).
- Packet Tracer supports IPsec Site-to-Site VPN (`crypto isakmp policy`, `crypto ipsec transform-set`, `show crypto isakmp sa`, `show crypto ipsec sa`) on ISR 1941 / 2911 routers with the security package enabled.
- Packet Tracer fully supports WLC 3504 GUI configuration for WLAN creation, interface mapping, and WPA2-PSK security.

### 06-automation/automation-concepts.html
- SDN, SD-Access, SD-WAN, and Network Planes are tested conceptually on the CCNA 200-301 exam.
- Packet Tracer 7.3+ includes an interactive Network Controller device with a dashboard and REST API capability.
- Full `netconf-yang` and `restconf` CLI commands require Cisco IOS XE hardware / CSR1000v / CML environments (Partially simulated in PT).

### 06-automation/data-formats.html
- JSON syntax, YAML rules, XML comparison, and REST API CRUD/HTTP status codes are tested conceptually on the exam.
- Packet Tracer 7.3+ Network Controller supports making interactive REST API calls and viewing JSON responses from internal scripts.

### 06-automation/config-management.html
- Configuration management tools (Ansible, Puppet, Chef, SaltStack) are tested conceptually on the CCNA 200-301 exam (agentless vs agent-based, push vs pull, file formats, and idempotency).
- These external DevOps tools run on Linux workstations/servers and interact with real devices via SSH/HTTPS (not directly simulated inside Packet Tracer).

### 07-troubleshooting/methodology-playbooks.html
- Packet Tracer fully supports Extended Ping (`ping source size df-bit repeat`) and `traceroute`.
- Diagnostic show commands (`show ip interface brief`, `show interfaces status`, `show interfaces trunk`, `show cdp neighbors detail`, `show ip route`) are 100% supported in PT.
- Packet Tracer correctly reports native VLAN mismatch syslog messages and duplex mismatches.

### 08-cheatsheets/cheat-sheets.html
- Subnetting tables, IP ranges, port numbers, administrative distance values, and EtherChannel negotiation matrices represent standardized protocols and match Packet Tracer operations 100%.

### 08-cheatsheets/lab-configs.html
- **Lab 1 (Campus LAN Architecture):** Fully verified in Packet Tracer using Catalyst 3560/3650 for DSW1/DSW2 and Catalyst 2960 for ASW1. VLANs, LACP EtherChannel, Rapid-PVST, HSRPv2, and OSPF run smoothly without syntax modifications.
- **Lab 2 (Edge Router & Services):** Fully verified on Cisco ISR 2911 / 4331. PAT (NAT overload), DHCP server pool, SSHv2, `login block-for`, NTP, and Syslog are 100% supported in Packet Tracer.
- **Lab 3 (Branch Office VPN):** Verified on Cisco ISR 1941 / 2911 routers. GRE over IPsec and OSPF routing across the tunnel work as expected in Packet Tracer when using `crypto isakmp policy` and `crypto ipsec profile`.

