window.CASE_STUDIES = window.CASE_STUDIES || [];

window.CASE_STUDIES.push({
  id: "aurora-offshore-wind",
  sector: "renewable",
  sectorLabel: "Renewable Energy",
  status: "example",

  name: "Aurora Offshore Wind",
  location: "North Sea, off the coast of Cantabria (illustrative example)",
  size: "1,200 MW · 80 turbines × 15 MW",
  tagline: "Project finance for a 1.2 GW offshore wind farm under a 25-year guaranteed-price contract.",

  metrics: [
    { label: "Equity IRR", value: "11.2%" },
    { label: "Gearing Ratio", value: "70%" },
    { label: "Cash on Cash Multiple", value: "1.63×" }
  ],

  facts: [
    { label: "Location", value: "North Sea, off the coast of Cantabria (illustrative example)" },
    { label: "Capacity", value: "1,200 MW (80 turbines × 15 MW)" },
    { label: "Revenue mechanism", value: "Guaranteed price (CfD), €88.5/MWh, 2026 prices" },
    { label: "Sponsor(s)", value: "Iberia Renewables (55%) / Nordic Capital Partners (45%)" },
    { label: "Total capex", value: "€1,850M (5% contingency + IDC)" },
    { label: "Financing structure", value: "70% senior debt / 30% equity" },
    { label: "Operating period", value: "25 years" }
  ],

  executiveSummary: [
    "Aurora Offshore Wind is an illustrative project finance case study for a 1.2 GW offshore wind farm, structured under a 25-year guaranteed-price contract. The model assesses the strength of the equity return and the senior debt's repayment capacity under adverse scenarios for capex, generation, and interest rates.",
    "Under the base case (P50), the project generates an Equity IRR of 11.2% with a minimum DSCR of 1.21×, supported by a 70% leverage ratio and robust repayment coverage across the life of the debt."
  ],

  scenarioTable: {
    caption: "Results by probabilistic generation scenario",
    rows: [
      { label: "Equity IRR", unit: "%", p50: 11.2, p75: 7.8, p90: 3.9, p99: -2.1 },
      { label: "Min. DSCR", unit: "×", p50: 1.21, p75: 1.19, p90: 1.17, p99: 1.12 }
    ]
  },

  callouts: [
    { value: "8.1pp", text: "Equity IRR swing from a ±10% deviation in capex — the highest-impact variable." },
    { value: "1.12×", text: "Minimum DSCR even in P99, without breaching covenant in any modeled percentile." },
    { value: "±0.4pp", text: "Sensitivity to interest rates, thanks to hedging in place since financial close." }
  ],

  sensitivities: [
    { label: "Construction capex", low: -8.1, high: 2.4, note: "Mitigation: fixed-price EPC contracts with liquidated damages and a minimum 5% contingency." },
    { label: "Generation (wind resource)", low: -4.6, high: 3.1, note: "The 6-month DSRA absorbs seasonal volatility without triggering default events." },
    { label: "Guaranteed price / indexation", low: -3.0, high: 3.0, note: "CPI-indexed CfD (2% p.a.) limits exposure to market prices." },
    { label: "Opex (O&M + connection)", low: -2.2, high: 1.5, note: "Long-term contractual lock-ins reduce cost volatility." },
    { label: "Interest rate", low: -0.4, high: 0.4, note: "Fixed-rate swaps in place since financial close." }
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
    { title: "Capex dominates the equity return", body: "A ±10% deviation from base capex shifts the Equity IRR by 8.1 percentage points, well ahead of any other variable." },
    { title: "Generation is the second driver", body: "Wind resource explains much of the dispersion between P50 and P99, though it remains contained by the liquidity reserve design." },
    { title: "Low sensitivity to interest rates", body: "Fixed-rate hedging since financial close limits refinancing risk to a range of ±0.4pp in the IRR." }
  ],

  insightsLenders: [
    { title: "Robust DSCR across all modeled percentiles", body: "The minimum holds at 1.12× even in P99, with no covenant breach (1.10× threshold) in any scenario." },
    { title: "No 'cliff' risk in the amortization profile", body: "The repayment schedule shows a smooth curve over the 25-year debt tenor, with no concentrated exposure spikes." },
    { title: "Peak stress point in year 9", body: "DSCR hits its relative minimum from overlapping major maintenance and low seasonal generation, recovering normally afterward." }
  ],

  modelFile: {
    name: "aurora_offshore_wind_model.xlsx",
    meta: "Excel workbook · Construction & Operations modules · Sample model",
    href: "#"
  },

  assumptions: {
    revenue: [
      { parameter: "Guaranteed price (CfD)", value: "€88.5/MWh (2026 prices)", source: "Illustrative renewable energy auction round" },
      { parameter: "P50 net annual generation", value: "4,750 GWh/year (45.2% capacity factor)", source: "Independent wind resource study (example)" }
    ],
    capex: [
      { parameter: "Total capex", value: "€1,850M", source: "EPC estimate + market benchmark" },
      { parameter: "Contingency", value: "5%", source: "Offshore wind sector benchmark" }
    ],
    opex: [
      { parameter: "Annual O&M", value: "€38k/MW/year", source: "Offshore wind sector benchmark" }
    ],
    debt: [
      { parameter: "Interest rate (construction)", value: "5.4%", source: "Illustrative senior debt term sheet" },
      { parameter: "Gearing", value: "70%", source: "Sponsor's target structure" }
    ],
    equity: [
      { parameter: "Exit multiple", value: "12.0×", source: "Comparable transaction benchmark (example)" }
    ]
  },

  sources: [
    { org: "Illustrative example", title: "Offshore wind energy market data", desc: "Reference figures for demonstration purposes only.", href: "#" }
  ]
});
