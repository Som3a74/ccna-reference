const searchIndex = [
  {
    title: "router ospf",
    page: "03-ip-connectivity/ospfv2-single-area.html",
    anchor: "router-ospf",
    keywords: ["router ospf", "ospf", "اوسبف", "توجيه", "routing"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "router-id",
    page: "03-ip-connectivity/ospfv2-single-area.html",
    anchor: "router-id",
    keywords: ["router-id", "id", "اسم الراوتر", "تعريف", "ospf"],
    mode: "Router(config-router)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "network (OSPF)",
    page: "03-ip-connectivity/ospfv2-single-area.html",
    anchor: "network-ospf",
    keywords: ["network", "area", "wildcard", "شبكة", "منطقة", "اعلان"],
    mode: "Router(config-router)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "passive-interface",
    page: "03-ip-connectivity/ospfv2-single-area.html",
    anchor: "passive-interface",
    keywords: ["passive-interface", "passive", "صامت", "واجهة", "منع"],
    mode: "Router(config-router)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "default-information originate",
    page: "03-ip-connectivity/ospfv2-single-area.html",
    anchor: "default-information-originate",
    keywords: ["default-information originate", "default route", "مسار افتراضي", "توزيع", "ospf"],
    mode: "Router(config-router)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "auto-cost reference-bandwidth",
    page: "03-ip-connectivity/ospfv2-single-area.html",
    anchor: "auto-cost",
    keywords: ["auto-cost reference-bandwidth", "cost", "bandwidth", "تكلفة", "سرعة", "ospf"],
    mode: "Router(config-router)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip ospf cost",
    page: "03-ip-connectivity/ospfv2-single-area.html",
    anchor: "ip-ospf-cost",
    keywords: ["ip ospf cost", "cost", "تكلفة", "تغيير", "ospf"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip ospf hello-interval / dead-interval",
    page: "03-ip-connectivity/ospfv2-single-area.html",
    anchor: "timers",
    keywords: ["ip ospf hello-interval", "dead-interval", "timers", "وقت", "مؤقت", "ospf"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip ospf priority",
    page: "03-ip-connectivity/ospfv2-single-area.html",
    anchor: "ip-ospf-priority",
    keywords: ["ip ospf priority", "priority", "dr", "bdr", "اولوية", "انتخاب", "ospf"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip ospf network point-to-point",
    page: "03-ip-connectivity/ospfv2-single-area.html",
    anchor: "point-to-point",
    keywords: ["ip ospf network point-to-point", "point-to-point", "p2p", "شبكة مباشر", "ospf"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "maximum-paths",
    page: "03-ip-connectivity/ospfv2-single-area.html",
    anchor: "maximum-paths",
    keywords: ["maximum-paths", "load balancing", "توزيع احمال", "مسارات", "ospf"],
    mode: "Router(config-router)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "enable",
    page: "00-ios-basics/cli-modes.html",
    anchor: "enable",
    keywords: ["enable", "en", "privilege", "وضع امتياز"],
    mode: "Router>",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "disable",
    page: "00-ios-basics/cli-modes.html",
    anchor: "disable",
    keywords: ["disable", "خروج", "صلاحيات اقل"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "configure terminal",
    page: "00-ios-basics/cli-modes.html",
    anchor: "configure-terminal",
    keywords: ["configure terminal", "conf t", "اعدادات", "وضع"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "exit",
    page: "00-ios-basics/cli-modes.html",
    anchor: "exit-end",
    keywords: ["exit", "خروج", "رجوع"],
    mode: "Any",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "end (Ctrl+Z)",
    page: "00-ios-basics/cli-modes.html",
    anchor: "exit-end",
    keywords: ["end", "ctrl+z", "خروج كامل", "وضع امتياز"],
    mode: "Config",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "do",
    page: "00-ios-basics/cli-modes.html",
    anchor: "do",
    keywords: ["do", "تنفيذ", "show", "اعدادات"],
    mode: "Config",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show running-config | filter",
    page: "00-ios-basics/cli-modes.html",
    anchor: "filtering",
    keywords: ["include", "exclude", "section", "begin", "بحث", "فلتر"],
    mode: "Router#",
    tags: ["Exam", "PT Partial"]
  },
  {
    title: "terminal length 0",
    page: "00-ios-basics/cli-modes.html",
    anchor: "terminal-length",
    keywords: ["terminal length 0", "more", "شاشة كاملة", "عرض"],
    mode: "Router#",
    tags: ["Extra", "PT ✔"]
  },
  {
    title: "Keyboard Shortcuts",
    page: "00-ios-basics/cli-modes.html",
    anchor: "summary",
    keywords: ["ctrl+a", "ctrl+e", "ctrl+shift+6", "tab", "اختصارات", "لوحة مفاتيح"],
    mode: "Any",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "hostname",
    page: "00-ios-basics/initial-setup.html",
    anchor: "hostname",
    keywords: ["hostname", "اسم", "تغيير اسم"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "no ip domain-lookup",
    page: "00-ios-basics/initial-setup.html",
    anchor: "no-ip-domain-lookup",
    keywords: ["no ip domain-lookup", "dns", "تعليق", "بحث"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "banner motd",
    page: "00-ios-basics/initial-setup.html",
    anchor: "banner",
    keywords: ["banner", "motd", "login", "exec", "رسالة", "تحذير"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "clock set",
    page: "00-ios-basics/initial-setup.html",
    anchor: "clock-set",
    keywords: ["clock set", "وقت", "تاريخ", "ساعة"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "service timestamps",
    page: "00-ios-basics/initial-setup.html",
    anchor: "service-timestamps",
    keywords: ["service timestamps", "log datetime msec", "وقت الاحداث", "log"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "logging synchronous",
    page: "00-ios-basics/initial-setup.html",
    anchor: "logging-synchronous",
    keywords: ["logging synchronous", "رسائل", "تداخل"],
    mode: "Router(config-line)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "exec-timeout",
    page: "00-ios-basics/initial-setup.html",
    anchor: "exec-timeout",
    keywords: ["exec-timeout", "مهلة", "فصل", "طرد"],
    mode: "Router(config-line)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "description",
    page: "00-ios-basics/initial-setup.html",
    anchor: "description",
    keywords: ["description", "وصف", "ملاحظة"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show running-config / startup-config",
    page: "00-ios-basics/file-management.html",
    anchor: "show-config",
    keywords: ["show running-config", "show startup-config", "اعدادات", "حفظ", "ram", "nvram"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "copy running-config startup-config",
    page: "00-ios-basics/file-management.html",
    anchor: "copy-run-start",
    keywords: ["copy running-config startup-config", "write memory", "wr", "حفظ", "save"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "copy tftp",
    page: "00-ios-basics/file-management.html",
    anchor: "copy-tftp",
    keywords: ["copy tftp", "backup", "نسخة احتياطية", "سيرفر"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "erase startup-config",
    page: "00-ios-basics/file-management.html",
    anchor: "erase-startup",
    keywords: ["erase startup-config", "ضبط مصنع", "مسح", "delete"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "reload",
    page: "00-ios-basics/file-management.html",
    anchor: "reload",
    keywords: ["reload", "restart", "reboot", "ريستارت"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show flash / dir",
    page: "00-ios-basics/file-management.html",
    anchor: "show-flash",
    keywords: ["show flash", "dir", "ملفات", "مساحة", "vlan.dat"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "boot system",
    page: "00-ios-basics/file-management.html",
    anchor: "boot-system",
    keywords: ["boot system", "os", "ios", "تشغيل", "اقلاع"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "config-register",
    page: "00-ios-basics/file-management.html",
    anchor: "config-register",
    keywords: ["config-register", "0x2142", "0x2102", "password recovery", "باسوورد"],
    mode: "Router(config)#",
    tags: ["Exam", "PT Partial"]
  },
  {
    title: "archive / configure replace",
    page: "00-ios-basics/file-management.html",
    anchor: "archive",
    keywords: ["archive", "configure replace", "backup", "رجوع", "تلقائي"],
    mode: "Router(config)#",
    tags: ["Extra", "PT ✖"]
  },
  {
    title: "show version",
    page: "00-ios-basics/file-management.html",
    anchor: "verification",
    keywords: ["show version", "uptime", "مواصفات", "register", "نسخة"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show inventory",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "show-inventory",
    keywords: ["show inventory", "قطع", "سيريال", "serial", "hardware"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show environment",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "show-env",
    keywords: ["show environment", "حرارة", "temperature", "مراوح"],
    mode: "Router#",
    tags: ["Exam", "PT Partial"]
  },
  {
    title: "show processes cpu / memory",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "show-cpu-mem",
    keywords: ["show processes cpu", "show memory", "معالج", "رام", "استهلاك"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show tech-support",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "show-tech",
    keywords: ["show tech-support", "دعم فني", "tac", "تفريغ"],
    mode: "Router#",
    tags: ["Exam", "PT ✖"]
  },
  {
    title: "ping (Basic & Extended)",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "ping",
    keywords: ["ping", "extended ping", "اختبار", "اتصال", "تواصل"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "traceroute",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "traceroute",
    keywords: ["traceroute", "tracert", "تتبع مسار", "تتبع"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "telnet / ssh",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "telnet-ssh",
    keywords: ["telnet", "ssh", "دخول عن بعد", "اتصال"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "terminal monitor",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "terminal-monitor",
    keywords: ["terminal monitor", "عرض رسائل", "ssh", "syslog", "debug"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "debug / undebug all",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "debug",
    keywords: ["debug", "undebug", "un all", "مراقبة", "تحليل", "لحظي"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "interface / interface range",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "interface-config",
    keywords: ["interface", "range", "منفذ", "منافذ", "دخول"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "shutdown / no shutdown",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "shutdown",
    keywords: ["shutdown", "no shutdown", "قفل", "فتح", "تشغيل"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "speed / duplex / mdix auto",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "speed-duplex",
    keywords: ["speed", "duplex", "mdix auto", "سرعة", "كابل", "تخاطب"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "errdisable recovery",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "errdisable-recovery",
    keywords: ["errdisable recovery", "اعادة تشغيل", "تلقائي", "حماية"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip interface brief",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "verification",
    keywords: ["show ip interface brief", "حالة المنافذ", "ملخص"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show interfaces description",
    page: "00-ios-basics/initial-setup.html",
    anchor: "verification",
    keywords: ["show interfaces description", "وصف المنافذ", "description", "حالة المنافذ"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show interfaces status",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "verification",
    keywords: ["show interfaces status", "سويتش", "duplex", "speed"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show interfaces (Counters/Errors)",
    page: "00-ios-basics/hardware-connectivity.html",
    anchor: "verification",
    keywords: ["show interfaces", "errors", "crc", "runts", "giants", "collisions", "اخطاء"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show mac address-table",
    page: "01-network-fundamentals/network-fundamentals.html",
    anchor: "mac-address-table",
    keywords: ["show mac address-table", "mac", "جدول", "سويتش"],
    mode: "Switch#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show arp",
    page: "01-network-fundamentals/network-fundamentals.html",
    anchor: "show-arp",
    keywords: ["show arp", "clear arp-cache", "arp", "ربط"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "arp -a",
    page: "01-network-fundamentals/network-fundamentals.html",
    anchor: "arp-a",
    keywords: ["arp -a", "windows", "pc", "كمبيوتر", "ربط"],
    mode: "C:\\>",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ipconfig",
    page: "01-network-fundamentals/network-fundamentals.html",
    anchor: "ipconfig",
    keywords: ["ipconfig", "/all", "/release", "/renew", "/flushdns", "flushdns", "ip", "dns", "كمبيوتر"],
    mode: "C:\\>",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "nslookup",
    page: "01-network-fundamentals/network-fundamentals.html",
    anchor: "nslookup",
    keywords: ["nslookup", "dns", "موقع", "اسم"],
    mode: "C:\\>",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip address (Static)",
    page: "01-network-fundamentals/ipv4-addressing.html",
    anchor: "ip-address",
    keywords: ["ip address", "عنوان", "ipv4", "static", "يدوي"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip address dhcp",
    page: "01-network-fundamentals/ipv4-addressing.html",
    anchor: "ip-address-dhcp",
    keywords: ["ip address dhcp", "سحب", "تلقائي", "ديناميكي", "client"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "secondary ip address",
    page: "01-network-fundamentals/ipv4-addressing.html",
    anchor: "ip-address-secondary",
    keywords: ["secondary ip", "عنوان ثاني", "اضافي"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "no ip address",
    page: "01-network-fundamentals/ipv4-addressing.html",
    anchor: "common-mistakes",
    keywords: ["no ip address", "مسح ip", "حذف", "ازالة"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show protocols",
    page: "01-network-fundamentals/ipv4-addressing.html",
    anchor: "verification",
    keywords: ["show protocols", "قناع", "mask", "prefix"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ipv6 unicast-routing",
    page: "01-network-fundamentals/ipv6-addressing.html",
    anchor: "ipv6-unicast-routing",
    keywords: ["ipv6 unicast-routing", "توجيه", "تفعيل", "راوتر", "routing", "slaac", "ra"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ipv6 address (Static)",
    page: "01-network-fundamentals/ipv6-addressing.html",
    anchor: "ipv6-address",
    keywords: ["ipv6 address", "عنوان", "global unicast", "static", "يدوي"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ipv6 address eui-64",
    page: "01-network-fundamentals/ipv6-addressing.html",
    anchor: "ipv6-eui64",
    keywords: ["ipv6 address eui-64", "mac", "استنتاج", "تلقائي", "fffe"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ipv6 address autoconfig",
    page: "01-network-fundamentals/ipv6-addressing.html",
    anchor: "ipv6-autoconfig",
    keywords: ["ipv6 address autoconfig", "slaac", "سحب", "ra"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ipv6 enable",
    page: "01-network-fundamentals/ipv6-addressing.html",
    anchor: "ipv6-enable",
    keywords: ["ipv6 enable", "link-local", "محلية", "fe80"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ipv6 interface brief",
    page: "01-network-fundamentals/ipv6-addressing.html",
    anchor: "verification",
    keywords: ["show ipv6 interface brief", "حالة المنافذ", "ملخص"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ipv6 interface",
    page: "01-network-fundamentals/ipv6-addressing.html",
    anchor: "verification",
    keywords: ["show ipv6 interface", "multicast", "groups", "تفاصيل"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "vlan / name",
    page: "02-network-access/vlans-trunking.html",
    anchor: "create-vlan",
    keywords: ["vlan", "name", "انشاء شبكة", "تسمية", "تخيلية"],
    mode: "Switch(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "switchport mode access",
    page: "02-network-access/vlans-trunking.html",
    anchor: "switchport-access",
    keywords: ["switchport mode access", "switchport access vlan", "voice vlan", "كمبيوتر", "تليفون", "اكسس"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "switchport mode trunk",
    page: "02-network-access/vlans-trunking.html",
    anchor: "switchport-trunk",
    keywords: ["switchport mode trunk", "encapsulation dot1q", "802.1q", "isl", "nonegotiate", "ربط", "ترانك", "dtp"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "switchport trunk allowed / native",
    page: "02-network-access/vlans-trunking.html",
    anchor: "trunk-allowed-native",
    keywords: ["switchport trunk allowed vlan", "native vlan", "add", "مسموح", "حماية", "hopping"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "switchport mode dynamic (DTP)",
    page: "02-network-access/vlans-trunking.html",
    anchor: "dtp-modes",
    keywords: ["dtp", "switchport mode dynamic auto", "desirable", "تفاوض", "تلقائي"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "Router on a Stick",
    page: "02-network-access/vlans-trunking.html",
    anchor: "router-on-a-stick",
    keywords: ["router on a stick", "sub-interface", "encapsulation dot1q", "inter-vlan", "وهمي", "ربط"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show vlan brief",
    page: "02-network-access/vlans-trunking.html",
    anchor: "verification",
    keywords: ["show vlan brief", "عرض", "جدول", "في لان"],
    mode: "Switch#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show interfaces trunk",
    page: "02-network-access/vlans-trunking.html",
    anchor: "verification",
    keywords: ["show interfaces trunk", "حالة", "ربط", "allowed"],
    mode: "Switch#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show interfaces switchport",
    page: "02-network-access/vlans-trunking.html",
    anchor: "verification",
    keywords: ["show interfaces switchport", "تفاصيل", "منفذ", "negotiation", "administrative"],
    mode: "Switch#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "cdp run",
    page: "02-network-access/cdp-lldp.html",
    anchor: "cdp-run",
    keywords: ["cdp run", "cdp", "اكتشاف", "سيسكو", "global", "جار"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "cdp enable",
    page: "02-network-access/cdp-lldp.html",
    anchor: "cdp-enable",
    keywords: ["cdp enable", "منفذ", "حماية", "جار"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "lldp run",
    page: "02-network-access/cdp-lldp.html",
    anchor: "lldp-run",
    keywords: ["lldp run", "lldp", "معيار", "اكتشاف", "global"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "lldp transmit / receive",
    page: "02-network-access/cdp-lldp.html",
    anchor: "lldp-transmit-receive",
    keywords: ["lldp transmit", "lldp receive", "ارسال", "استقبال", "منفذ"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show cdp/lldp neighbors",
    page: "02-network-access/cdp-lldp.html",
    anchor: "verification",
    keywords: ["show cdp neighbors", "show lldp neighbors", "local int", "port id", "جيران", "جدول"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show cdp/lldp neighbors detail",
    page: "02-network-access/cdp-lldp.html",
    anchor: "verification",
    keywords: ["show cdp neighbors detail", "تفاصيل", "ip", "ios", "version"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "spanning-tree mode",
    page: "02-network-access/stp.html",
    anchor: "stp-mode",
    keywords: ["spanning-tree mode rapid-pvst", "pvst", "نسخة", "سريعة"],
    mode: "Switch(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "spanning-tree root",
    page: "02-network-access/stp.html",
    anchor: "stp-root",
    keywords: ["spanning-tree vlan root primary", "secondary", "قائد", "مركز"],
    mode: "Switch(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "spanning-tree priority",
    page: "02-network-access/stp.html",
    anchor: "stp-priority",
    keywords: ["spanning-tree priority", "اولوية", "4096", "انتخابات"],
    mode: "Switch(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "spanning-tree portfast",
    page: "02-network-access/stp.html",
    anchor: "stp-portfast",
    keywords: ["spanning-tree portfast", "سريع", "كمبيوتر", "فوري"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "spanning-tree bpduguard",
    page: "02-network-access/stp.html",
    anchor: "stp-bpduguard",
    keywords: ["spanning-tree bpduguard enable", "حماية", "سويتش غريب", "errdisable"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show spanning-tree",
    page: "02-network-access/stp.html",
    anchor: "verification",
    keywords: ["show spanning-tree", "root id", "bridge id", "قائد", "مقفول"],
    mode: "Switch#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "channel-group mode",
    page: "02-network-access/etherchannel.html",
    anchor: "channel-group",
    keywords: ["channel-group mode", "active", "passive", "desirable", "auto", "on", "lacp", "pagp", "دمج", "تجميع"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "interface port-channel",
    page: "02-network-access/etherchannel.html",
    anchor: "interface-port-channel",
    keywords: ["interface port-channel", "وهمي", "دمج", "تجميع"],
    mode: "Switch(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "port-channel load-balance",
    page: "02-network-access/etherchannel.html",
    anchor: "load-balance",
    keywords: ["port-channel load-balance", "src-mac", "dst-ip", "توزيع", "حمل"],
    mode: "Switch(config)#",
    tags: ["Exam", "PT Partial"]
  },
  {
    title: "show etherchannel summary",
    page: "02-network-access/etherchannel.html",
    anchor: "verification",
    keywords: ["show etherchannel summary", "su", "sd", "p", "i", "حالة", "تجميع"],
    mode: "Switch#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "wireless wlc setup",
    page: "02-network-access/wireless-lan.html",
    anchor: "quick-config",
    keywords: ["wireless", "wlc", "ap", "trunk", "access", "وايرلس", "شبكة"],
    mode: "Switch(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show power inline",
    page: "02-network-access/wireless-lan.html",
    anchor: "verification",
    keywords: ["show power inline", "poe", "كهرباء", "ap"],
    mode: "Switch#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "wireless gui (WLAN/Security)",
    page: "02-network-access/wireless-lan.html",
    anchor: "step-by-step",
    keywords: ["wlc gui", "wlan", "ssid", "wpa2", "psk", "802.1x", "حماية"],
    mode: "WLC GUI",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip route (Static Route)",
    page: "03-ip-connectivity/routing-fundamentals.html",
    anchor: "ip-route-static",
    keywords: ["ip route", "static", "مسار ثابت", "توجيه"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip route 0.0.0.0 (Default Route)",
    page: "03-ip-connectivity/routing-fundamentals.html",
    anchor: "ip-route-default",
    keywords: ["ip route 0.0.0.0", "default route", "gateway", "مسار افتراضي", "اخير"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "Floating Static Route",
    page: "03-ip-connectivity/routing-fundamentals.html",
    anchor: "floating-static-route",
    keywords: ["floating", "ad", "احتياطي", "مسار", "administrative distance"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip route",
    page: "03-ip-connectivity/routing-fundamentals.html",
    anchor: "show-ip-route",
    keywords: ["show ip route", "routing table", "جدول التوجيه", "مسارات"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip route static",
    page: "03-ip-connectivity/routing-fundamentals.html",
    anchor: "show-ip-route-static",
    keywords: ["show ip route static", "مسارات ثابتة", "جدول"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip route <ip>",
    page: "03-ip-connectivity/routing-fundamentals.html",
    anchor: "show-ip-route-ip",
    keywords: ["show ip route", "توجيه", "مسار", "longest match"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "standby version",
    page: "03-ip-connectivity/fhrp.html",
    anchor: "standby-version",
    keywords: ["standby version 2", "hsrp", "vrrp", "fhrp", "اصدار"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "standby ip",
    page: "03-ip-connectivity/fhrp.html",
    anchor: "standby-ip",
    keywords: ["standby ip", "hsrp", "وهمي", "virtual ip", "gateway"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "standby priority",
    page: "03-ip-connectivity/fhrp.html",
    anchor: "standby-priority",
    keywords: ["standby priority", "اولوية", "active", "standby"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "standby preempt",
    page: "03-ip-connectivity/fhrp.html",
    anchor: "standby-preempt",
    keywords: ["standby preempt", "استرجاع", "قيادة", "طرد"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show standby brief",
    page: "03-ip-connectivity/fhrp.html",
    anchor: "show-standby-brief",
    keywords: ["show standby brief", "hsrp", "حالة", "ملخص"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "router eigrp",
    page: "03-ip-connectivity/eigrp-bgp.html",
    anchor: "router-eigrp",
    keywords: ["router eigrp", "توجيه", "eigrp", "as", "wildcard"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "router bgp",
    page: "03-ip-connectivity/eigrp-bgp.html",
    anchor: "router-bgp",
    keywords: ["router bgp", "توجيه", "bgp", "as", "انترنت"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "neighbor remote-as",
    page: "03-ip-connectivity/eigrp-bgp.html",
    anchor: "router-bgp",
    keywords: ["neighbor remote-as", "جار", "bgp", "ebgp"],
    mode: "Router(config-router)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip bgp summary",
    page: "03-ip-connectivity/eigrp-bgp.html",
    anchor: "show-ip-bgp-summary",
    keywords: ["show ip bgp summary", "pfxrcd", "state", "idle", "active"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip eigrp neighbors",
    page: "03-ip-connectivity/eigrp-bgp.html",
    anchor: "show-ip-eigrp-neighbors",
    keywords: ["show ip eigrp neighbors", "جيران", "eigrp"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip dhcp excluded-address",
    page: "04-ip-services/dhcp-dns.html",
    anchor: "dhcp-excluded",
    keywords: ["ip dhcp excluded-address", "استثناء", "dhcp", "ip conflict"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip dhcp pool",
    page: "04-ip-services/dhcp-dns.html",
    anchor: "dhcp-pool",
    keywords: ["ip dhcp pool", "network", "default-router", "dns-server", "توزيع"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip helper-address",
    page: "04-ip-services/dhcp-dns.html",
    anchor: "ip-helper-address",
    keywords: ["ip helper-address", "dhcp relay", "مساعد", "تحويل", "برودكاست"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip address dhcp",
    page: "04-ip-services/dhcp-dns.html",
    anchor: "ip-address-dhcp",
    keywords: ["ip address dhcp", "client", "سحب", "اوتوماتيك"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip name-server",
    page: "04-ip-services/dhcp-dns.html",
    anchor: "ip-name-server",
    keywords: ["ip name-server", "dns", "no ip domain-lookup", "بحث"],
    mode: "Router(config)#",
    tags: ["PT ✔"]
  },
  {
    title: "show ip dhcp binding",
    page: "04-ip-services/dhcp-dns.html",
    anchor: "show-ip-dhcp-binding",
    keywords: ["show ip dhcp binding", "توزيع", "ايجار", "lease", "mac"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip dhcp pool",
    page: "04-ip-services/dhcp-dns.html",
    anchor: "show-ip-dhcp-pool",
    keywords: ["show ip dhcp pool", "احصائيات", "dhcp"],
    mode: "Router#",
    tags: ["PT ✔"]
  },
  {
    title: "ip nat inside / outside",
    page: "04-ip-services/nat-pat.html",
    anchor: "ip-nat-inside-outside",
    keywords: ["ip nat inside", "ip nat outside", "فتحة", "nat"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip nat inside source static",
    page: "04-ip-services/nat-pat.html",
    anchor: "ip-nat-static",
    keywords: ["ip nat static", "static nat", "ثابت", "inside local", "inside global"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip nat overload (PAT)",
    page: "04-ip-services/nat-pat.html",
    anchor: "ip-nat-pat",
    keywords: ["ip nat inside source list", "overload", "pat", "ترجمة", "بورت"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip nat translations",
    page: "04-ip-services/nat-pat.html",
    anchor: "show-ip-nat-translations",
    keywords: ["show ip nat translations", "جدول ترجمة", "port"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip nat statistics",
    page: "04-ip-services/nat-pat.html",
    anchor: "show-ip-nat-statistics",
    keywords: ["show ip nat statistics", "احصائيات", "nat"],
    mode: "Router#",
    tags: ["PT ✔"]
  },
  {
    title: "clear ip nat translation",
    page: "04-ip-services/nat-pat.html",
    anchor: "clear-ip-nat",
    keywords: ["clear ip nat", "مسح", "تنظيف", "translations"],
    mode: "Router#",
    tags: ["PT ✔"]
  },
  {
    title: "ntp server",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "ntp-server",
    keywords: ["ntp server", "time", "وقت", "توقيت", "ساعة", "ntp", "client"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ntp master",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "ntp-master",
    keywords: ["ntp master", "stratum", "server", "سيرفر وقت", "توزيع التوقيت"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ntp source",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "ntp-source",
    keywords: ["ntp source", "loopback", "منفذ التوقيت"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ntp peer",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "ntp-peer",
    keywords: ["ntp peer", "peer", "ند للند", "تزامن متبادل"],
    mode: "Router(config)#",
    tags: ["PT ✔"]
  },
  {
    title: "ntp authenticate",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "ntp-auth",
    keywords: ["ntp authenticate", "trusted-key", "authentication-key", "توثيق", "امان"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "clock timezone",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "clock-timezone",
    keywords: ["clock timezone", "clock set", "منطقة زمنية", "توقيت محلي"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "service timestamps log datetime",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "service-timestamps",
    keywords: ["service timestamps log datetime", "msec", "طابع زمني", "syslog timestamp"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "logging host",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "logging-host",
    keywords: ["logging host", "syslog server", "سيرفر سجلات", "توجيه"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "logging trap",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "logging-trap",
    keywords: ["logging trap", "severity", "مستوى الخطورة", "فلترة"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "logging buffered",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "logging-buffered",
    keywords: ["logging buffered", "buffer", "ذاكرة", "ram"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "terminal monitor",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "terminal-monitor",
    keywords: ["terminal monitor", "ssh", "telnet", "عرض السجلات", "vty"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "logging synchronous",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "logging-synchronous",
    keywords: ["logging synchronous", "تنظيم السطر", "منع المقاطعة"],
    mode: "Router(config-line)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "snmp-server community",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "snmp-community",
    keywords: ["snmp-server community", "snmp", "ro", "rw", "مراقبة"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "snmp-server host & traps",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "snmp-host",
    keywords: ["snmp-server host", "enable traps", "informs", "تنبيهات"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "snmp-server group & user (v3)",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "snmpv3-group-user",
    keywords: ["snmp-server group", "snmp-server user", "snmpv3", "authPriv", "sha", "aes"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ntp status",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "show-ntp-status",
    keywords: ["show ntp status", "stratum", "synchronized", "فحص الوقت"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ntp associations",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "show-ntp-associations",
    keywords: ["show ntp associations", "سيرفرات الوقت", "peer"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show logging",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "show-logging",
    keywords: ["show logging", "سجلات", "سيسلوج", "سجل الأحداث"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show snmp",
    page: "04-ip-services/ntp-syslog-snmp.html",
    anchor: "show-snmp",
    keywords: ["show snmp", "show snmp community", "show snmp group", "احصائيات snmp"],
    mode: "Router#",
    tags: ["PT ✔"]
  },
  {
    title: "class-map (QoS)",
    page: "04-ip-services/qos-ftp.html",
    anchor: "class-map",
    keywords: ["class-map", "qos", "تصنيف", "mqc", "match ip dscp", "match protocol"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "policy-map (QoS)",
    page: "04-ip-services/qos-ftp.html",
    anchor: "policy-map",
    keywords: ["policy-map", "priority", "bandwidth", "police", "shape", "طوابير", "qos"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "service-policy",
    page: "04-ip-services/qos-ftp.html",
    anchor: "service-policy",
    keywords: ["service-policy", "تطبيق qos", "input", "output"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "mls qos trust",
    page: "04-ip-services/qos-ftp.html",
    anchor: "mls-qos-trust",
    keywords: ["mls qos trust", "trust boundary", "cisco-phone", "سويتش", "cos"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "copy running-config tftp:",
    page: "04-ip-services/qos-ftp.html",
    anchor: "copy-tftp",
    keywords: ["copy tftp", "نسخ احتياطي", "flash", "نقل ملفات", "tftp"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "copy ... ftp:",
    page: "04-ip-services/qos-ftp.html",
    anchor: "copy-ftp",
    keywords: ["copy ftp", "ip ftp username", "ip ftp password", "ftp"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip tftp / ftp source-interface",
    page: "04-ip-services/qos-ftp.html",
    anchor: "ip-tftp-ftp-source",
    keywords: ["ip tftp source-interface", "ip ftp source-interface", "منفذ النقل"],
    mode: "Router(config)#",
    tags: ["PT ✔"]
  },
  {
    title: "show policy-map interface",
    page: "04-ip-services/qos-ftp.html",
    anchor: "show-policy-map-interface",
    keywords: ["show policy-map interface", "مراقبة qos", "drops", "priority queue"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show class-map / policy-map",
    page: "04-ip-services/qos-ftp.html",
    anchor: "show-class-policy-map",
    keywords: ["show class-map", "show policy-map", "عرض السياسات"],
    mode: "Router#",
    tags: ["PT ✔"]
  },
  {
    title: "login block-for",
    page: "05-security/security-concepts.html",
    anchor: "login-block-for",
    keywords: ["login block-for", "brute force", "حظر الدخول", "تخمين", "quiet mode"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "security passwords min-length",
    page: "05-security/security-concepts.html",
    anchor: "passwords-min-length",
    keywords: ["security passwords min-length", "طول كلمة السر", "password policy"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "password encryption types (0, 7, 5, 8, 9)",
    page: "05-security/security-concepts.html",
    anchor: "password-encryption-types",
    keywords: ["service password-encryption", "enable secret", "type 7", "type 5", "type 8", "type 9", "sha256", "تشفير"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "exec-timeout (Security)",
    page: "05-security/security-concepts.html",
    anchor: "exec-timeout",
    keywords: ["exec-timeout", "جلسة", "خمول", "تسجيل خروج", "inactivity"],
    mode: "Router(config-line)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "banner motd (Security)",
    page: "05-security/security-concepts.html",
    anchor: "banner-motd",
    keywords: ["banner motd", "رسالة تحذير", "warning", "شعار"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show login",
    page: "05-security/security-concepts.html",
    anchor: "show-login",
    keywords: ["show login", "حالة تسجيل الدخول", "quiet mode status"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "access-list (Standard 1-99)",
    page: "05-security/acls.html",
    anchor: "standard-numbered-acl",
    keywords: ["access-list standard", "standard acl", "قائمة تحكم قياسية", "wildcard mask", "host", "any"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "access-list (Extended 100-199)",
    page: "05-security/acls.html",
    anchor: "extended-numbered-acl",
    keywords: ["access-list extended", "extended acl", "قائمة تحكم موسعة", "eq", "range", "tcp", "udp", "icmp"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip access-list (Named ACL)",
    page: "05-security/acls.html",
    anchor: "named-acl",
    keywords: ["ip access-list", "named acl", "sequence number", "ترقيم", "remark"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip access-group",
    page: "05-security/acls.html",
    anchor: "ip-access-group",
    keywords: ["ip access-group", "تطبيق acl", "inbound", "outbound", "interface"],
    mode: "Router(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "access-class (VTY ACL)",
    page: "05-security/acls.html",
    anchor: "access-class",
    keywords: ["access-class", "حماية vty", "ssh acl", "telnet acl", "line vty"],
    mode: "Router(config-line)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip access-list resequence",
    page: "05-security/acls.html",
    anchor: "ip-access-list-resequence",
    keywords: ["ip access-list resequence", "اعادة ترتيب", "تسلسل"],
    mode: "Router(config)#",
    tags: ["PT ✔"]
  },
  {
    title: "permit tcp ... established",
    page: "05-security/acls.html",
    anchor: "established-keyword",
    keywords: ["established", "tcp established", "ack", "rst", "حزم العودة"],
    mode: "Router(config-ext-nacl)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show access-lists",
    page: "05-security/acls.html",
    anchor: "show-access-lists",
    keywords: ["show access-lists", "hit counts", "matches", "فحص acl"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip interface (ACL)",
    page: "05-security/acls.html",
    anchor: "show-ip-interface-acl",
    keywords: ["show ip interface", "ربط acl بالمنفذ", "inbound access list"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "clear access-list counters",
    page: "05-security/acls.html",
    anchor: "clear-access-list-counters",
    keywords: ["clear access-list counters", "تصفير عدادات acl"],
    mode: "Router#",
    tags: ["PT ✔"]
  },
  {
    title: "switchport port-security",
    page: "05-security/layer2-security.html",
    anchor: "port-security-enable",
    keywords: ["switchport port-security", "امان المنفذ", "حماية السويتش", "access"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "maximum & mac-address sticky",
    page: "05-security/layer2-security.html",
    anchor: "port-security-max-sticky",
    keywords: ["mac-address sticky", "maximum mac", "تثبيت الماك", "حفظ الماك"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "port-security violation (shutdown/restrict/protect)",
    page: "05-security/layer2-security.html",
    anchor: "port-security-violation",
    keywords: ["violation shutdown", "violation restrict", "violation protect", "عقاب المنفذ", "err-disabled"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "errdisable recovery cause psecure-violation",
    page: "05-security/layer2-security.html",
    anchor: "errdisable-recovery",
    keywords: ["errdisable recovery", "psecure-violation", "استعادة المنفذ", "interval"],
    mode: "Switch(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip dhcp snooping & trust",
    page: "05-security/layer2-security.html",
    anchor: "dhcp-snooping-config",
    keywords: ["ip dhcp snooping", "dhcp snooping trust", "سيرفر مزيف", "rogue dhcp", "information option"],
    mode: "Switch(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "ip arp inspection (DAI)",
    page: "05-security/layer2-security.html",
    anchor: "dynamic-arp-inspection",
    keywords: ["ip arp inspection", "dai", "arp spoofing", "arp poisoning", "تسميم arp"],
    mode: "Switch(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "switchport nonegotiate (VLAN Hopping)",
    page: "05-security/layer2-security.html",
    anchor: "vlan-hopping-defense",
    keywords: ["switchport nonegotiate", "vlan hopping", "dtp", "double tagging", "native vlan"],
    mode: "Switch(config-if)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show port-security",
    page: "05-security/layer2-security.html",
    anchor: "show-port-security",
    keywords: ["show port-security", "فحص امان المنفذ", "secure-up", "violation count"],
    mode: "Switch#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip dhcp snooping binding",
    page: "05-security/layer2-security.html",
    anchor: "show-dhcp-snooping",
    keywords: ["show ip dhcp snooping binding", "جدول dhcp snooping", "ربط الماك والاي بي"],
    mode: "Switch#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip arp inspection",
    page: "05-security/layer2-security.html",
    anchor: "show-arp-inspection",
    keywords: ["show ip arp inspection", "فحص dai", "arp drops"],
    mode: "Switch#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "aaa new-model",
    page: "05-security/aaa-hardening.html",
    anchor: "aaa-new-model",
    keywords: ["aaa new-model", "تفعيل aaa", "نظام الحماية المركزي", "authentication"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "tacacs / radius server",
    page: "05-security/aaa-hardening.html",
    anchor: "tacacs-radius-server",
    keywords: ["tacacs server", "radius server", "خادم مركزي", "shared secret", "ise"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "aaa group server",
    page: "05-security/aaa-hardening.html",
    anchor: "aaa-group-server",
    keywords: ["aaa group server", "مجموعة سيرفرات", "redundancy"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "aaa authentication login",
    page: "05-security/aaa-hardening.html",
    anchor: "aaa-authentication-login",
    keywords: ["aaa authentication login", "method list", "local fallback", "دخول"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "aaa authorization exec & commands",
    page: "05-security/aaa-hardening.html",
    anchor: "aaa-authorization-exec",
    keywords: ["aaa authorization", "صلاحيات الاوامر", "تفويض", "commands 15"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "aaa accounting",
    page: "05-security/aaa-hardening.html",
    anchor: "aaa-accounting",
    keywords: ["aaa accounting", "تدقيق", "محاسبة", "سجلات الاوامر", "start-stop"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "crypto key generate rsa (SSHv2)",
    page: "05-security/aaa-hardening.html",
    anchor: "ssh-hardening",
    keywords: ["crypto key generate rsa", "ssh version 2", "تشفير ssh", "modulus 2048"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show aaa servers",
    page: "05-security/aaa-hardening.html",
    anchor: "show-aaa-servers",
    keywords: ["show aaa servers", "فحص سيرفرات aaa", "tacacs status"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show ip ssh",
    page: "05-security/aaa-hardening.html",
    anchor: "show-ip-ssh",
    keywords: ["show ip ssh", "فحص اصدار ssh", "ssh status"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "interface Tunnel (GRE)",
    page: "05-security/vpn-wireless-sec.html",
    anchor: "gre-tunnel-config",
    keywords: ["interface tunnel", "tunnel source", "tunnel destination", "gre", "vpn"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "crypto isakmp policy & key (IKEv1)",
    page: "05-security/vpn-wireless-sec.html",
    anchor: "ike-phase-1",
    keywords: ["crypto isakmp policy", "crypto isakmp key", "ike phase 1", "diffie-hellman", "hagle"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "crypto ipsec transform-set (IKEv2 / Phase 2)",
    page: "05-security/vpn-wireless-sec.html",
    anchor: "ike-phase-2",
    keywords: ["crypto ipsec transform-set", "esp-aes", "esp-sha", "phase 2", "ipsec sa"],
    mode: "Router(config)#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "WLC GUI: WLAN WPA2/WPA3 Security",
    page: "05-security/vpn-wireless-sec.html",
    anchor: "wlc-wlan-security",
    keywords: ["wlc wlan security", "wpa2 psk", "wpa3 sae", "aes ccmp", "wlc gui", "وايرلس"],
    mode: "WLC Web GUI",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show crypto isakmp sa",
    page: "05-security/vpn-wireless-sec.html",
    anchor: "show-crypto-isakmp-sa",
    keywords: ["show crypto isakmp sa", "qm_idle", "فحص نفق vpn", "phase 1 status"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show crypto ipsec sa",
    page: "05-security/vpn-wireless-sec.html",
    anchor: "show-crypto-ipsec-sa",
    keywords: ["show crypto ipsec sa", "pkts encaps", "pkts encrypt", "احصائيات التشفير"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "show interfaces Tunnel",
    page: "05-security/vpn-wireless-sec.html",
    anchor: "show-interfaces-tunnel",
    keywords: ["show interfaces tunnel", "حالة النفق", "gre tunnel status"],
    mode: "Router#",
    tags: ["PT ✔"]
  },
  {
    title: "Network Planes (Data / Control / Management)",
    page: "06-automation/automation-concepts.html",
    anchor: "networking-planes",
    keywords: ["data plane", "control plane", "management plane", "forwarding", "sdn", "planes"],
    mode: "Architecture",
    tags: ["Exam"]
  },
  {
    title: "SD-Access & SD-WAN Architectures",
    page: "06-automation/automation-concepts.html",
    anchor: "cisco-controllers",
    keywords: ["sd-access", "sd-wan", "vmanage", "vsmart", "vbond", "vedge", "lisp", "vxlan", "trustsec", "sgt"],
    mode: "Architecture",
    tags: ["Exam"]
  },
  {
    title: "Cisco Catalyst Center (DNA Center)",
    page: "06-automation/automation-concepts.html",
    anchor: "dna-center-pillars",
    keywords: ["catalyst center", "dna center", "design", "policy", "provision", "assurance", "platform"],
    mode: "Controller",
    tags: ["Exam"]
  },
  {
    title: "netconf-yang & restconf",
    page: "06-automation/automation-concepts.html",
    anchor: "netconf-restconf-enable",
    keywords: ["netconf-yang", "restconf", "southbound api", "yang", "ssh 830", "https 443"],
    mode: "Router(config)#",
    tags: ["Exam"]
  },
  {
    title: "show netconf-yang sessions",
    page: "06-automation/automation-concepts.html",
    anchor: "show-netconf-yang",
    keywords: ["show netconf-yang sessions", "فحص netconf", "جلسات الاتصال"],
    mode: "Router#",
    tags: ["Exam"]
  },
  {
    title: "JSON Rules & Syntax",
    page: "06-automation/data-formats.html",
    anchor: "json-syntax-rules",
    keywords: ["json", "javascript object notation", "صيغة json", "arrays", "objects", "keys", "values"],
    mode: "Data Format",
    tags: ["Exam"]
  },
  {
    title: "YAML Rules & Syntax",
    page: "06-automation/data-formats.html",
    anchor: "yaml-syntax-rules",
    keywords: ["yaml", "صيغة yaml", "ansible playbook", "indentation", "spaces"],
    mode: "Data Format",
    tags: ["Exam"]
  },
  {
    title: "REST API Concepts & CRUD Verbs",
    page: "06-automation/data-formats.html",
    anchor: "rest-api-architecture",
    keywords: ["rest api", "crud", "http verbs", "get", "post", "put", "patch", "delete", "idempotent"],
    mode: "REST API",
    tags: ["Exam"]
  },
  {
    title: "HTTP Response Status Codes",
    page: "06-automation/data-formats.html",
    anchor: "http-status-codes",
    keywords: ["http status codes", "200 ok", "201 created", "401 unauthorized", "403 forbidden", "404 not found", "500 internal server error"],
    mode: "HTTP Codes",
    tags: ["Exam"]
  },
  {
    title: "Python Script: REST API Requests",
    page: "06-automation/data-formats.html",
    anchor: "python-rest-example",
    keywords: ["python requests", "rest api script", "كود بايثون", "json.loads"],
    mode: "Python",
    tags: ["Exam"]
  },
  {
    title: "Ansible Architecture (Playbooks & Agentless)",
    page: "06-automation/config-management.html",
    anchor: "ansible-overview",
    keywords: ["ansible", "playbook", "inventory", "agentless", "push model", "yaml", "ادارة الاعدادات"],
    mode: "Config Mgmt",
    tags: ["Exam"]
  },
  {
    title: "Puppet Architecture (Manifests & Agent-based)",
    page: "06-automation/config-management.html",
    anchor: "puppet-overview",
    keywords: ["puppet", "manifest", "puppet master", "puppet agent", "facter", "pull model", "tcp 8140"],
    mode: "Config Mgmt",
    tags: ["Exam"]
  },
  {
    title: "Chef Architecture (Cookbooks & Recipes)",
    page: "06-automation/config-management.html",
    anchor: "chef-overview",
    keywords: ["chef", "cookbook", "recipe", "chef workstation", "chef server", "ohai", "pull model", "ruby"],
    mode: "Config Mgmt",
    tags: ["Exam"]
  },
  {
    title: "SaltStack Architecture (Master & Minions)",
    page: "06-automation/config-management.html",
    anchor: "saltstack-overview",
    keywords: ["saltstack", "salt master", "salt minion", "zeromq", "states"],
    mode: "Config Mgmt",
    tags: ["Exam"]
  },
  {
    title: "Troubleshooting: Cable, Duplex & CRC Errors",
    page: "07-troubleshooting/methodology-playbooks.html",
    anchor: "playbook-l1-l2-errors",
    keywords: ["troubleshooting", "crc errors", "late collisions", "runts", "giants", "duplex mismatch", "كابلات", "اعطال"],
    mode: "Troubleshooting",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "Troubleshooting: OSPF Adjacency & MTU",
    page: "07-troubleshooting/methodology-playbooks.html",
    anchor: "playbook-ospf-adjacency",
    keywords: ["ospf troubleshooting", "mtu mismatch", "exstart", "exchange", "hello dead timers", "مشاكل ospf"],
    mode: "Troubleshooting",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "Troubleshooting: VLANs & Trunking",
    page: "07-troubleshooting/methodology-playbooks.html",
    anchor: "playbook-vlans-trunking",
    keywords: ["native vlan mismatch", "vlan troubleshooting", "trunk issues", "allowed vlan", "اعطال الفيلان"],
    mode: "Troubleshooting",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "Troubleshooting: IP Routing & Gateway",
    page: "07-troubleshooting/methodology-playbooks.html",
    anchor: "playbook-routing-connectivity",
    keywords: ["routing troubleshooting", "longest prefix match", "administrative distance", "default gateway", "next hop"],
    mode: "Troubleshooting",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "Extended Ping & Traceroute (MTU & Source)",
    page: "07-troubleshooting/methodology-playbooks.html",
    anchor: "extended-ping-traceroute",
    keywords: ["extended ping", "ping source", "ping df-bit", "traceroute", "فحص البينج", "تتبع"],
    mode: "Router#",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "Subnetting & CIDR Master Table (/8 to /32)",
    page: "08-cheatsheets/cheat-sheets.html",
    anchor: "subnetting-table",
    keywords: ["subnetting table", "cidr", "magic number", "wildcard mask", "حساب الشبكات", "تقسيم"],
    mode: "Cheat Sheet",
    tags: ["Exam"]
  },
  {
    title: "Special IP Ranges (RFC 1918 & IPv6)",
    page: "08-cheatsheets/cheat-sheets.html",
    anchor: "ip-ranges-table",
    keywords: ["rfc 1918", "private ip", "apipa", "ipv6 ranges", "link local", "unique local", "global unicast"],
    mode: "Cheat Sheet",
    tags: ["Exam"]
  },
  {
    title: "Well-Known Ports & Protocols Table",
    page: "08-cheatsheets/cheat-sheets.html",
    anchor: "ports-protocols-table",
    keywords: ["port numbers", "ارقام البورتات", "منافذ", "tcp", "udp", "ftp", "ssh", "dns", "dhcp", "snmp"],
    mode: "Cheat Sheet",
    tags: ["Exam"]
  },
  {
    title: "Administrative Distance (AD) Master Table",
    page: "08-cheatsheets/cheat-sheets.html",
    anchor: "ad-table",
    keywords: ["administrative distance", "ad table", "جدول المسافات", "connected", "static", "ospf", "eigrp", "bgp"],
    mode: "Cheat Sheet",
    tags: ["Exam"]
  },
  {
    title: "OSPF Adjacency & STP Port States Table",
    page: "08-cheatsheets/cheat-sheets.html",
    anchor: "protocol-states-table",
    keywords: ["ospf states", "stp states", "down init 2-way exstart exchange loading full", "discarding learning forwarding"],
    mode: "Cheat Sheet",
    tags: ["Exam"]
  },
  {
    title: "EtherChannel Compatibility Matrix",
    page: "08-cheatsheets/cheat-sheets.html",
    anchor: "etherchannel-matrix",
    keywords: ["etherchannel matrix", "lacp", "pagp", "active passive", "desirable auto"],
    mode: "Cheat Sheet",
    tags: ["Exam"]
  },
  {
    title: "Syslog Severity Levels (0 to 7) Master Table",
    page: "08-cheatsheets/cheat-sheets.html",
    anchor: "syslog-levels-table",
    keywords: ["syslog levels", "مستويات السيسلوج", "emergency alert critical", "خطورة", "سيسلوج 0-7"],
    mode: "Cheat Sheet",
    tags: ["Exam"]
  },
  {
    title: "QoS Marking & DSCP Master Table",
    page: "08-cheatsheets/cheat-sheets.html",
    anchor: "qos-marking-table",
    keywords: ["qos table", "dscp table", "ef af cs", "cos", "تمييز جودة الخدمة", "علامات qos"],
    mode: "Cheat Sheet",
    tags: ["Exam"]
  },
  {
    title: "Lab 1: Complete Campus LAN (L2/L3 & HSRP)",
    page: "08-cheatsheets/lab-configs.html",
    anchor: "lab-campus-lan",
    keywords: ["campus lan lab", "hsrp lab", "dsw1", "asw1", "l3 switch", "rapid-pvst", "vlan", "port-channel", "لاب كامل", "شبكة مؤسسية"],
    mode: "Full Lab",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "Lab 2: Edge Router (NAT, DHCP & Security)",
    page: "08-cheatsheets/lab-configs.html",
    anchor: "lab-edge-services",
    keywords: ["edge router lab", "nat pat lab", "dhcp pool", "r1-edge", "hardening lab", "ssh lab", "لاب راوتر الحافة", "انترنت"],
    mode: "Full Lab",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "Lab 3: Branch Office GRE over IPsec VPN",
    page: "08-cheatsheets/lab-configs.html",
    anchor: "lab-site-to-site-vpn",
    keywords: ["vpn lab", "gre over ipsec lab", "crypto isakmp", "crypto ipsec", "tunnel0", "branch office", "لاب في بي ان", "ربط الفروع"],
    mode: "Full Lab",
    tags: ["Exam", "PT ✔"]
  },
  {
    title: "Wi-Fi Standards & Frequencies (802.11 ax/be / Wi-Fi 6/7)",
    page: "02-network-access/wireless-lan.html",
    anchor: "wifi-standards-table",
    keywords: ["wifi standards", "معايير الوايرلس", "802.11ax", "wifi 6", "wifi 7", "6 ghz", "ترددات"],
    mode: "Exam Core",
    tags: ["Exam"]
  },
  {
    title: "Cisco Meraki Cloud Architecture",
    page: "02-network-access/wireless-lan.html",
    anchor: "cloud-managed-meraki",
    keywords: ["meraki", "cisco meraki", "سيسكو ميراكي", "cloud management", "dashboard", "سحابة"],
    mode: "Exam Core",
    tags: ["Exam"]
  },
  {
    title: "Zero Trust & SASE Architecture",
    page: "05-security/security-concepts.html",
    anchor: "zero-trust-sase",
    keywords: ["zero trust", "sase", "انعدام الثقة", "sse", "ztna", "casb", "حماية حديثة"],
    mode: "Exam Core",
    tags: ["Exam"]
  },
  {
    title: "Terraform (IaC Framework)",
    page: "06-automation/config-management.html",
    anchor: "terraform-overview",
    keywords: ["terraform", "تيرافورم", "iac", "hcl", "tfstate", "plan apply destroy"],
    mode: "Exam Core",
    tags: ["Exam"]
  },
  {
    title: "Git Version Control Basics",
    page: "06-automation/config-management.html",
    anchor: "git-version-control",
    keywords: ["git", "جيت", "git init clone add commit push branch", "version control", "مستودع"],
    mode: "Exam Core",
    tags: ["Exam"]
  }
];

