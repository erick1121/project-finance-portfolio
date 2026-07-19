/**
 * ============================================================================
 *  PLANTILLA DE CASO DE ESTUDIO — este fichero es solo de referencia.
 *  NO está enlazado en index.html ni case-study.html (no se carga en la web).
 *
 *  Para crear un caso nuevo:
 *    1. Copia este fichero dentro de la carpeta de su sector:
 *         data/energia-renovable/
 *         data/infraestructura-core/
 *         data/infraestructura-digital/
 *       (o crea una carpeta de sector nueva si hace falta)
 *    2. Renómbralo con un slug único, ej. mi-proyecto.js
 *    3. Rellena todos los campos.
 *    4. Añade UNA línea <script src="data/.../mi-proyecto.js"></script>
 *       en index.html Y en case-study.html (justo junto a los demás
 *       ficheros de datos, antes de assets/js/charts.js).
 *    5. Añade una tarjeta enlazando a case-study.html?id=tu-id si quieres
 *       que aparezca en el grid del portfolio (el grid se genera solo a
 *       partir de todos los proyectos cargados).
 *
 *  No hace falta tocar HTML/CSS/JS de la web — todo se renderiza desde
 *  estos datos, incluidos los gráficos (barras de escenario, tornado de
 *  sensibilidades y perfil de DSCR).
 * ============================================================================
 */

window.CASE_STUDIES = window.CASE_STUDIES || [];

