const clients = [
  {
    name: 'MNC Company',
    descriptor: 'We work with multiple MNC companies as a master system integrator and building automation commissioning expert.',
  },
  {
    name: 'Graylinkx',
    descriptor: 'Customized 3D graphics development for equipment and CPM.',
  },
  {
    name: 'Secutech Automation',
    descriptor: 'Automation systems integration and specialist BMS and data-layer delivery on large campus estates.',
  },
  {
    name: 'Jindal Steel',
    descriptor: 'Integrated steel manufacturing, with industrial data engineering at the Angul plant and a custom edge module for cloud data transport.',
  },
  {
    name: 'Panzer IT',
    descriptor: 'Technology services partner on building data, integration and platform delivery.',
  },
];

const projects = [
  {
    title: 'Estate data modelled to the Google Digital Buildings ontology and onboarded over UDMI',
    client: 'Multinational technology client - engaged as a data modelling vendor',
    whatWeDid: "We were appointed as the data modelling vendor for the client's building estate, mapping equipment and points to the Google Digital Buildings ontology and onboarding devices through the Universal Device Management Interface. The work covered point inventory and normalisation, entity and field mapping against the published ontology, device configuration and payload construction for UDMI, and validation of the resulting model and telemetry against the specification.",
    whyItMattered: 'Google Digital Buildings and UDMI are strict by design. Entities that do not conform and payloads that do not validate are rejected outright, so the work is as much about disciplined naming, documentation and validation as it is about tagging. It is not a schema you can approximate.',
    technology: ['Google Digital Buildings ontology', 'UDMI', 'MQTT', 'BACnet'],
    year: 2024,
  },
  {
    title: 'Specialist Niagara commissioning against sequence of operation, with 3D facility graphics',
    client: 'Multinational client - specialist commissioning and visualisation package',
    whatWeDid: "Specialist commissioning of a Tridium Niagara building automation system, verified against the project's sequence of operation rather than against a functional walkthrough. Alongside the commissioning scope we produced a 3D graphics package for facility visualisation, giving the operations team a spatially accurate view of the plant they are responsible for.",
    whyItMattered: 'Commissioning against the written sequence - rather than confirming that equipment responds to a command - is what separates a system that works on handover day from one that keeps working. It is slower, it produces a defensible record, and it finds the sequence errors that a walkthrough does not.',
    technology: ['Tridium Niagara 4', 'BACnet/IP', '3D graphics and facility visualisation'],
    year: 2025,
  },
  {
    title: 'Custom N3uron module streams plant SCADA data to AWS over WebSocket, cutting cloud cost',
    client: 'Jindal Steel - Angul plant, centralised SCADA',
    challenge: "Data from the plant's centralised SCADA had to reach AWS, and the client's architecture called for a WebSocket transport rather than a standard off-the-shelf connector. No existing module met the requirement.",
    whatWeDid: "We developed a custom module inside N3uron implementing the client's WebSocket specification, so plant data streams to AWS through a single persistent managed connection rather than through per-message cloud ingestion.",
    result: "The WebSocket architecture substantially reduced the client's cloud ingestion cost compared with the conventional approach, while keeping the data pipeline within a platform the plant team already operates.",
    technology: ['N3uron', 'custom module development', 'WebSocket', 'AWS', 'industrial SCADA'],
    year: 2025,
  },
  {
    title: 'A single dashboard for campus-wide KPIs',
    client: 'Multinational client - multi-building campus',
    whatWeDid: "We built a custom dashboard bringing the client's campus-wide KPIs into one view, designed around the questions the facilities and operations teams actually ask rather than around the structure of the underlying systems.",
    whyItMattered: 'Campus data is almost always spread across several systems and several screens, which means the person who needs an answer has to assemble it manually and nobody looks at the whole picture regularly. Consolidating it into one intuitive view is what turns reporting from a monthly exercise into a daily habit.',
    technology: ['Grafana, Niagara', 'REST API', 'KPI set'],
    year: 2025,
  },
  {
    title: 'Critical-alarm utility with audible alerting and pop-up escalation',
    client: 'Multinational client - critical facility operations',
    whatWeDid: 'We developed a custom alarming utility for extreme-critical alarms. Where a standard alarm console relies on someone watching the screen, this escalates: an audible alert plus a pop-up on the operations dashboard, so a critical condition cannot pass unnoticed on an unattended workstation.',
    whyItMattered: 'In most buildings the truly critical alarms - the handful where minutes matter - sit in the same queue as several hundred routine ones and are acknowledged with the same reflex. Separating them into their own escalation path, with an alert the room cannot ignore, is a small piece of engineering with a disproportionate consequence.',
    technology: ['Custom utility development', 'audible and visual escalation'],
    year: 2026,
  },
];

export { clients, projects };