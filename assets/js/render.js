/**
 * Renders index.html and case-study.html from window.CASE_STUDIES,
 * populated by the files in data/<sector>/*.js (see data/_template.js).
 */

const SECTOR_ICONS = {
  renewable: `
    <line x1="16" y1="30" x2="16" y2="13" />
    <line x1="16" y1="12" x2="16" y2="2" />
    <line x1="16" y1="12" x2="24.5" y2="17" />
    <line x1="16" y1="12" x2="9.5" y2="20" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />`,
  core: `
    <path d="M4 24 Q16 8 28 24" />
    <line x1="4" y1="24" x2="4" y2="10" />
    <line x1="28" y1="24" x2="28" y2="10" />
    <line x1="10" y1="24" x2="10" y2="17.5" />
    <line x1="16" y1="24" x2="16" y2="15" />
    <line x1="22" y1="24" x2="22" y2="17.5" />
    <line x1="2" y1="26" x2="30" y2="26" />`,
  digital: `
    <rect x="7" y="4" width="18" height="24" rx="1" />
    <line x1="7" y1="11" x2="25" y2="11" />
    <line x1="7" y1="18" x2="25" y2="18" />
    <circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="11" cy="14.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="11" cy="22.5" r="1" fill="currentColor" stroke="none" />`,
};

function sectorIconSVG(sector) {
  return `<svg class="case-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SECTOR_ICONS[sector] || ""}</svg>`;
}

function getProjects() {
  return window.CASE_STUDIES || [];
}

/* ============================== INDEX ============================== */

function renderProjectCard(project) {
  const statusBadge =
    project.status === "example"
      ? `<span class="sector-tag" style="color:var(--ink-secondary);">· Sample data</span>`
      : "";

  const metrics = project.metrics
    .map(
      (m) => `
      <div>
        <div class="metric-label">${m.label}</div>
        <div class="metric-value">${m.value}</div>
      </div>`
    )
    .join("");

  return `
    <article class="case-card" data-sector="${project.sector}">
      ${sectorIconSVG(project.sector)}
      <span class="sector-tag">${project.sectorLabel}</span>
      ${statusBadge}
      <h3>${project.name}</h3>
      <div class="case-meta">${project.location} · ${project.size}</div>
      <div class="case-metrics">${metrics}</div>
      <p>${project.tagline}</p>
      <a href="case-study.html?id=${project.id}" class="link-arrow">View full case <span class="arrow">→</span></a>
    </article>`;
}

function renderIndex() {
  const grid = document.getElementById("case-grid");
  if (!grid) return;

  const projects = getProjects();

  if (projects.length === 0) {
    grid.innerHTML = `<p class="empty-state">No case studies yet. Add one in data/&lt;sector&gt;/your-project.js (see data/_template.js).</p>`;
    return;
  }

  grid.innerHTML = projects.map(renderProjectCard).join("");

  const totalValue = projects.reduce((sum, p) => {
    const capex = (p.assumptions?.capex || []).find((a) => /total/i.test(a.parameter));
    const match = capex?.value?.match(/([\d.,]+)\s*€?M/);
    return sum + (match ? parseFloat(match[1].replace(/,/g, "")) : 0);
  }, 0);

  const statValueEl = document.getElementById("stat-total-value");
  const statCountEl = document.getElementById("stat-count");
  const statSectorsEl = document.getElementById("stat-sectors");
  if (statValueEl) statValueEl.textContent = totalValue > 0 ? `€${(totalValue / 1000).toFixed(1)}B` : "—";
  if (statCountEl) statCountEl.textContent = projects.length;
  if (statSectorsEl) statSectorsEl.textContent = new Set(projects.map((p) => p.sector)).size;
}

/* =========================== CASE STUDY =========================== */

function getProjectFromURL() {
  const id = new URLSearchParams(window.location.search).get("id");
  return getProjects().find((p) => p.id === id);
}

function renderCaseHero(project) {
  document.title = `${project.name} · Case Study · Erick Córdova`;

  document.getElementById("case-hero").innerHTML = `
    <div class="container">
      <span class="eyebrow">${project.sectorLabel}</span>
      <h1>${project.name}</h1>
      <div class="case-hero-metrics">
        ${project.metrics
          .map(
            (m) => `
          <div>
            <div class="metric-label">${m.label}</div>
            <div class="metric-value">${m.value}</div>
          </div>`
          )
          .join("")}
      </div>
    </div>`;
}

function renderExecutiveSummary(project) {
  const paragraphs = project.executiveSummary.map((p) => `<p>${p}</p>`).join("");

  const callouts = (project.callouts || [])
    .map(
      (c) => `
      <div class="callout blueprint-marks">
        <span class="callout-value">${c.value}</span>
        <p>${c.text}</p>
      </div>`
    )
    .join("");

  return `
    <section class="case-section" id="s-exec">
      <div class="section-number">01 — Executive Summary</div>
      <h2>Executive Summary</h2>
      ${paragraphs}

      <h3 class="subhead" style="margin-top: var(--space-8);">Probabilistic Scenario Results</h3>
      <div id="chart-scenario"></div>

      <div class="callout-row">${callouts}</div>
    </section>`;
}

