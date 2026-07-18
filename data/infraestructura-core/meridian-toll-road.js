window.CASE_STUDIES = window.CASE_STUDIES || [];

window.CASE_STUDIES.push({
  id: "meridian-toll-road",
  sector: "core",
  sectorLabel: "Infraestructura Core",
  status: "example",

  name: "Meridian Toll Road",
  location: "Corredor Norte, ejemplo ilustrativo",
  size: "62 km · autopista de peaje de 2×2 carriles",
  tagline: "Concesión de autopista de peaje a 30 años con mecanismo de disponibilidad y tráfico mínimo garantizado.",

  metrics: [
    { label: "Equity IRR", value: "9.6%" },
    { label: "Gearing Ratio", value: "75%" },
    { label: "Cash on Cash Multiple", value: "1.48×" }
  ],

  facts: [
    { label: "Ubicación", value: "Corredor Norte (ejemplo ilustrativo)" },
    { label: "Tamaño", value: "62 km · 2×2 carriles" },
    { label: "Mecanismo de ingresos", value: "Peaje real + tráfico mínimo garantizado (años 1-10)" },
    { label: "Promotor(es)", value: "Vía Infraestructuras (60%) / Continental Pension Fund (40%)" },
    { label: "Capex total", value: "740 €M (contingencia 4% + IDC)" },
    { label: "Estructura de financiación", value: "75% deuda senior / 25% equity" },
    { label: "Periodo de concesión", value: "30 años" }
  ],

  executiveSummary: [
    "Meridian Toll Road es un caso de estudio ilustrativo de una concesión de autopista de peaje de 62 km a 30 años, con un mecanismo híbrido de ingresos: peaje real complementado por un tráfico mínimo garantizado durante la primera década para mitigar el riesgo de rampa de tráfico (ramp-up risk).",
    "En el caso base, el proyecto genera un Equity IRR de 9.6% con un DSCR mínimo de 1.28×, apoyado en una estructura de apalancamiento del 75% y en la garantía pública de tráfico mínimo que reduce sustancialmente la volatilidad de ingresos en los primeros años, el periodo de mayor incertidumbre."
  ],

  scenarioTable: {
    caption: "Resultados por escenario probabilístico de tráfico",
    rows: [
      { label: "Equity IRR", unit: "%", p50: 9.6, p75: 7.1, p90: 4.8, p99: 1.2 },
      { label: "DSCR Mínimo", unit: "×", p50: 1.28, p75: 1.24, p90: 1.19, p99: 1.11 }
    ]
  },

  callouts: [
    { value: "5.8pp", text: "Swing de Equity IRR ante ±15% de desviación en el tráfico proyectado post tráfico-mínimo." },
    { value: "1.11×", text: "DSCR mínimo en P99, con margen positivo sobre el covenant de 1.05×." },
    { value: "10 años", text: "Duración de la garantía de tráfico mínimo que protege el periodo de mayor incertidumbre." }
  ],

  sensitivities: [
    { label: "Tráfico (post garantía mínima)", low: -5.8, high: 3.4, note: "El riesgo se concentra en los años 11-30, una vez expira el tráfico mínimo garantizado." },
    { label: "Capex de construcción", low: -3.9, high: 1.8, note: "Contrato EPC a precio fijo con penalizaciones por retraso." },
    { label: "Tasa de inflación aplicada al peaje", low: -2.5, high: 2.9, note: "Peaje indexado a IPC con revisión anual." },
    { label: "Costes de mantenimiento mayor (años 15/25)", low: -1.6, high: 0.9, note: "Fondo de reserva de mantenimiento (MRA) dotado desde el año 5." },
    { label: "Tipo de interés", low: -0.6, high: 0.6, note: "70% de la deuda a tipo fijo, 30% cubierto con swap a 15 años." }
  ],

  debtProfile: {
    covenantMin: 1.05,
    points: [
      { year: 1, dscr: 1.32 },
      { year: 3, dscr: 1.29 },
      { year: 5, dscr: 1.27 },
      { year: 8, dscr: 1.24 },
      { year: 10, dscr: 1.20 },
      { year: 12, dscr: 1.14 },
      { year: 15, dscr: 1.16 },
      { year: 18, dscr: 1.19 },
      { year: 22, dscr: 1.22 },
      { year: 26, dscr: 1.24 },
      { year: 30, dscr: 1.21 }
    ]
  },

  insightsPE: [
    { title: "El tráfico post-garantía es el driver dominante", body: "A partir del año 11, cuando expira el tráfico mínimo garantizado, la sensibilidad del Equity IRR al tráfico real se dispara a 5.8 puntos porcentuales." },
    { title: "La indexación del peaje amplifica el upside", body: "Un escenario de inflación alta favorece el retorno de equity más que perjudica el coste de la deuda, dado el mix de tipo fijo mayoritario." },
    { title: "El mantenimiento mayor está bien acotado", body: "Los picos de capex de reposición en los años 15 y 25 están pre-financiados vía el fondo de reserva, limitando su impacto en el IRR a menos de 2 puntos." }
  ],

  insightsLenders: [
    { title: "El punto de mayor tensión es el año 12", body: "El DSCR toca su mínimo (1.14×) justo tras la expiración de la garantía de tráfico, coincidiendo con el primer gran ciclo de repago de principal." },
    { title: "Cobertura de covenant con margen razonable", body: "Incluso en el percentil P99 el DSCR mínimo (1.11×) queda por encima del covenant de 1.05×, sin eventos de default en el modelo." },
    { title: "El diseño de la garantía de tráfico reduce el riesgo de rampa", body: "Los primeros 10 años, estructuralmente los de mayor incertidumbre de demanda, quedan protegidos por el mecanismo de tráfico mínimo, trasladando el riesgo residual a un periodo donde el activo ya tiene track record." }
  ],

  modelFile: {
    name: "meridian_toll_road_model.xlsx",
    meta: "Excel workbook · Construction & Operations modules · Modelo de ejemplo",
    href: "#"
  },

  assumptions: {
    revenue: [
      { parameter: "Tarifa de peaje base", value: "0.14 €/km (precios 2026)", source: "Benchmark de concesiones comparables (ejemplo)" },
      { parameter: "Tráfico mínimo garantizado", value: "85% del tráfico P50, años 1-10", source: "Term sheet de la concesión (ejemplo)" }
    ],
    capex: [
      { parameter: "Capex total", value: "740 €M", source: "Estimación EPC + benchmark de mercado" },
      { parameter: "Contingencia", value: "4%", source: "Benchmark sectorial de autopistas de peaje" }
    ],
    opex: [
      { parameter: "O&M anual", value: "9.5 k€/km/año", source: "Benchmark sectorial de autopistas de peaje" }
    ],
    debt: [
      { parameter: "Tipo de interés (mixto fijo/cubierto)", value: "5.1%", source: "Term sheet ilustrativo de deuda senior" },
      { parameter: "Gearing", value: "75%", source: "Estructura objetivo del sponsor" }
    ],
    equity: [
      { parameter: "Múltiplo de salida", value: "10.5×", source: "Benchmark de transacciones comparables (ejemplo)" }
    ]
  },

  sources: [
    { org: "Ejemplo ilustrativo", title: "Datos de mercado de concesiones de autopistas", desc: "Cifras de referencia para fines demostrativos del portfolio.", href: "#" }
  ]
});
