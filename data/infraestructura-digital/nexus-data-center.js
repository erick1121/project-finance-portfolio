window.CASE_STUDIES = window.CASE_STUDIES || [];

window.CASE_STUDIES.push({
  id: "nexus-data-center",
  sector: "digital",
  sectorLabel: "Digital Infrastructure",
  status: "example",

  name: "Nexus Data Center Campus",
  location: "Southern Europe digital hub, illustrative example",
  size: "48 MW IT load · 3-building campus",
  tagline: "Financing for a hyperscale data center campus under long-term lease contracts with a single anchor tenant.",

  metrics: [
    { label: "Equity IRR", value: "13.4%" },
    { label: "Gearing Ratio", value: "65%" },
    { label: "Cash on Cash Multiple", value: "1.79×" }
  ],

  facts: [
    { label: "Location", value: "Southern Europe digital hub (illustrative example)" },
    { label: "Capacity", value: "48 MW IT load · 3 buildings" },
    { label: "Revenue mechanism", value: "15-year lease contract with a hyperscale anchor tenant" },
    { label: "Sponsor(s)", value: "Digital Core Partners (50%) / Helios Infrastructure Fund (50%)" },
    { label: "Total capex", value: "€560M (6% contingency + IDC)" },
    { label: "Financing structure", value: "65% senior debt / 35% equity" },
    { label: "Contract period", value: "15 years (with 2×5-year renewal option)" }
  ],

  executiveSummary: [
    "Nexus Data Center Campus is an illustrative case study for financing a three-building hyperscale data center campus (48 MW IT load), structured around a 15-year lease contract with a single investment-grade anchor tenant.",
    "In the base case, the project generates a 13.4% Equity IRR — the highest of the portfolio's three sectors — reflecting both the structural growth in digital capacity demand and the concentration risk of a single tenant, mitigated by the contract's credit strength and an early-renewal clause."
  ],

  scenarioTable: {
    caption: "Results by probabilistic occupancy and renewal scenario",
    rows: [
      { label: "Equity IRR", unit: "%", p50: 13.4, p75: 9.8, p90: 5.1, p99: -1.4 },
      { label: "Min. DSCR", unit: "×", p50: 1.35, p75: 1.29, p90: 1.20, p99: 1.09 }
    ]
  },

  callouts: [
    { value: "9.2pp", text: "Equity IRR swing under a non-renewal scenario for the anchor tenant at year 15." },
    { value: "1.09×", text: "Minimum DSCR in P99 — the only point in the portfolio that approaches the 1.05× covenant." },
    { value: "97%", text: "Contracted occupancy from day 1, thanks to the pre-lease with the anchor tenant." }
  ],

  sensitivities: [
    { label: "Anchor tenant renewal (year 15)", low: -9.2, high: 0, note: "Single-tenant concentration risk is the portfolio's main downside driver." },
    { label: "Construction capex (critical equipment)", low: -4.8, high: 1.9, note: "Cooling equipment and generator supply chain as the main cost overrun risk." },
    { label: "Energy price (partial PPA)", low: -3.1, high: 2.2, note: "40% of consumption covered by a 10-year PPA, the rest exposed to the wholesale market." },
    { label: "Connectivity and fiber costs", low: -1.4, high: 0.8, note: "Fixed-price connectivity contracts with major carriers." },
    { label: "Interest rate", low: -0.5, high: 0.5, note: "Fixed-rate hedge on 80% of senior debt." }
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
    { title: "Single-tenant concentration dominates the risk", body: "The non-renewal scenario at year 15 is, by far, the portfolio's largest source of Equity IRR downside (-9.2pp), well ahead of construction or energy price risk." },
    { title: "Structural demand growth supports the upside", body: "Data center capacity scarcity in the regional hub supports early-renewal or expansion scenarios, not captured in the conservative base case." },
    { title: "The partial PPA limits energy price exposure", body: "With 40% of consumption covered, the project retains upside in falling energy markets without full exposure to pool volatility." }
  ],

  insightsLenders: [
    { title: "Year 15 is the critical point in the debt structure", body: "DSCR drops to 1.09×, coinciding exactly with the initial lease contract's expiry — the single moment in the project with the thinnest margin over the 1.05× covenant." },
    { title: "Accelerated amortization profile before year 15", body: "The debt structure amortizes faster in the first 15 years specifically to reduce the outstanding balance ahead of the point of greatest renewal uncertainty." },
    { title: "Recommendation: refinancing covenant or cash sweep at year 13", body: "An additional cash sweep mechanism two years ahead of the lease expiry would further reduce refinancing risk in the non-renewal scenario." }
  ],

  modelFile: {
    name: "nexus_data_center_model.xlsx",
    meta: "Excel workbook · Construction & Operations modules · Sample model",
    href: "#"
  },

  assumptions: {
    revenue: [
      { parameter: "Annual rent per contracted MW", value: "€310k/MW/year", source: "Hyperscale colocation market benchmark (example)" },
      { parameter: "Occupancy contracted at close", value: "97% (pre-lease with anchor tenant)", source: "Lease contract term sheet (example)" }
    ],
    capex: [
      { parameter: "Total capex", value: "€560M", source: "EPC estimate + market benchmark" },
      { parameter: "Contingency", value: "6%", source: "Hyperscale data center sector benchmark" }
    ],
    opex: [
      { parameter: "O&M + energy not covered by PPA", value: "€62k/MW/year", source: "Data center sector benchmark" }
    ],
    debt: [
      { parameter: "Interest rate (80% hedged)", value: "5.6%", source: "Illustrative senior debt term sheet" },
      { parameter: "Gearing", value: "65%", source: "Sponsor's target structure" }
    ],
    equity: [
      { parameter: "Exit multiple", value: "14.0×", source: "Comparable transaction benchmark (example)" }
    ]
  },

  sources: [
    { org: "Illustrative example", title: "Digital infrastructure market data", desc: "Reference figures for demonstration purposes only.", href: "#" }
  ]
});
