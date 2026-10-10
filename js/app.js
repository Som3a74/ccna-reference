document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  renderSidebarHeader();
  renderSidebar();
  setupSearch();
  setupCopyButtons();
  setupKeyboardShortcuts();
  setupCollapsibleCommands();
  renderCategoryGrid();
});

function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/pages/')) {
    return '../../';
  }
  return './';
}

function setupTheme() {
  const savedTheme = localStorage.getItem('ccna_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('ccna_theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('ccna_theme', 'dark');
  }
  updateThemeButtonText();
}

function updateThemeButtonText() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.innerHTML = isDark ? '☀️ النهاري' : '🌙 الليلي';
}

function renderSidebarHeader() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  
  const h2 = sidebar.querySelector('h2');
  if (h2 && !sidebar.querySelector('.sidebar-header')) {
    const basePath = getBasePath();
    const headerWrap = document.createElement('div');
    headerWrap.className = 'sidebar-header';
    
    headerWrap.innerHTML = `
      <h2>
        <a href="${basePath}index.html" class="brand-link">
          <img src="${basePath}favicon.svg" alt="CCNA Logo" class="brand-logo" width="28" height="28">
          <span>CCNA Reference</span>
        </a>
      </h2>
      <button id="theme-toggle-btn" class="theme-toggle-btn" type="button" title="تبديل الوضع الليلي / النهاري"></button>
    `;
    
    sidebar.replaceChild(headerWrap, h2);
    
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
      updateThemeButtonText();
    }
  }
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar-nav');
  if (!sidebar) return;

  let html = '';
  const basePath = getBasePath();
  
  navData.forEach(cat => {
    // Check if any page in this category is currently active
    const hasActivePage = cat.pages.some(page => window.location.pathname.endsWith(page.file));
    const openAttr = hasActivePage ? 'open' : '';
    
    html += `<details ${openAttr}>
      <summary><strong>${cat.category}</strong></summary>
      <ul>`;
      
    cat.pages.forEach(page => {
      const pageUrl = basePath + 'pages/' + page.file;
      const isActive = window.location.pathname.endsWith(page.file) ? 'class="active"' : '';
      html += `<li><a href="${pageUrl}" ${isActive}>${page.title}</a></li>`;
    });
    
    html += `</ul></details>`;
  });
  
  sidebar.innerHTML = html;
}

function renderCategoryGrid() {
  const grid = document.getElementById('category-grid');
  if (!grid || typeof navData === 'undefined') return;
  
  const basePath = getBasePath();
  
  const categoryDescriptions = {
    "00 — أساسيات IOS وإدارة الأجهزة (IOS Basics)": "أوضاع الـ CLI والتنقل، إعدادات الجهاز المبدئية، إدارة الذاكرة وملفات الـ Config ونظام التشغيل، وفحص الهاردوير والمنافذ.",
    "01 — أساسيات الشبكات (Network Fundamentals)": "مفاهيم الشبكات وجداول الـ MAC والـ ARP، وحسابات وتقسيم عناوين IPv4 وعناوين IPv6 العالمية والمحلية والـ EUI-64.",
    "02 — الوصول للشبكة (Network Access)": "شبكات الـ VLANs والـ Trunking، وبروتوكولات CDP/LLDP، وبروتوكول STP/Rapid-PVST لمنع اللوب، ودمج الكابلات EtherChannel، والشبكات اللاسلكية WLC.",
    "03 — اتصال IP (IP Connectivity)": "أساسيات التوجيه والمسارات الثابتة والافتراضية، وبروتوكول OSPFv2 لمنطقة واحدة بالتفصيل، وبروتوكولات الـ FHRP (HSRP/VRRP)، ومفاهيم EIGRP و BGP.",
    "04 — خدمات IP (IP Services)": "خدمات توزيع الأيبيهات DHCP وخوادم الأسماء DNS، وتقنيات الترجمة NAT/PAT، ومزامنة التوقيت NTP، وسجلات Syslog، ومراقبة SNMP، وجودة الخدمة QoS ونقل الملفات.",
    "05 — أساسيات الحماية (Security Fundamentals)": "مفاهيم الأمن ومثلث CIA، وقوائم التحكم ACLs بأنواعها، وحماية الطبقة الثانية (Port Security, DHCP Snooping, DAI)، ونظام AAA وتقوية الأجهزة، وشبكات VPN وحماية اللاسلكي WPA3.",
    "06 — الأتمتة والبرمجة (Automation & Programmability)": "مفاهيم الـ SDN ومستويات الشبكة ومتحكمات Catalyst Center و SD-WAN، وصيغ البيانات JSON/YAML/XML، وأدوات إدارة الإعدادات Ansible و Puppet و Chef.",
    "07 — فحص الأعطال (Troubleshooting)": "منهجيات فحص الأعطال (Divide and Conquer)، وحالات المنافذ، وتفسير أخطاء الكابلات CRC/Collisions، وسيناريوهات فحص OSPF و VLANs والـ NAT.",
    "08 — مراجع سريعة (Cheat Sheets)": "جداول الـ Subnetting، والمنافذ الشهيرة، والمسافات الإدارية AD، وحالات البروتوكولات، وسيناريوهات اللابات الإنتاجية الكاملة الجاهزة للنسخ والتطبيق."
  };

  let cardsHtml = '';
  navData.forEach(cat => {
    const desc = categoryDescriptions[cat.category] || "دليل الأوامر والإعدادات والشروحات التفصيلية لهذا القسم.";
    let linksHtml = '';
    cat.pages.forEach(p => {
      const pUrl = basePath + 'pages/' + p.file;
      linksHtml += `<li><a href="${pUrl}">• ${p.title}</a></li>`;
    });

    cardsHtml += `
      <div class="category-card">
        <h3>${cat.category}</h3>
        <p>${desc}</p>
        <ul>${linksHtml}</ul>
      </div>
    `;
  });

  grid.innerHTML = cardsHtml;
}

