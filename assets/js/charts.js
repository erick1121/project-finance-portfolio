/**
 * Charts — SVG puro generado en JS, sin librerías externas.
 * Estética "blueprint": trazo fino, un único acento, etiquetas en mono.
 */

const CHART_ACCENT = "#0f2444";
const CHART_LINE = "#e4e1da";
const CHART_LINE_STRONG = "#c9c5ba";
const CHART_INK_FAINT = "#7d8590";
const CHART_NEGATIVE = "#8c2f2f";
const CHART_FONT_MONO = "'IBM Plex Mono', ui-monospace, monospace";

function svgEl(tag, attrs) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs || {}).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function svgText(x, y, content, opts = {}) {
  const t = svgEl("text", {
    x, y,
    fill: opts.fill || CHART_INK_FAINT,
    "font-family": CHART_FONT_MONO,
    "font-size": opts.size || 11,
    "text-anchor": opts.anchor || "start",
  });
  t.textContent = content;
  return t;
}

/**
 * Gráfico de barras verticales — usado para comparar percentiles (P50-P99).
 */
function renderBarChart(container, { rows }) {
  const width = 560;
  const barH = 16;
  const barStep = 24;
  const rowHeight = 22 + 4 * barStep;
  const height = rows.length * rowHeight + 16;
  const chartLeft = 140;
  const chartRight = width - 60;

  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, width: "100%", height: "auto", role: "img" });
  svg.setAttribute("aria-label", "Scenario results chart");

  rows.forEach((row, rowIdx) => {
    const values = ["p50", "p75", "p90", "p99"].map((k) => row[k]);
    const maxAbs = Math.max(...values.map((v) => Math.abs(v)), 1);
    const zeroX = chartLeft;
    const usableWidth = chartRight - chartLeft;
    const rowY = rowIdx * rowHeight + 12;

    svg.appendChild(svgText(4, rowY + 8, row.label, { fill: "#12151a", size: 12 }));

    values.forEach((val, i) => {
      const barY = rowY + 18 + i * barStep;
      const w = (Math.abs(val) / maxAbs) * usableWidth;
      const x = val >= 0 ? zeroX : zeroX - w;
      const color = val < 0 ? CHART_NEGATIVE : CHART_ACCENT;

      svg.appendChild(svgEl("rect", { x: zeroX, y: barY, width: 0.5, height: barH, fill: CHART_LINE_STRONG }));
      svg.appendChild(svgEl("rect", {
        x, y: barY, width: Math.max(w, 1.5), height: barH, fill: color, opacity: 0.85
      }));
      svg.appendChild(svgText(chartLeft, barY - 2, `P${["50", "75", "90", "99"][i]}`, { size: 9 }));
      svg.appendChild(svgText(
        val >= 0 ? x + w + 6 : x - 6,
        barY + barH - 4,
        `${val}${row.unit}`,
        { fill: "#12151a", size: 11, anchor: val >= 0 ? "start" : "end" }
      ));
    });
  });

  container.innerHTML = "";
  container.appendChild(svg);
}

/**
 * Gráfico tornado — sensibilidades ordenadas por magnitud de impacto.
 */
