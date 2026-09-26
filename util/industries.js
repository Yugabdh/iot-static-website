const industries = [
  {
    slug: 'commercial-buildings',
    title: 'Commercial Buildings',
    eyebrow: '01',
    indexDescription:
      'Vendor-neutral automation, measurable energy performance, faults found before complaints.',
    headline: 'Energy Performance You Can Evidence',
    body:
      'Most commercial estates run on controls they cannot change and data they cannot use. We deliver vendor-neutral automation, sequences written to ASHRAE Guideline 36, and automated fault detection that surfaces problems before a complaint reaches the helpdesk. We would rather be judged on what the building does after we leave than on what the handover file says.',
    capabilities: [
      'Vendor-neutral delivery — open protocols, published schemas, complete handover',
      'ASHRAE Guideline 36 sequences and continuous commissioning',
      'Automated fault detection and condition-based maintenance',
    ],
    metaTitle: 'Commercial Building Automation & Energy | SD IoTecs',
    metaDescription:
      'Vendor-neutral BMS for commercial estates — ASHRAE Guideline 36 sequences, continuous commissioning and automated fault detection.',
  },
  {
    slug: 'industrial-data',
    title: 'Industrial Data',
    eyebrow: '02',
    indexDescription:
      'Thousands of sources, one pipeline — engineered for scale, latency and cloud cost.',
    headline: 'Plant Data at Scale, Without the Cloud Bill',
    body:
      'Industrial estates generate data from thousands of sources across SCADA, PLCs, meters and historians. Bringing it together is straightforward. Bringing it together at scale, without a cloud invoice that grows faster than the value it produces, is not. We design for both — demand-driven polling, efficient transport, and custom development where off-the-shelf connectors do not fit the requirement.',
    capabilities: [
      'Architecture and consultation across thousands of tag sources',
      'Demand-driven polling and efficient transport to cut ingestion cost',
      'Custom module development where standard connectors fall short',
    ],
    proof:
      'Jindal Steel, Angul — custom N3uron module streaming centralised SCADA data to AWS over WebSocket, reducing cloud ingestion cost.',
    metaTitle: 'Industrial Data Engineering at Scale | SD IoTecs',
    metaDescription:
      'Plant data from thousands of sources into one pipeline, engineered for scale, latency and cloud cost. Custom edge development where needed.',
  },
  {
    slug: 'data-centres',
    title: 'Data Centres',
    eyebrow: '03',
    indexDescription:
      'PUE and the metrics beneath it, in a dashboard people actually use.',
    headline: 'Know Your PUE, and What Is Driving It',
    body:
      'PUE is the headline number, and on its own it tells you very little. It becomes useful when you can see what sits underneath it and why it moved this month. We instrument the plant, collect and model the data, and build the view that makes the number actionable — cooling efficiency, IT load, water, and the trends that explain the movement.',
    capabilities: [
      'PUE, WUE and plant efficiency defined, instrumented and tracked over time',
      'Thermal and environmental monitoring aligned to ASHRAE TC 9.9 guidance',
      'Cloud integration on public or private infrastructure, to your security model',
    ],
    metaTitle: 'Data Centre Monitoring, PUE & Dashboards | SD IoTecs',
    metaDescription:
      'PUE, WUE and plant efficiency instrumented, modelled and presented in dashboards teams use. Cloud integration on public or private infrastructure.',
  },
  {
    slug: 'pharmaceutical-cleanroom',
    title: 'Pharmaceutical & Cleanroom',
    eyebrow: '04',
    indexDescription:
      'Environmental monitoring and reporting that stands up in an audit.',
    headline: 'Reports Ready for the Auditor, Not Just the Screen',
    body:
      'In a regulated facility the control system is half the deliverable. The other half is the record — complete, attributable, and produced without anyone retyping a value into a spreadsheet. We build monitoring and reporting for temperature, humidity, differential pressure and the classified-area parameters your grade requires, in formats your quality function can take into an inspection.',
    capabilities: [
      'Temperature, humidity, differential pressure and classification parameters',
      'Scheduled and on-demand reports in PDF, Excel and CSV, generated from history',
      'Excursion and acknowledgement records, with data gaps shown rather than interpolated',
    ],
    metaTitle: 'Cleanroom Monitoring & GMP Reporting | SD IoTecs',
    metaDescription:
      'Environmental monitoring and audit-ready reporting for GMP cleanrooms — temperature, humidity, differential pressure and classified-area parameters.',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    eyebrow: '05',
    indexDescription:
      'Precise control where it is critical, efficient control everywhere else.',
    headline: 'An Operating Theatre and an OPD Are Not the Same Problem',
    body:
      'An operating theatre needs tight temperature, humidity and pressure control, and will not trade any of it for energy. An OPD corridor is the opposite. Most hospital systems treat both the same way and get both wrong — critical spaces that drift, and general areas that run as if they were theatres. We design and commission to the requirement of each space.',
    capabilities: [
      'Precision temperature, humidity and pressure control for OTs and critical care',
      'Ventilation and filtration design intent verified at commissioning',
      'Energy strategy across OPD and general areas, without touching critical setpoints',
    ],
    metaTitle: 'Hospital HVAC Controls & OT Precision | SD IoTecs',
    metaDescription:
      'Precision temperature, humidity and pressure control for operating theatres and critical care, with energy efficiency across OPD and general areas.',
  },
  {
    slug: 'hotels-resorts',
    title: 'Hotels & Resorts',
    eyebrow: '06',
    indexDescription:
      'Guest room management that feels premium and still saves energy.',
    headline: 'The Room Should Feel Effortless',
    body:
      'Guest room management is judged twice: on how the room feels in the first ten seconds, and on what the property spends across a year. Those pull against each other unless the system is designed properly. We deliver GRMS that gives the guest immediate, obvious control, and gives the property occupancy-driven setback on every room nobody is in.',
    capabilities: [
      'Guest room management — lighting, climate, drapes, scenes, DND and service call',
      'Occupancy and key-card driven setback across unoccupied rooms',
      'Estate-wide visibility of room status, faults and energy from one interface',
    ],
    metaTitle: 'Guest Room Management Systems | Hotels | SD IoTecs',
    metaDescription:
      'Guest room management that feels premium and cuts energy — lighting, climate, scenes, occupancy-driven setback and estate-wide visibility.',
  },
];

export default industries;
