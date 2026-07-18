window.CASE_STUDIES = window.CASE_STUDIES || [];

window.CASE_STUDIES.push({
  id: "meridian-toll-road",
  sector: "core",
  sectorLabel: "Core Infrastructure",
  status: "example",

  name: "Meridian Toll Road",
  location: "Northern Corridor, illustrative example",
  size: "62 km · 2×2-lane toll road",
  tagline: "30-year toll road concession combining real tolling with a minimum guaranteed traffic mechanism.",

  metrics: [
    { label: "Equity IRR", value: "9.6%" },
    { label: "Gearing Ratio", value: "75%" },
    { label: "Cash on Cash Multiple", value: "1.48×" }
  ],

  facts: [
    { label: "Location", value: "Northern Corridor (illustrative example)" },
    { label: "Size", value: "62 km · 2×2 lanes" },
    { label: "Revenue mechanism", value: "Real tolling + minimum guaranteed traffic (years 1-10)" },
    { label: "Sponsor(s)", value: "Vía Infraestructuras (60%) / Continental Pension Fund (40%)" },
    { label: "Total capex", value: "€740M (4% contingency + IDC)" },
    { label: "Financing structure", value: "75% senior debt / 25% equity" },
    { label: "Concession period", value: "30 years" }
  ],

  executiveSummary: [
    "Meridian Toll Road is an illustrative case study for a 62 km, 30-year toll road concession with a hybrid revenue mechanism: real tolling complemented by a minimum guaranteed traffic level during the first decade, mitigating ramp-up risk.",
    "In the base case, the project generates an Equity IRR of 9.6% with a minimum DSCR of 1.28×, supported by a 75% leverage structure and the public traffic guarantee, which substantially reduces revenue volatility in the early years — the period of greatest uncertainty."
  ],

  scenarioTable: {
    caption: "Results by probabilistic traffic scenario",
    rows: [
      { label: "Equity IRR", unit: "%", p50: 9.6, p75: 7.1, p90: 4.8, p99: 1.2 },
      { label: "Min. DSCR", unit: "×", p50: 1.28, p75: 1.24, p90: 1.19, p99: 1.11 }
    ]
  },

  callouts: [
    { value: "5.8pp", text: "Equity IRR swing from a ±15% deviation in projected traffic post minimum-traffic period." },
    { value: "1.11×", text: "Minimum DSCR in P99, with a positive margin over the 1.05× covenant." },
    { value: "10 years", text: "Duration of the minimum traffic guarantee protecting the period of greatest uncertainty." }
  ],

  sensitivities: [
    { label: "Traffic (post minimum guarantee)", low: -5.8, high: 3.4, note: "Risk concentrates in years 11-30, once the minimum guaranteed traffic expires." },
    { label: "Construction capex", low: -3.9, high: 1.8, note: "Fixed-price EPC contract with delay penalties." },
    { label: "Inflation rate applied to toll", low: -2.5, high: 2.9, note: "Toll indexed to CPI with annual review." },
    { label: "Major maintenance costs (years 15/25)", low: -1.6, high: 0.9, note: "Maintenance Reserve Account (MRA) funded from year 5." },
    { label: "Interest rate", low: -0.6, high: 0.6, note: "70% of debt at fixed rate, 30% hedged with a 15-year swap." }
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
    { title: "Post-guarantee traffic is the dominant driver", body: "From year 11, once the minimum guaranteed traffic expires, the Equity IRR's sensitivity to real traffic jumps to 5.8 percentage points." },
    { title: "Toll indexation amplifies the upside", body: "A high-inflation scenario benefits the equity return more than it hurts the cost of debt, given the mostly fixed-rate debt mix." },
    { title: "Major maintenance is well contained", body: "The capex replacement peaks in years 15 and 25 are pre-funded via the reserve account, limiting their IRR impact to under 2 points." }
  ],

  insightsLenders: [
    { title: "Peak stress point is year 12", body: "DSCR hits its minimum (1.14×) right after the traffic guarantee expires, coinciding with the first major principal repayment cycle." },
    { title: "Reasonable covenant coverage margin", body: "Even in the P99 percentile, the minimum DSCR (1.11×) stays above the 1.05× covenant, with no default events in the model." },
    { title: "Traffic guarantee design reduces ramp-up risk", body: "The first 10 years — structurally the period of highest demand uncertainty — are protected by the minimum traffic mechanism, shifting residual risk to a period where the asset already has a track record." }
  ],

  modelFile: {
    name: "meridian_toll_road_model.xlsx",
    meta: "Excel workbook · Construction & Operations modules · Sample model",
    href: "#"
  },

  assumptions: {
    revenue: [
      { parameter: "Base toll rate", value: "€0.14/km (2026 prices)", source: "Comparable concession benchmark (example)" },
      { parameter: "Minimum guaranteed traffic", value: "85% of P50 traffic, years 1-10", source: "Concession term sheet (example)" }
    ],
    capex: [
      { parameter: "Total capex", value: "€740M", source: "EPC estimate + market benchmark" },
      { parameter: "Contingency", value: "4%", source: "Toll road sector benchmark" }
    ],
    opex: [
      { parameter: "Annual O&M", value: "€9.5k/km/year", source: "Toll road sector benchmark" }
    ],
    debt: [
      { parameter: "Interest rate (mixed fixed/hedged)", value: "5.1%", source: "Illustrative senior debt term sheet" },
      { parameter: "Gearing", value: "75%", source: "Sponsor's target structure" }
    ],
    equity: [
      { parameter: "Exit multiple", value: "10.5×", source: "Comparable transaction benchmark (example)" }
    ]
  },

  sources: [
    { org: "Illustrative example", title: "Toll road concession market data", desc: "Reference figures for demonstration purposes only.", href: "#" }
  ]
});
