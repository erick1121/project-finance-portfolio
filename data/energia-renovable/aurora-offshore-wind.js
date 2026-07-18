window.CASE_STUDIES = window.CASE_STUDIES || [];

window.CASE_STUDIES.push({
  id: "aurora-offshore-wind",
  sector: "renewable",
  sectorLabel: "Energía Renovable",
  status: "example",

  name: "Aurora Offshore Wind",
  location: "Mar del Norte, costa de Cantabria (ejemplo ilustrativo)",
  size: "1,200 MW · 80 turbinas × 15 MW",
  tagline: "Project finance de un parque eólico marino de 1.2 GW bajo contrato de precio garantizado a 25 años.",

  metrics: [
    { label: "Equity IRR", value: "11.2%" },
    { label: "Gearing Ratio", value: "70%" },
    { label: "Cash on Cash Multiple", value: "1.63×" }
  ],

  facts: [
    { label: "Ubicación", value: "Mar del Norte, costa de Cantabria (ejemplo ilustrativo)" },
    { label: "Capacidad", value: "1,200 MW (80 turbinas × 15 MW)" },
    { label: "Mecanismo de ingresos", value: "Precio garantizado (CfD), 88.5 €/MWh, precios 2026" },
    { label: "Promotor(es)", value: "Iberia Renewables (55%) / Nordic Capital Partners (45%)" },
    { label: "Capex total", value: "1,850 €M (contingencia 5% + IDC)" },
    { label: "Estructura de financiación", value: "70% deuda senior / 30% equity" },
    { label: "Periodo de operación", value: "25 años" }
  ],

  executiveSummary: [
    "Aurora Offshore Wind es un caso de estudio ilustrativo de financiación de proyecto para un parque eólico marino de 1.2 GW, estructurado bajo un contrato de precio garantizado a 25 años. El modelo evalúa la solidez del retorno de equity y la capacidad de repago de la deuda senior bajo escenarios adversos de capex, generación y tipos de interés.",
    "Bajo el caso base (P50), el proyecto genera un Equity IRR de 11.2% con un DSCR mínimo de 1.21×, sustentado por un ratio de apalancamiento del 70% y una cobertura de repago robusta durante toda la vida de la deuda."
  ],

  scenarioTable: {
    caption: "Resultados por escenario probabilístico de generación",
    rows: [
      { label: "Equity IRR", unit: "%", p50: 11.2, p75: 7.8, p90: 3.9, p99: -2.1 },
      { label: "DSCR Mínimo", unit: "×", p50: 1.21, p75: 1.19, p90: 1.17, p99: 1.12 }
    ]
  },

  callouts: [
    { value: "8.1pp", text: "Swing de Equity IRR ante ±10% de desviación en capex — la variable de mayor impacto." },
    { value: "1.12×", text: "DSCR mínimo incluso en P99, sin romper covenant en ningún percentil modelado." },
    { value: "±0.4pp", text: "Sensibilidad a tipos de interés, gracias a la cobertura desde el cierre financiero." }
  ],

  sensitivities: [
    { label: "Capex de construcción", low: -8.1, high: 2.4, note: "Mitigación: contratos EPC a precio fijo con liquidated damages y contingencia mínima del 5%." },
    { label: "Generación (recurso eólico)", low: -4.6, high: 3.1, note: "El DSRA de 6 meses absorbe la volatilidad estacional sin eventos de default." },
    { label: "Precio garantizado / indexación", low: -3.0, high: 3.0, note: "CfD indexado a CPI (2% p.a.) limita la exposición a precios de mercado." },
    { label: "Opex (O&M + conexión)", low: -2.2, high: 1.5, note: "Bloqueos contractuales de largo plazo reducen la volatilidad de costes." },
    { label: "Tipo de interés", low: -0.4, high: 0.4, note: "Swaps de tipo fijo desde el cierre financiero." }
  ],

  debtProfile: {
    covenantMin: 1.10,
    points: [
      { year: 1, dscr: 1.24 },
      { year: 3, dscr: 1.22 },
      { year: 5, dscr: 1.20 },
      { year: 7, dscr: 1.16 },
      { year: 9, dscr: 1.13 },
      { year: 11, dscr: 1.15 },
      { year: 13, dscr: 1.19 },
      { year: 15, dscr: 1.21 },
      { year: 18, dscr: 1.23 },
      { year: 21, dscr: 1.22 },
      { year: 25, dscr: 1.20 }
    ]
  },

  insightsPE: [
    { title: "El capex domina el retorno de equity", body: "Una desviación de ±10% sobre el capex base desplaza el Equity IRR en 8.1 puntos porcentuales, muy por delante de cualquier otra variable." },
    { title: "La generación es el segundo driver", body: "El recurso eólico explica gran parte de la dispersión entre P50 y P99, aunque queda contenido por el diseño de las reservas de liquidez." },
    { title: "Baja sensibilidad a tipos de interés", body: "La cobertura de tipo fijo desde el cierre financiero limita el riesgo de refinanciación a un rango de ±0.4pp en el IRR." }
  ],

  insightsLenders: [
    { title: "DSCR robusto en todos los percentiles modelados", body: "El mínimo se mantiene en 1.12× incluso en P99, sin ruptura de covenant (umbral 1.10×) en ningún escenario." },
    { title: "Sin riesgo de 'cliff' en la amortización", body: "El perfil de repago muestra una curva suave durante los 25 años de deuda, sin picos de exposición concentrados." },
    { title: "Punto de mayor tensión en el año 9", body: "El DSCR toca su mínimo relativo por el solapamiento de mantenimiento mayor y baja generación estacional, recuperándose con normalidad después." }
  ],

  modelFile: {
    name: "aurora_offshore_wind_model.xlsx",
    meta: "Excel workbook · Construction & Operations modules · Modelo de ejemplo",
    href: "#"
  },

  assumptions: {
    revenue: [
      { parameter: "Precio garantizado (CfD)", value: "88.5 €/MWh (precios 2026)", source: "Subasta de energía renovable, ronda ilustrativa" },
      { parameter: "P50 Net Annual Generation", value: "4,750 GWh/año (45.2% factor de capacidad)", source: "Estudio de recurso eólico independiente (ejemplo)" }
    ],
    capex: [
      { parameter: "Capex total", value: "1,850 €M", source: "Estimación EPC + benchmark de mercado" },
      { parameter: "Contingencia", value: "5%", source: "Benchmark sectorial offshore wind" }
    ],
    opex: [
      { parameter: "O&M anual", value: "38 k€/MW/año", source: "Benchmark sectorial offshore wind" }
    ],
    debt: [
      { parameter: "Tipo de interés (construcción)", value: "5.4%", source: "Term sheet ilustrativo de deuda senior" },
      { parameter: "Gearing", value: "70%", source: "Estructura objetivo del sponsor" }
    ],
    equity: [
      { parameter: "Múltiplo de salida", value: "12.0×", source: "Benchmark de transacciones comparables (ejemplo)" }
    ]
  },

  sources: [
    { org: "Ejemplo ilustrativo", title: "Datos de mercado de energía eólica offshore", desc: "Cifras de referencia para fines demostrativos del portfolio.", href: "#" }
  ]
});