window.CASE_STUDIES.push({
  // Identificador único — usado en la URL: case-study.html?id=tu-id
  id: "id-unico-del-proyecto",

  // "renewable" | "core" | "digital" — debe coincidir con un data-filter del index
  sector: "renewable",
  sectorLabel: "Energía Renovable",

  // "example" (dato de muestra) | "draft" | "published"
  status: "example",

  // Fase de la transacción para la que se construyó el modelo — se muestra
  // como etiqueta junto al sector. Usa uno de estos 4 valores exactos:
  // "Bid Phase" | "Financial Close" | "Operations" | "Refinancing / M&A"
  transactionRole: "Financial Close",

  name: "Nombre del Proyecto",
  location: "País / región",
  size: "ej. 1,200 MW · 45 km · 40 MW IT load",
  tagline: "Una frase corta para la card del índice.",

  // 3 métricas destacadas — aparecen en la card del índice y en el hero del caso
  metrics: [
    { label: "Equity IRR", value: "11.2%" },
    { label: "Gearing Ratio", value: "70%" },
    { label: "Cash on Cash Multiple", value: "1.63×" }
  ],

  // Tabla de datos del proyecto (sección "Overview de la Transacción")
  facts: [
    { label: "Ubicación", value: "..." },
    { label: "Capacidad / tamaño", value: "..." },
    { label: "Mecanismo de ingresos", value: "..." },
    { label: "Promotor(es)", value: "..." },
    { label: "Capex total", value: "..." },
    { label: "Estructura de financiación", value: "..." },
    { label: "Periodo de operación / concesión", value: "..." }
  ],

  // Párrafos del Executive Summary (uno por elemento del array)
  executiveSummary: [
    "Párrafo 1 — tesis de inversión.",
    "Párrafo 2 — drivers de retorno y solidez financiera."
  ],

  // Tabla de escenarios probabilísticos — alimenta también el gráfico de barras
  scenarioTable: {
    caption: "Resultados por escenario probabilístico",
    rows: [
      { label: "Equity IRR", unit: "%", p50: 11.2, p75: 7.8, p90: 3.9, p99: -2.1 },
      { label: "DSCR Mínimo", unit: "×", p50: 1.21, p75: 1.19, p90: 1.17, p99: 1.12 }
    ]
  },

  // 3 conclusiones clave con cifra destacada (sección Executive Summary)
  callouts: [
    { value: "±8.1pp", text: "Conclusión clave 1." },
    { value: "1.12×", text: "Conclusión clave 2." },
    { value: "0%", text: "Conclusión clave 3." }
  ],

  // Sensibilidades — alimentan el gráfico tornado. "low"/"high" en puntos
  // porcentuales de impacto sobre el Equity IRR (pueden ser negativos).
  sensitivities: [
    { label: "Capex de construcción", low: -8.1, high: 2.3, note: "Mitigación: EPC a precio fijo." },
    { label: "Generación / recurso", low: -4.2, high: 3.0, note: "..." },
    { label: "Precio / tarifa", low: -3.0, high: 3.0, note: "..." },
    { label: "Tipo de interés", low: -0.4, high: 0.4, note: "..." }
  ],

  // Perfil de DSCR a lo largo de la operación — alimenta el gráfico de línea.
  // "year" = año de operación (1, 2, 3...), "dscr" = valor en ese punto.
  debtProfile: {
    covenantMin: 1.10,
    points: [
      { year: 1, dscr: 1.24 },
      { year: 5, dscr: 1.21 },
      { year: 10, dscr: 1.15 },
      { year: 15, dscr: 1.18 },
      { year: 20, dscr: 1.22 },
      { year: 25, dscr: 1.20 }
    ]
  },

  // Perspectiva de Private Equity — 3 insights
  insightsPE: [
    { title: "Título del insight 1", body: "Explicación breve." },
    { title: "Título del insight 2", body: "Explicación breve." },
    { title: "Título del insight 3", body: "Explicación breve." }
  ],

  // Perspectiva de los Prestamistas — 3 insights
  insightsLenders: [
    { title: "Título del insight 1", body: "Explicación breve." },
    { title: "Título del insight 2", body: "Explicación breve." },
    { title: "Título del insight 3", body: "Explicación breve." }
  ],

  // Métricas de crédito — tabla junto a "Perspectiva de los Prestamistas".
  // Incluye siempre estas 5 si las tienes (omite las que no apliquen).
  creditMetrics: [
    { label: "DSCR Min.", value: "1.21×" },
    { label: "DSCR Avg.", value: "1.34×" },
    { label: "LLCR", value: "1.42×" },
    { label: "PLCR", value: "1.58×" },
    { label: "Concession Tail", value: "2 years" }
  ],

  // Cascada de flujo de caja para un año representativo (normalmente el año
  // de mayor estrés identificado en debtProfile). "type" controla cómo se
  // dibuja la barra:
  //   "start"    → barra apoyada en 0 (el primer escalón, ej. CADS)
  //   "outflow"  → resta flotante (deuda senior, DSRA, MRA/MMRA...)
  //   "inflow"   → suma flotante (si aplica)
  //   "end"      → barra apoyada en 0 con el resultado final (ej. Dividendo)
  // "value" siempre en positivo — el signo lo decide "type".
  cashFlowWaterfall: [
    { label: "CADS", value: 100, type: "start" },
    { label: "Senior Debt Service", value: 70, type: "outflow" },
    { label: "DSRA Funding", value: 8, type: "outflow" },
    { label: "MRA / MMRA", value: 7, type: "outflow" },
    { label: "Distributable Dividend", value: 15, type: "end" }
  ],

  // Modelo descargable — deja modelFile: null si no hay archivo público
  modelFile: {
    name: "nombre_del_modelo.xlsx",
    meta: "Excel workbook · Construction & Operations modules",
    href: "#"
  },

  // Supuestos clave agrupados por categoría
  assumptions: {
    revenue: [{ parameter: "Precio / tarifa", value: "...", source: "..." }],
    capex: [{ parameter: "Capex total", value: "...", source: "..." }],
    opex: [{ parameter: "O&M anual", value: "...", source: "..." }],
    debt: [{ parameter: "Tipo de interés", value: "...", source: "..." }],
    equity: [{ parameter: "Múltiplo de salida", value: "...", source: "..." }]
  },

  sources: [
    { org: "Organismo / Autor", title: "Título del documento", desc: "Descripción breve.", href: "#" }
  ]
});
