const navData = [
  {
    category: "00 — أساسيات IOS وإدارة الأجهزة (IOS Basics)",
    pages: [
      { file: "00-ios-basics/cli-modes.html", title: "أوضاع CLI والتنقل (CLI Modes)" },
      { file: "00-ios-basics/initial-setup.html", title: "الإعداد المبدئي (Initial Setup)" },
      { file: "00-ios-basics/file-management.html", title: "إدارة الملفات (File Management)" },
      { file: "00-ios-basics/hardware-connectivity.html", title: "فحص الأجهزة والاتصال (Hardware & Connectivity)" }
    ]
  },
  {
    category: "01 — أساسيات الشبكات (Network Fundamentals)",
    pages: [
      { file: "01-network-fundamentals/network-fundamentals.html", title: "مفاهيم الشبكات (Network Concepts)" },
      { file: "01-network-fundamentals/ipv4-addressing.html", title: "عناوين IPv4 (IPv4 Addressing)" },
      { file: "01-network-fundamentals/ipv6-addressing.html", title: "عناوين IPv6 (IPv6 Addressing)" }
    ]
  },
  {
    category: "02 — الوصول للشبكة (Network Access)",
    pages: [
      { file: "02-network-access/vlans-trunking.html", title: "الـ VLANs والـ Trunking" },
      { file: "02-network-access/cdp-lldp.html", title: "بروتوكولات CDP & LLDP" },
      { file: "02-network-access/stp.html", title: "بروتوكول STP" },
      { file: "02-network-access/etherchannel.html", title: "الـ EtherChannel" },
      { file: "02-network-access/wireless-lan.html", title: "الشبكات اللاسلكية (Wireless LAN)" }
    ]
  },
  {
    category: "03 — اتصال IP (IP Connectivity)",
    pages: [
      { file: "03-ip-connectivity/routing-fundamentals.html", title: "أساسيات التوجيه (Routing Fundamentals)" },
      { file: "03-ip-connectivity/ospfv2-single-area.html", title: "بروتوكول OSPFv2 (Single Area)" },
      { file: "03-ip-connectivity/fhrp.html", title: "بروتوكولات FHRP (HSRP/VRRP)" },
      { file: "03-ip-connectivity/eigrp-bgp.html", title: "بروتوكولات EIGRP & BGP (إضافي)" }
    ]
  },
  {
    category: "04 — خدمات IP (IP Services)",
    pages: [
      { file: "04-ip-services/dhcp-dns.html", title: "خدمات DHCP & DNS" },
      { file: "04-ip-services/nat-pat.html", title: "تقنية NAT & PAT" },
      { file: "04-ip-services/ntp-syslog-snmp.html", title: "بروتوكولات NTP, Syslog, SNMP" },
      { file: "04-ip-services/qos-ftp.html", title: "جودة الخدمة (QoS) ونقل الملفات" }
    ]
  },
  {
    category: "05 — أساسيات الحماية (Security Fundamentals)",
    pages: [
      { file: "05-security/security-concepts.html", title: "مفاهيم الحماية (Security Concepts)" },
      { file: "05-security/acls.html", title: "قوائم التحكم (ACLs)" },
      { file: "05-security/layer2-security.html", title: "حماية الطبقة الثانية (L2 Security)" },
      { file: "05-security/aaa-hardening.html", title: "نظام AAA وتقوية الأجهزة" },
      { file: "05-security/vpn-wireless-sec.html", title: "شبكات VPN وحماية اللاسلكي" }
    ]
  },
  {
    category: "06 — الأتمتة والبرمجة (Automation & Programmability)",
    pages: [
      { file: "06-automation/automation-concepts.html", title: "مفاهيم الأتمتة (Automation Concepts)" },
      { file: "06-automation/data-formats.html", title: "صيغ البيانات (JSON, XML, YAML)" },
      { file: "06-automation/config-management.html", title: "إدارة الإعدادات (Config Management)" }
    ]
  },
  {
    category: "07 — فحص الأعطال (Troubleshooting)",
    pages: [
      { file: "07-troubleshooting/methodology-playbooks.html", title: "منهجية الفحص وسيناريوهات الأعطال" }
    ]
  },
  {
    category: "08 — مراجع سريعة (Cheat Sheets)",
    pages: [
      { file: "08-cheatsheets/cheat-sheets.html", title: "جداول ومراجع سريعة (Cheat Sheets)" },
      { file: "08-cheatsheets/lab-configs.html", title: "إعدادات اللاب الكاملة (Lab Configs)" }
    ]
  }
];
