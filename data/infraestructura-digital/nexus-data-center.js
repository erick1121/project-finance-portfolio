window.CASE_STUDIES = window.CASE_STUDIES || [];

window.CASE_STUDIES.push({
  id: "nexus-data-center",
  sector: "digital",
  sectorLabel: "Infraestructura Digital",
  status: "example",

  name: "Nexus Data Center Campus",
  location: "Hub digital del Sur de Europa, ejemplo ilustrativo",
  size: "48 MW de carga IT · campus de 3 edificios",
  tagline: "Financiación de un campus de data centers hyperscale bajo contratos de arrendamiento a largo plazo con un único ancla tenant.",

  metrics: [
    { label: "Equity IRR", value: "13.4%" },
    { label: "Gearing Ratio", value: "65%" },
    { label: "Cash on Cash Multiple", value: "1.79×" }
  ],

  facts: [
    { label: "Ubicación", value: "Hub digital del Sur de Europa (ejemplo ilustrativo)" },
    { label: "Capacidad", value: "48 MW de carga IT · 3 edificios" },
    { label: "Mecanismo de ingresos", value: "Contrato de arrendamiento (lease) a 15 años con tenant ancla hyperscale" },
    { label: "Promotor(es)", value: "Digital Core Partners (50%) / Helios Infrastructure Fund (50%)" },
    { label: "Capex total", value: "560 €M (contingencia 6% + IDC)" },
    { label: "Estructura de financiación", value: "65% deuda senior / 35% equity" },
    { label: "Periodo de contrato", value: "15 años (con opción de renovación de 2×5 años)" }
  ],

  executiveSummary: [
    "Nexus Data Center Campus es un caso de estudio ilustrativo de financiación de un campus de tres data centers hyperscale (48 MW de carga IT), estructurado sobre un contrato de arrendamiento a 15 años con un único tenant ancla de grado inversión.",
    "Bajo el caso base, el proyecto genera un Equity IRR de 13.4%, el más alto de los tres sectores del portfolio, reflejando tanto el crecimiento estructural de la demanda de capacidad digital como el riesgo de concentración en un único tenant, mitigado por la solidez crediticia del contrato y una cláusula de renovación anticipada."
  ],

  scenarioTable: {
    caption: "Resultados por escenario probabilístico de ocupación y renovación",
    rows: [
      { label: "Equity IRR", unit: "%", p50: 13.4, p75: 9.8, p90: 5.1, p99: -1.4 },
      { label: "DSCR Mínimo", unit: "×", p50: 1.35, p75: 1.29, p90: 1.20, p99: 1.09 }
    ]
  },

  callouts: [
    { value: "9.2pp", text: "Swing de Equity IRR ante un escenario de no renovación del tenant ancla al año 15." },
    { value: "1.09×", text: "DSCR mínimo en P99 — el único punto del portfolio que se acerca al covenant de 1.05×." },
    { value: "97%", text: "Ocupación contratada desde el día 1 gracias al pre-lease con el tenant ancla." }
  ],

  sensitivities: [
    { label: "Renovación del tenant ancla (año 15)", low: -9.2, high: 0, note: "El riesgo de concentración en un único tenant es el principal driver de downside del portfolio." },
    { label: "Capex de construcción (equipamiento crítico)", low: -4.8, high: 1.9, note: "Cadena de suministro de equipos de refrigeración y generadores como principal riesgo de sobrecoste." },
    { label: "Precio de la energía (PPA parcial)", low: -3.1, high: 2.2, note: "40% del consumo cubierto por PPA a 10 años, el resto expuesto a mercado mayorista." },
    { label: "Costes de conectividad y fibra", low: -1.4, high: 0.8, note: "Contratos de conectividad a precio fijo con los principales carriers." },
    { label: "Tipo de interés", low: -0.5, high: 0.5, note: "Cobertura de tipo fijo sobre el 80% de la deuda senior." }
  ],

  debtProfile: {
    covenantMin: 1.05,
    points: [
      { year: 1, dscr: 1.38 },
      { year: 3, dscr: 1.36 },
      { year: 5, dscr: 1.33 },
      { year: 7, dscr: 1.30 },
      { year: 9, dscr: 1.27 },
      { year: 11, dscr: 1.24 },
      { year: 13, dscr: 1.20 },
      { year: 15, dscr: 1.09 },
      { year: 17, dscr: 1.22 },
      { year: 20, dscr: 1.26 }
    ]
  },

  insightsPE: [
    { title: "La concentración en un único tenant domina el riesgo", body: "El escenario de no renovación en el año 15 es, con diferencia, la mayor fuente de downside del Equity IRR (-9.2pp), muy por delante del riesgo de construcción o de precio de la energía." },
    { title: "El crecimiento estructural de demanda sostiene el upside", body: "La escasez de capacidad de datacenter en el hub regional da soporte a escenarios de renovación anticipada o expansión, no capturados en el caso base conservador." },
    { title: "El PPA parcial limita la exposición a precios de energía", body: "Con un 40% del consumo cubierto, el proyecto retiene upside en mercados de energía a la baja sin exponerse por completo a la volatilidad del pool." }
  ],

  insightsLenders: [
    { title: "El año 15 es el punto crítico de la estructura de deuda", body: "El DSCR cae a 1.09× coincidiendo exactamente con el vencimiento del contrato de arrendamiento inicial, el único momento del proyecto donde el margen sobre covenant (1.05×) es mínimo." },
    { title: "Perfil de amortización acelerado antes del año 15", body: "La estructura de deuda amortiza más rápido en los primeros 15 años precisamente para reducir el saldo vivo antes del punto de mayor incertidumbre de renovación." },
    { title: "Recomendación: covenant de refinanciación o cash sweep en año 13", body: "Un mecanismo de cash sweep adicional dos años antes del vencimiento del lease reduciría further el riesgo de refinanciación en el escenario de no renovación." }
  ],

  modelFile: {
    name: "nexus_data_center_model.xlsx",
    meta: "Excel workbook · Construction & Operations modules · Modelo de ejemplo",
    href: "#"
  },

  assumptions: {
    revenue: [
      { parameter: "Renta anual por MW contratado", value: "310 k€/MW/año", source: "Benchmark de mercado de colocation hyperscale (ejemplo)" },
      { parameter: "Ocupación contratada al cierre", value: "97% (pre-lease con tenant ancla)", source: "Term sheet del contrato de arrendamiento (ejemplo)" }
    ],
    capex: [
      { parameter: "Capex total", value: "560 €M", source: "Estimación EPC + benchmark de mercado" },
      { parameter: "Contingencia", value: "6%", source: "Benchmark sectorial de data centers hyperscale" }
    ],
    opex: [
      { parameter: "O&M + energía no cubierta por PPA", value: "62 k€/MW/año", source: "Benchmark sectorial de data centers" }
    ],
    debt: [
      { parameter: "Tipo de interés (80% cubierto)", value: "5.6%", source: "Term sheet ilustrativo de deuda senior" },
      { parameter: "Gearing", value: "65%", source: "Estructura objetivo del sponsor" }
    ],
    equity: [
      { parameter: "Múltiplo de salida", value: "14.0×", source: "Benchmark de transacciones comparables (ejemplo)" }
    ]
  },

  sources: [
    { org: "Ejemplo ilustrativo", title: "Datos de mercado de infraestructura digital", desc: "Cifras de referencia para fines demostrativos del portfolio.", href: "#" }
  ]
});