function setupSearch() {
  const searchBox = document.getElementById('search-box');
  const sidebar = document.getElementById('sidebar-nav');
  if (!searchBox || !sidebar) return;
  
  searchBox.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length === 0) {
      renderSidebar();
      return;
    }
    
    if (typeof searchIndex === 'undefined') {
      sidebar.innerHTML = '<div style="padding: 1rem; text-align: center; color: #666;">فهرس البحث غير متوفر</div>';
      return;
    }
    
    const results = searchIndex.filter(item => {
      if (item.title.toLowerCase().includes(query)) return true;
      if (item.keywords.some(kw => kw.toLowerCase().includes(query))) return true;
      return false;
    });
    
    if (results.length === 0) {
      sidebar.innerHTML = '<div style="padding: 1rem; text-align: center; color: #666;">لا توجد نتائج</div>';
      return;
    }
    
    const basePath = getBasePath();
    let html = '<ul class="search-results" style="list-style:none; padding:10px; margin:0;">';
    results.forEach(res => {
      const href = basePath + 'pages/' + res.page + '#' + res.anchor;
      html += `
        <li style="margin-bottom: 12px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
          <a href="${href}" style="display:block; text-decoration:none; color:#0056b3; font-weight:bold; font-size:14px; margin-bottom:5px;">${res.title}</a>
          <div style="font-size: 11px; color: #666;" dir="ltr">
            <span style="background:#eee; padding:2px 5px; border-radius:3px; border:1px solid #ccc;">${res.mode}</span>
          </div>
        </li>
      `;
    });
    html += '</ul>';
    
    sidebar.innerHTML = html;
  });
}

function setupCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.nextElementSibling;
      if (codeBlock) {
        // Clone the code block to manipulate it without affecting the UI
        const clone = codeBlock.cloneNode(true);
        // Remove prompts (.prompt) before copying
        const prompts = clone.querySelectorAll('.prompt');
        prompts.forEach(p => p.remove());
        
        const textToCopy = clone.innerText.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.innerText;
          btn.innerText = 'Copied!';
          setTimeout(() => btn.innerText = originalText, 2000);
        }).catch(err => {
          console.error('Copy failed', err);
        });
      }
    });
  });
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== document.getElementById('search-box')) {
      e.preventDefault();
      const searchBox = document.getElementById('search-box');
      if (searchBox) searchBox.focus();
    }
  });
}

function setupCollapsibleCommands() {
  const cmds = document.querySelectorAll('.cmd');
  cmds.forEach(cmd => {
    // Collapse all by default
    cmd.classList.add('collapsed');
    
    const h3 = cmd.querySelector('h3');
    if (h3) {
      h3.addEventListener('click', () => {
        cmd.classList.toggle('collapsed');
      });
    }
  });

  // Function to open target section when hash is present
  const openHash = () => {
    if (window.location.hash) {
      // Use try-catch to avoid errors with invalid hashes
      try {
        const target = document.querySelector(window.location.hash);
        if (target && target.classList.contains('cmd')) {
          target.classList.remove('collapsed');
          // Smooth scroll to the element slightly delayed to allow layout to adjust
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      } catch (e) {
        console.warn('Invalid hash:', window.location.hash);
      }
    }
  };

  // Open the targeted command section when navigating via links or search
  window.addEventListener('hashchange', openHash);
  
  // Also run on initial page load if a hash exists
  setTimeout(openHash, 100);
}