function renderOverview(project) {
  const rows = project.facts.map((f) => `<tr><td>${f.label}</td><td>${f.value}</td></tr>`).join("");
  return `
    <section class="case-section" id="s-overview">
      <div class="section-number">02 — Overview</div>
      <h2>Transaction Overview</h2>
      <table class="facts-table"><tbody>${rows}</tbody></table>
    </section>`;
}

function renderInsightColumn(title, insights) {
  const items = insights
    .map(
      (i) => `
      <div class="insight">
        <strong>${i.title}</strong>
        <p>${i.body}</p>
      </div>`
    )
    .join("");
  return `
    <div>
      <h3 class="subhead">${title}</h3>
      <div class="insight-list">${items}</div>
    </div>`;
}

function renderTakeaways(project) {
  return `
    <section class="case-section" id="s-takeaways">
      <div class="section-number">03 — Key Takeaways</div>
      <h2>Key Takeaways</h2>

      <h3 class="subhead" style="margin-top:0;">Sensitivities on Equity IRR</h3>
      <div id="chart-tornado"></div>

      <h3 class="subhead" style="margin-top: var(--space-8);">DSCR Profile Across the Debt Tenor</h3>
      <div id="chart-dscr"></div>

      <div class="insight-columns">
        ${renderInsightColumn("Private Equity Perspective", project.insightsPE)}
        ${renderInsightColumn("Lenders' Perspective", project.insightsLenders)}
      </div>
    </section>`;
}

function renderModelAccess(project) {
  const mf = project.modelFile;
  if (!mf) {
    return `
      <section class="case-section" id="s-model">
        <div class="section-number">04 — Model Access</div>
        <h2>My Model &amp; Working Files</h2>
        <p>Model available upon request.</p>
      </section>`;
  }
  return `
    <section class="case-section" id="s-model">
      <div class="section-number">04 — Model Access</div>
      <h2>My Model &amp; Working Files</h2>
      <p>Sample model for demonstration purposes.</p>
      <div class="download-card blueprint-marks">
        <div class="file-info">
          <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 2h9l5 5v15H6z" /><path d="M15 2v5h5" /><path d="M9 13h6M9 16h6M9 10h2" />
          </svg>
          <div>
            <div class="file-name">${mf.name}</div>
            <div class="file-meta">${mf.meta}</div>
          </div>
        </div>
        <a href="${mf.href}" class="btn btn-secondary">Download model</a>
      </div>
    </section>`;
}

function assumptionTable(title, rows) {
  if (!rows || rows.length === 0) return "";
  const body = rows
    .map((r) => `<tr><td>${r.parameter}</td><td>${r.value}</td><td>${r.source}</td></tr>`)
    .join("");
  return `
    <div class="assumption-group">
      <h3>${title}</h3>
      <div class="table-scroll">
        <table>
          <thead><tr><th>Assumption</th><th>Value / Range</th><th>Source / Basis</th></tr></thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    </div>`;
}

function renderAssumptions(project) {
  const a = project.assumptions || {};
  return `
    <section class="case-section" id="s-assumptions">
      <div class="section-number">05 — Key Assumptions</div>
      <h2>Key Assumptions</h2>
      ${assumptionTable("Revenue", a.revenue)}
      ${assumptionTable("Capex", a.capex)}
      ${assumptionTable("Opex", a.opex)}
      ${assumptionTable("Debt", a.debt)}
      ${assumptionTable("Equity", a.equity)}
    </section>`;
}

function renderSources(project) {
  const items = (project.sources || [])
    .map(
      (s) => `
      <li>
        <span class="source-org">${s.org}</span>
        <div>
          <div class="source-title">${s.title}</div>
          <div class="source-desc">${s.desc} <a href="${s.href}" class="link-underline">See source ↗</a></div>
        </div>
      </li>`
    )
    .join("");
  return `
    <section class="case-section" id="s-sources" style="padding-bottom: var(--space-16);">
      <div class="section-number">06 — Sources</div>
      <h2>Sources</h2>
      <ul class="sources-list">${items}</ul>
    </section>`;
}

function renderCaseStudy() {
  const main = document.getElementById("case-content");
  if (!main) return;

  const project = getProjectFromURL();
  if (!project) {
    main.innerHTML = `<p class="empty-state">Project not found. <a href="index.html" style="color:var(--accent);">Back to portfolio</a>.</p>`;
    document.querySelector(".case-toc")?.remove();
    return;
  }

  renderCaseHero(project);
  main.innerHTML =
    renderExecutiveSummary(project) +
    renderOverview(project) +
    renderTakeaways(project) +
    renderModelAccess(project) +
    renderAssumptions(project) +
    renderSources(project);

  renderBarChart(document.getElementById("chart-scenario"), { rows: project.scenarioTable.rows });
  renderTornadoChart(document.getElementById("chart-tornado"), project.sensitivities);
  renderDscrLineChart(document.getElementById("chart-dscr"), project.debtProfile);
}

document.addEventListener("DOMContentLoaded", () => {
  renderIndex();
  renderCaseStudy();
});