function renderTornadoChart(container, sensitivities) {
  const sorted = [...sensitivities].sort(
    (a, b) => Math.abs(b.high - b.low) - Math.abs(a.high - a.low)
  );

  const width = 560;
  const rowHeight = 40;
  const height = sorted.length * rowHeight + 30;
  const midX = width / 2;
  const maxSwing = Math.max(...sorted.map((s) => Math.max(Math.abs(s.low), Math.abs(s.high))), 1);
  const usableHalf = width / 2 - 16;

  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, width: "100%", height: "auto", role: "img" });
  svg.setAttribute("aria-label", "Tornado chart of Equity IRR sensitivities");

  svg.appendChild(svgEl("line", {
    x1: midX, y1: 14, x2: midX, y2: height - 14, stroke: CHART_LINE_STRONG, "stroke-width": 1
  }));
  svg.appendChild(svgText(midX, height - 2, "0", { anchor: "middle", size: 9 }));

  sorted.forEach((s, i) => {
    const y = i * rowHeight + 20;
    const barH = 14;
    const lowW = (Math.abs(s.low) / maxSwing) * usableHalf;
    const highW = (Math.abs(s.high) / maxSwing) * usableHalf;

    svg.appendChild(svgText(midX, y - 8, s.label, { anchor: "middle", fill: "#12151a", size: 11 }));

    if (s.low !== 0) {
      svg.appendChild(svgEl("rect", {
        x: midX - lowW, y, width: lowW, height: barH, fill: CHART_NEGATIVE, opacity: 0.85
      }));
      svg.appendChild(svgText(midX - lowW - 6, y + barH - 3, `${s.low}pp`, { anchor: "end", size: 10, fill: "#12151a" }));
    }
    if (s.high !== 0) {
      svg.appendChild(svgEl("rect", {
        x: midX, y, width: highW, height: barH, fill: CHART_ACCENT, opacity: 0.85
      }));
      svg.appendChild(svgText(midX + highW + 6, y + barH - 3, `+${s.high}pp`, { anchor: "start", size: 10, fill: "#12151a" }));
    }
  });

  container.innerHTML = "";
  container.appendChild(svg);
}

/**
 * Gráfico de línea — perfil de DSCR a lo largo de la vida de la deuda,
 * con línea de covenant mínimo.
 */
function renderDscrLineChart(container, { points, covenantMin }) {
  const width = 560;
  const height = 220;
  const padLeft = 40;
  const padRight = 16;
  const padTop = 16;
  const padBottom = 28;

  const years = points.map((p) => p.year);
  const values = points.map((p) => p.dscr);
  const minY = Math.min(covenantMin, ...values) - 0.03;
  const maxY = Math.max(...values) + 0.03;
  const minX = Math.min(...years);
  const maxX = Math.max(...years);

  const xScale = (x) => padLeft + ((x - minX) / (maxX - minX)) * (width - padLeft - padRight);
  const yScale = (y) => height - padBottom - ((y - minY) / (maxY - minY)) * (height - padTop - padBottom);

  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, width: "100%", height: "auto", role: "img" });
  svg.setAttribute("aria-label", "DSCR profile chart across the debt tenor");

  // gridlines horizontales
  [minY, (minY + maxY) / 2, maxY].forEach((gy) => {
    const y = yScale(gy);
    svg.appendChild(svgEl("line", { x1: padLeft, y1: y, x2: width - padRight, y2: y, stroke: CHART_LINE, "stroke-width": 1 }));
    svg.appendChild(svgText(padLeft - 8, y + 3, gy.toFixed(2) + "×", { anchor: "end", size: 9 }));
  });

  // línea de covenant
  const covY = yScale(covenantMin);
  svg.appendChild(svgEl("line", {
    x1: padLeft, y1: covY, x2: width - padRight, y2: covY,
    stroke: CHART_NEGATIVE, "stroke-width": 1, "stroke-dasharray": "3 3"
  }));
  svg.appendChild(svgText(width - padRight, covY - 4, `Covenant ${covenantMin.toFixed(2)}×`, { anchor: "end", size: 9, fill: CHART_NEGATIVE }));

  // línea DSCR
  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xScale(p.year)} ${yScale(p.dscr)}`)
    .join(" ");
  svg.appendChild(svgEl("path", { d: pathD, fill: "none", stroke: CHART_ACCENT, "stroke-width": 1.75 }));

  points.forEach((p) => {
    svg.appendChild(svgEl("circle", { cx: xScale(p.year), cy: yScale(p.dscr), r: 2.5, fill: CHART_ACCENT }));
    svg.appendChild(svgText(xScale(p.year), height - 8, `Y${p.year}`, { anchor: "middle", size: 9 }));
  });

  container.innerHTML = "";
  container.appendChild(svg);
}
