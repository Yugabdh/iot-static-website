const services = [
  {
    slug: 'bms-supply-installation-testing-commissioning',
    title: 'BMS Supply, Installation, Testing & Commissioning',
    shortTitle: 'Supply, Installation, Testing & Commissioning',
    icon: '/images/png/icons/services.png',
    summary: 'End-to-end BMS delivery under one accountable contract — from panel schedule to functional testing and documented handover.',
    metaTitle: 'BMS Installation & Commissioning | SITC | SD IoTecs',
    metaDescription: 'End-to-end BMS supply, installation, testing and commissioning on Tridium Niagara, LOYTEC and EasyIO. Panel fabrication to documented handover.',
    intro: 'One contract, one accountable party, from the panel schedule to the signed commissioning record. We take responsibility for the whole delivery procurement, fabrication, installation supervision, testing and handover so you are not coordinating four vendors and arbitrating between them when a valve does not respond.',
    cta: {
      label: 'Send us your specification',
      href: '/contact-us',
    },
    sections: [
      {
        heading: 'What the Scope Includes',
        groups: [
          {
            subheading: 'Design and Engineering',
            items: [
              'Design review and constructability check against the consultant\'s specification, control schematics and sequences of operation',
              'Points schedule development, I/O verification and spare capacity assessment',
              'Control panel design, general arrangement drawings and panel schedules',
              'Network architecture design — BACnet/IP, MS/TP trunk loading, IP addressing and segmentation',
              'Controller sizing and platform selection, with the reasoning written down',
            ],
          },
          {
            subheading: 'Supply and Fabrication',
            items: [
              'Control panel fabrication including power distribution, protection, isolation and cable management',
              'Supply of controllers, field devices, sensors, actuators, valves and network infrastructure',
              'Factory acceptance testing of panels before dispatch',
              'Licensing procured and registered in the client\'s name from the outset',
            ],
          },
          {
            subheading: 'Installation',
            items: [
              'Installation supervision and coordination with MEP, electrical, HVAC and civil contractors',
              'Containment, cabling and field device installation, directly or under supervision',
              'Network commissioning and device discovery',
              'Site quality checks against the installation specification',
            ],
          },
          {
            subheading: 'Programming and Integration',
            items: [
              'Controller programming and supervisory configuration on Tridium Niagara, LOYTEC or EasyIO',
              'Graphics development, alarm configuration, scheduling, trending and history collection',
              'Integration of third-party systems over BACnet, Modbus, LonWorks and M-Bus — chillers, VFDs, energy meters, generators, UPS, fire and access',
              'User accounts, role-based permissions and audit logging',
            ],
          },
          {
            subheading: 'Testing and Handover',
            items: [
              'Point-to-point testing with a signed record for every physical and virtual point',
              'Functional performance testing against the specified sequences of operation',
              'Witnessed testing with the client, consultant or commissioning authority',
              'Snag identification, tracking and closure',
              'Operator training, delivered on the live system rather than in a classroom',
              'Documented handover — as-builts, backups, source files, licences, credentials and O&M manuals',
              'Defects liability support and post-occupancy optimisation',
            ],
          },
        ],
      },
      {
        heading: 'Platforms We Deliver On',
        paragraphs: [
          'Tridium Niagara 4 — where the estate is mixed, the expected life is long, or you need one supervisory layer over equipment from several manufacturers. Niagara is the most widely deployed open supervisory platform in building automation, and it is the backbone of most of our multi-vendor integrations.',
          'LOYTEC — where deterministic BACnet and LonWorks performance matters, where room automation needs to be structured and repeatable, or where the client wants high-quality touch interfaces at floor level.',
          'EasyIO — where cost-efficient plant and terminal-unit control is required without giving up an open supervisory layer above it.',
          'We will tell you honestly which is right for your building, including the cases where the answer is none of the above and you are better served by the manufacturer\'s own controls. That advice has cost us work. We would rather give it than install the wrong system.',
        ],
      },
      {
        heading: 'What You Receive at Handover',
        list: [
          'As-built drawings, panel schedules and network architecture diagrams',
          'Final points schedule with I/O verification records',
          'Station backups and full configuration files',
          'Source graphics files — editable originals, not compiled output',
          'All software licences registered in your name',
          'Administrator credentials and a documented account structure',
          'Signed point-to-point and functional performance test records',
          'Semantic tag dictionary and naming convention document, where a data model is in scope',
          'O&M manuals, product datasheets and warranty documentation',
          'Training record and session recordings',
        ],
      },
    ],
    faq: [
      ['Do you work as a main BMS contractor or as a subcontractor?', 'Both. On most projects we hold the BMS package directly, under the main contractor or the client. We also work as a specialist subcontractor to MEP contractors and to other automation companies who need Niagara, LOYTEC or data-layer capability they do not hold in-house. We are comfortable working white-label where that is the commercial preference.'],
      ['Can you take over a partially installed system from another contractor?', 'Yes, and it is a meaningful part of what we do. We start with a survey: what is physically installed, what is programmed, what actually works, and what documentation exists. You get a written gap report with a fixed scope and price to complete before we begin. We do not quote a takeover blind — the true cost of an abandoned system is almost never what it looks like on the drawings.'],
      ['What exactly is handed over at project close?', 'Everything we produced on your project. The full list is above. The short version: if we made it, configured it or licensed it for your building, you receive it in editable form with the credentials to use it.'],
      ['Do you work in cleanroom and GMP environments?', 'Yes. Those projects are run to the documentation standards the environment requires — protocol-driven testing, signed records, controlled change management, and reporting formats that survive an audit.'],
      ['Which cities do you deliver in, and how is support handled elsewhere?', 'We have people in Hyderabad, Bengaluru and Pune, and deliver projects across India from those three bases. Elsewhere we mobilise for installation and commissioning and support remotely afterwards, with a response time agreed in the contract. On an open platform remote support is genuine — we can reach the station, review trends and correct logic without a site visit.'],
    ],
  },
  {
    slug: 'continuous-commissioning',
    title: 'Continuous Commissioning & Retro-Cx',
    shortTitle: 'Continuous Commissioning',
    icon: '/images/png/icons/commissioning.png',
    summary: 'Sequence review to ASHRAE Guideline 36, control loop tuning and retro-commissioning for buildings that have drifted out of tune.',
    metaTitle: 'Continuous Commissioning & Retro-Cx | SD IoTecs',
    metaDescription: 'Sequence review to ASHRAE Guideline 36, control loop tuning and retro-commissioning for buildings that have drifted out of tune.',
    intro: 'Every building drifts. Points get overridden during a fault and never released. Schedules are disabled for an event and never re-enabled. Valves are left in hand. Setpoints creep as occupants complain. Sensors go out of calibration quietly, and the control system keeps obeying them. Two years after a successful handover, a well-designed system can be running at a fraction of its intended efficiency while every screen still shows green.',
    cta: {
      label: 'Book a commissioning assessment',
      href: '/contact-us',
    },
    sections: [
      {
        heading: 'What Continuous Commissioning Actually Involves',
        paragraphs: [
          'Commissioning is usually treated as an event: a set of tests, a signature, a handover file. Continuous commissioning treats it as a process that runs for the life of the building, using the data the BMS is already collecting.',
        ],
        groups: [
          {
            subheading: 'Stage 1 — Assessment',
            items: [
              'We take a full point inventory, pull historical trends, and identify what is overridden, disabled, in hand, alarming persistently or simply not reporting. This usually surfaces more than anyone expects. Output is a written findings report with each issue costed for effort and ranked by impact.',
            ],
          },
          {
            subheading: 'Stage 2 — Sequence Review',
            items: [
              'We compare the sequences as installed against the sequences as specified, and against ASHRAE Guideline 36 where it applies. Guideline 36 sets out high-performance sequences of operation for HVAC systems — economiser logic, trim-and-respond static pressure and supply air temperature reset, demand-controlled ventilation, and the state transitions between them.',
            ],
          },
          {
            subheading: 'Stage 3 — Correction and Tuning',
            items: [
              'Sequences are rewritten where necessary. Control loops are tuned against live operating data rather than default values — chilled water valves, static pressure control, supply air temperature, zone dampers. Overrides are released, schedules restored, calibration corrected. Every change is logged with a reason.',
            ],
          },
          {
            subheading: 'Stage 4 — Verification and Monitoring',
            items: [
              'Functional performance tests confirm each corrected sequence behaves as intended across its operating range. Measurement and verification follows ASHRAE Guideline 14, so the saving claimed is the saving you can defend to a finance director. Ongoing monitoring rules then flag drift as it reappears, because it will.',
            ],
          },
        ],
      },
      {
        heading: 'What We Look For First',
        list: [
          'Points in override or hand, and how long they have been there',
          'Simultaneous heating and cooling',
          'Schedules that do not match actual occupancy',
          'Economiser dampers that never open, or never close',
          'Static pressure and supply air temperature setpoints running fixed instead of reset',
          'Control loops hunting, or so detuned they never reach setpoint',
          'Chilled water and condenser water reset strategies that were designed but never enabled',
          'Sensors reading outside plausible range, or reading identical values across a floor',
          'Alarms that have been standing for months and are now ignored',
          'Meters that were installed, wired and never mapped',
        ],
      },
      {
        heading: 'Standards We Work To',
        list: [
          'ASHRAE Guideline 36 — high-performance sequences of operation for HVAC systems. This is what the control logic should do.',
          'ASHRAE Guideline 0.2 and Standard 202 — the commissioning process for existing systems. This is how the work is structured and evidenced.',
          'ASHRAE Guideline 14 — measurement of energy, demand and water savings. This is how the result is proven.',
          'Using the right guideline for the right purpose matters. A lot of tender documents cite Guideline 36 for the commissioning process, which it does not cover. We will follow whatever your specification says, and we will tell you if it says something that does not make technical sense.',
        ],
      },
      {
        heading: 'Deliverables',
        list: [
          'Assessment and findings report, with issues ranked by energy and comfort impact',
          'Revised sequences of operation, issued as a controlled document',
          'Change log recording every modification, the reason and the date',
          'Functional performance test records, signed',
          'Measurement and verification report to ASHRAE Guideline 14',
          'Monitoring rules configured in the BMS or analytics layer to detect recurrence',
          'Handover briefing for the operations team',
        ],
      },
    ],
  },
  {
    slug: 'data-modelling-semantic-tagging',
    title: 'Haystack, Brick & UDMI Data Modelling',
    shortTitle: 'Data Modelling & Semantic Tagging',
    icon: '/images/png/icons/data-stream.png',
    summary: 'Semantic tagging to Project Haystack, Brick Schema and Google Digital Buildings, plus UDMI onboarding. Make your building data readable by any tool.',
    metaTitle: 'Haystack, Brick & UDMI Data Modelling | SD IoTecs',
    metaDescription: 'Semantic tagging to Project Haystack, Brick Schema and Google Digital Buildings, plus UDMI onboarding. Make your building data readable by any tool.',
    intro: 'A BMS point called AHU3_SAT_2 means nothing to an analytics platform, a digital twin, or the engineer who inherits the building in five years. It means nothing to the next contractor either, which is exactly why so many estates are effectively unreadable. Semantic modelling fixes that. It describes what each point is, what equipment it belongs to, where that equipment sits, and how it relates to everything else — in a published schema that any tool can read without a custom mapping exercise.',
    cta: {
      label: 'Talk to us about your point list',
      href: '/contact-us',
    },
    sections: [
      {
        heading: 'Which Schema Is Right for You',
        table: {
          headers: ['Schema', 'When it fits'],
          rows: [
            {
              schema: 'Project Haystack',
              fits: 'The most widely adopted tagging convention in building automation, and well supported by commercial analytics tools. A good default for commercial estates where you want vendor choice in the analytics layer.',
            },
            {
              schema: 'Brick Schema',
              fits: 'A formal ontology with a stronger relationship model. Better where you need to reason over the graph — complex plant topology, research applications, or estates feeding a genuine digital twin.',
            },
            {
              schema: 'Google Digital Buildings',
              fits: 'Required where the client mandates it. The ontology used across Google\'s own estate, with a defined entity and field structure and strict validation.',
            },
            {
              schema: 'UDMI',
              fits: 'Not a tagging schema but a device management interface — how devices report telemetry, state and configuration to a cloud platform. Frequently used alongside Google Digital Buildings.',
            },
          ],
        },
      },
      {
        heading: 'What the Work Involves',
        groups: [
          {
            subheading: 'Point Inventory and Normalisation',
            items: ['We extract the full point list from the BMS, deduplicate it, identify orphaned and unmapped points, and establish what is actually live versus what exists in configuration only. On most existing estates this stage alone changes the client\'s understanding of what they own.'],
          },
          {
            subheading: 'Naming Convention Design',
            items: ['A written convention covering equipment, location, point type and instance, applied consistently across the estate. This is the part everyone skips and everyone later regrets. Without it, every subsequent contractor invents their own and the model degrades within two years.'],
          },
          {
            subheading: 'Tagging and Model Construction',
            items: ['Points and equipment tagged to the chosen schema, with equipment relationships, spatial hierarchy and system topology represented properly. Feeds, references and containment modelled, not just flat tags.'],
          },
          {
            subheading: 'Validation',
            items: ['The model is validated against the schema\'s own rules, and sense-checked against the physical plant. A model that validates but describes plant that does not exist is worse than no model.'],
          },
          {
            subheading: 'UDMI Onboarding, Where Required',
            items: ['Device configuration, payload construction, pointset definition and validation against the UDMI specification, including state and telemetry reporting and the site model structure.'],
          },
          {
            subheading: 'Remediation',
            items: ['Where an estate has been tagged badly or partially — which is common — we assess what is salvageable, correct it in place where we can, and rebuild where we cannot. We will tell you honestly which it is.'],
          },
        ],
      },
      {
        heading: 'What You Receive',
        list: [
          'Complete point inventory with live status and source device',
          'Written naming convention document',
          'Tag dictionary defining every tag used and its meaning in your estate',
          'The model itself, in the schema\'s native format',
          'Validation report against the schema specification',
          'Governance note — how to keep the model correct as the estate changes',
          'All of it is yours, in open formats. A data model held in a proprietary tool you cannot export from is not a data model, it is another lock-in.',
        ],
      },
    ],
  },
  {
    slug: 'cloud-iot-integration',
    title: 'BMS Cloud Integration',
    shortTitle: 'Cloud & IoT Integration',
    icon: '/images/png/icons/cloud-service.png',
    summary: 'Secure building data pipelines from on-premise BMS to Google Cloud, Azure and AWS using MQTT v5, REST APIs and store-and-forward edge gateways.',
    metaTitle: 'BMS Cloud Integration | MQTT v5 | SD IoTecs',
    metaDescription: 'Secure building data pipelines from on-premise BMS to Google Cloud, Azure and AWS using MQTT v5, REST APIs and store-and-forward edge gateways.',
    intro: 'Most BMS-to-cloud projects fail for one of three reasons. The data arrives without context, so nobody can use it. The connection drops and the gap is never backfilled, so the dataset cannot be trusted. Or the security model requires inbound access to the OT network, and IT refuses — correctly. We design around all three.',
    cta: {
      label: 'Discuss your architecture',
      href: '/contact-us',
    },
    sections: [
      {
        heading: 'How We Build It',
        groups: [
          {
            subheading: 'Edge Gateway',
            items: ['An edge gateway sits alongside the BMS, reads points over BACnet, Modbus or the supervisory platform\'s own interface, and publishes outbound only. No inbound ports, no VPN into the control network, no remote desktop left running.'],
          },
          {
            subheading: 'MQTT v5 Transport',
            items: ['We publish over MQTT v5 with TLS. Version 5 matters here — shared subscriptions let you scale consumers without duplicating messages, message expiry stops stale telemetry arriving after a reconnection and corrupting your history, topic aliasing reduces bandwidth on high-frequency estates, and negative acknowledgements tell you why a publish was rejected instead of silently dropping it.'],
          },
          {
            subheading: 'Store and Forward',
            items: ['The gateway buffers locally when the link drops and backfills on reconnection, in order, with original timestamps. This is the difference between a dataset you can bill from and one you can only browse.'],
          },
          {
            subheading: 'Payload Design',
            items: ['Payloads are structured and tagged at the edge, not left as bare numeric values to be reassembled in the cloud. Where UDMI or a client schema applies, payloads are validated against it before publishing.'],
          },
          {
            subheading: 'Cloud Landing',
            items: ['We integrate to Google Cloud, Microsoft Azure and AWS, and to self-hosted stacks where the client prefers to keep data on their own infrastructure. Time-series storage in InfluxDB, TimescaleDB or the platform\'s native service, with retention and downsampling policies set deliberately rather than left at default.'],
          },
          {
            subheading: 'Writeback, Where It Is Wanted',
            items: ['Closed-loop control from the cloud is possible and occasionally appropriate. It is also the fastest way to create a serious incident. Where writeback is in scope we implement it with explicit point-level permissions, value clamping, command logging and a local override that always wins. Where it is not needed, we make the link read-only and say so in the design document.'],
          },
        ],
      },
      {
        heading: 'Security',
        list: [
          'Outbound-only connections from the OT network',
          'TLS with certificate-based authentication and a documented renewal process, because expired certificates are the single most common cause of silent data loss',
          'Credential storage outside the application configuration',
          'Network segmentation between control, gateway and enterprise networks',
          'Least-privilege access at the broker and at the cloud endpoint',
          'Full audit logging of configuration changes and any command written back',
        ],
      },
      {
        heading: 'Deliverables',
        list: [
          'Integration architecture document with data flow and network diagram',
          'Point mapping specification from source system to published topic',
          'Gateway configuration, backed up and version-controlled',
          'Security design note for the client\'s IT team to review',
          'Connectivity and data-integrity test records, including a simulated outage and backfill test',
          'Runbook covering restart, certificate renewal and fault diagnosis',
        ],
      },
    ],
  },
  {
    slug: 'dashboards-and-reporting',
    title: 'BMS Dashboards & Cleanroom Reporting',
    shortTitle: 'Dashboards & Reporting',
    icon: '/images/png/icons/dashboard.png',
    summary: 'Operational dashboards on open-source platforms and regulated-environment reporting in PDF, Excel and CSV. No per-seat licences on the reporting layer.',
    metaTitle: 'BMS Dashboards & Cleanroom Reporting | SD IoTecs',
    metaDescription: 'Operational dashboards on open-source platforms and regulated-environment reporting in PDF, Excel and CSV. No per-seat licences on the reporting layer.',
    intro: 'Most BMS dashboards are built for the person who commissioned the system, not the person who has to operate it. They show every point, arranged by panel, updated live, and answer no question anyone is actually asking. We start from the question. What decision does this screen support, who makes it, and how often? Everything else follows from that.',
    cta: {
      label: 'Show us what you are working with',
      href: '/contact-us',
    },
    sections: [
      {
        heading: 'Operational Dashboards',
        list: [
          'Energy performance — EPI and EUI by building, floor and system, benchmarked against ECBC and your own baseline',
          'Plant efficiency — chiller COP, plant kW/TR, pump and fan specific power, tracked against design',
          'Comfort and air quality — temperature and humidity compliance bands, CO₂, differential pressure',
          'Exception views — what is in override, what is alarming, what has stopped reporting',
          'Executive summary views for people who need a number, not a mimic diagram',
        ],
      },
      {
        heading: 'Regulated-Environment Reporting',
        list: [
          'Cleanroom and GMP facilities need reports that survive an audit, not screenshots. We build reporting pipelines that generate scheduled and on-demand reports in PDF, Excel and CSV directly from BMS history, with consistent formatting, complete date coverage, explicit gap marking, and no manual transcription step anywhere in the chain.',
          'Environmental monitoring reports by room and classification — temperature, relative humidity, differential pressure, particle count where integrated',
          'Excursion and alarm reports with duration, magnitude and acknowledgement record',
          'Trend reports over any period, with data gaps shown rather than interpolated',
          'Batch and campaign-aligned reporting periods',
          'Scheduled distribution, and on-demand generation for auditors',
        ],
      },
      {
        heading: 'Why Open Source',
        paragraphs: [
          'Two reasons, and neither is cost alone. First, you can add a user without a purchase order, which means dashboards actually get used instead of being restricted to two logins on the BMS workstation. Second, if you replace us, the dashboards keep working and any competent engineer can maintain them. That is the same principle we apply everywhere else.',
          'Where a client already owns a commercial analytics platform, we integrate to it rather than argue. The point is that you should not be forced into one.',
        ],
      },
    ],
  },
  {
    slug: '3d-graphics-visualisation',
    title: '3D BMS Graphics & Plant Room Visualisation',
    shortTitle: '3D Graphics & Visualisation',
    icon: '/images/png/icons/bar-chart.png',
    summary: 'Photoreal plant rooms, isometric layouts, equipment libraries and animated assets for Tridium Niagara, IQ Vision and web front ends.',
    metaTitle: '3D BMS Graphics & Plant Room Visualisation | SD IoTecs',
    metaDescription: 'Photoreal plant rooms, isometric layouts, equipment libraries and animated assets for Tridium Niagara, IQ Vision and web front ends.',
    intro: 'A good BMS graphic is not decoration. It is the interface through which someone under pressure decides what is wrong and what to do about it. Most are cluttered, inconsistent between screens, and drawn by whoever had time at the end of the project. We treat graphics as an engineering deliverable, drawn to a consistent visual system across the whole estate.',
    cta: {
      label: 'See the studio',
      href: 'https://ibms3d.com',
    },
    sections: [
      {
        heading: 'What We Produce',
        list: [
          'Photoreal and isometric plant room renders — chiller plant, AHU rooms, pump sets, boiler rooms, electrical rooms',
          'Equipment libraries drawn to a single visual standard, reusable across an estate',
          'Animated assets — flow arrows, rotating fans and pumps, valve position, damper travel',
          'Floor layouts and zone plans',
          'Complete Niagara Px graphics packages and Trend IQ Vision front ends',
          'Web dashboard visuals and SVG asset sets for custom front ends',
        ],
      },
      {
        heading: 'How It Works',
        paragraphs: [
          'Send us your drawings, schematics and point list. We return a visual style proposal and one sample screen before drawing the rest, so the standard is agreed before volume work starts. Revisions on the sample are free; revisions after sign-off are charged, which is the only way to keep a graphics package on programme.',
          'Files are delivered in editable source format alongside the compiled output, so your team can amend them without coming back to us.',
        ],
      },
      {
        heading: 'White-Label for System Integrators',
        paragraphs: [
          'A significant share of this work is delivered for other integrators under their own brand, through our studio IBMS3d. No client contact, no branding of ours on the output, delivered remotely to your programme. If you win a job that needs a graphics package you cannot resource, that is a normal conversation for us to have.',
        ],
      },
    ],
    externalLink: {
      label: 'Visit IBMS3d',
      href: 'https://ibms3d.com',
    },
  },
  {
    slug: 'fdd-predictive-maintenance',
    title: 'FDD & Predictive Maintenance for BMS',
    shortTitle: 'FDD & Predictive Maintenance',
    icon: '/images/png/icons/threat-detection.png',
    summary: 'Automated fault detection and diagnostics on your existing BMS data, plus condition-based maintenance that replaces calendar-driven servicing.',
    metaTitle: 'FDD & Predictive Maintenance for BMS | SD IoTecs',
    metaDescription: 'Automated fault detection and diagnostics on your existing BMS data, plus condition-based maintenance that replaces calendar-driven servicing.',
    intro: 'Most building faults are already visible in data nobody is looking at. A damper stuck at minimum position. A control valve leaking by. A zone heating and cooling at the same time. A fan running hard against a closed damper. Each of these leaves a clear signature in trend data, often for weeks, before anyone raises a ticket. Fault detection and diagnostics reads those signatures automatically, every day, across every piece of plant — and tells you what is wrong, how confident it is, and what it is costing you to leave it alone.',
    cta: {
      label: 'Ask about a fault detection assessment',
      href: '/contact-us',
    },
    sections: [
      {
        heading: 'An Alarm Tells You a Limit Was Crossed. FDD Tells You the Behaviour Is Wrong.',
        paragraphs: [
          'Every BMS already has alarms, and in most buildings they have stopped meaning anything. Hundreds of standing alarms, most of them nuisance, all of them acknowledged out of habit. Alarming works on thresholds: a value went above or below a number. It is blind to everything that is wrong while every value stays inside its limits.',
          'Fault detection works on relationships. It compares what the plant is doing against what it should be doing given the conditions — the outside air temperature, the mode, the setpoint, the command, the position feedback, the time of day. A chilled water valve commanded to 40 per cent while the supply air temperature refuses to move is not an alarm condition. It is a fault, and it will show up on your energy bill long before it shows up on a screen.',
        ],
      },
      {
        heading: 'The Fault Library',
        groups: [
          {
            subheading: 'Air Handling and Ventilation',
            items: [
              'Supply air temperature not achieving setpoint while the control loop is saturated',
              'Duct static pressure not met with the fan already at full speed',
              'Mixed air temperature outside the bounds implied by outside and return air',
              'Economiser not economising when conditions are favourable',
              'Mechanical cooling running with the outside air damper open beyond minimum',
              'Simultaneous heating and cooling',
              'Outside air fraction not tracking its setpoint',
              'Dampers stuck, hunting, or not matching commanded position',
            ],
          },
          {
            subheading: 'Terminal Units',
            items: [
              'VAV boxes starved of primary air',
              'Reheat active with the damper at minimum',
              'Zones in permanent override',
              'Zone temperature never reaching setpoint across a full occupied period',
            ],
          },
          {
            subheading: 'Central Plant',
            items: [
              'Low delta-T syndrome across chillers and coils',
              'Chiller approach temperature degrading over time, indicating fouling',
              'Pumps running against closed valves, or running with no flow',
              'Plant efficiency drifting from its commissioned baseline',
              'Short cycling of compressors, pumps and fans',
              'Staging sequences firing in the wrong order or failing to stage down',
            ],
          },
          {
            subheading: 'Sensors, Schedules and Data Integrity',
            items: [
              'Sensors flatlined, drifting, or reporting values outside the physically plausible range',
              'Identical readings across sensors that should differ',
              'Points that have stopped updating without raising an alarm',
              'Schedules not matching actual occupancy',
              'Overrides and hand positions left in place after a call-out',
              'Gaps in history that will invalidate later reporting',
            ],
          },
        ],
      },
      {
        heading: 'A Fault List Nobody Acts On Is Just a Longer Alarm List',
        paragraphs: [
          'The failure mode of most FDD deployments is not technical. It is that the system produces four hundred faults a week, the facilities team looks at it twice, and it is never opened again. We design against that from the start.',
          'Every fault carries a probable cause, not just a detection. “AHU-3 economiser not economising” is a symptom; “outside air damper actuator not responding to command” is something a technician can act on. Faults are ranked by consequence — energy cost, comfort impact, compliance risk or equipment damage — so the list is worked in the order that matters.',
          'Where the data supports it, each fault carries an estimated cost of inaction, expressed in kWh or currency. This is what gets a work order approved. Faults are deduplicated and grouped. One stuck damper should produce one item, not forty daily instances. Rules are tuned during a commissioning period specifically to drive down false positives, because adoption dies on the first week of noise.',
        ],
      },
      {
        heading: 'Service the Equipment That Needs It, Not the Equipment on the Calendar',
        paragraphs: [
          'Most planned preventive maintenance is calendar-driven: every filter changed quarterly, every belt inspected half-yearly, whether or not the equipment needs it. That is simultaneously wasteful on the assets that are fine and too slow for the assets that are degrading.',
          'Where the instrumentation supports it, we move maintenance onto the condition of the asset: filter replacement triggered by actual differential pressure trend and rate of change, servicing driven by accumulated runtime and start counts rather than elapsed time, degradation trending on chiller approach temperature, plant kW/TR, pump specific power and heat exchanger effectiveness, each measured against the commissioned baseline.',
        ],
      },
      {
        heading: 'How We Implement',
        groups: [
          {
            subheading: 'Stage 1 — Data Readiness Assessment',
            items: [
              'Before writing a single rule we establish whether your data can support FDD at all. Trend intervals, history retention, point coverage, sensor plausibility and gap analysis. If your AHUs have no return air temperature sensor, no rule in the world will find your economiser faults, and you deserve to know that before you pay for a deployment.',
              'Output is a written readiness report with any instrumentation gaps costed.',
            ],
          },
          {
            subheading: 'Stage 2 — Modelling and Rule Development',
            items: [
              'Equipment tagged to a schema, rules written against the tagged model and parameterised to your plant — design flow rates, setpoints, deadbands, tolerances.',
              'Generic rules with default thresholds are the main source of false positives.',
            ],
          },
          {
            subheading: 'Stage 3 — Commissioning and Tuning',
            items: [
              'Rules run in a shadow period against historical and live data. Every fault raised is reviewed with your team, confirmed or dismissed, and the rule tuned.',
              'This stage is the difference between a system that gets used and one that gets muted.',
            ],
          },
          {
            subheading: 'Stage 4 — Operational Handover',
            items: [
              'Escalation paths agreed, dashboards and reports configured, CMMS integration tested, and your team trained on how to interpret and act on a fault. Rule documentation handed over in full.',
            ],
          },
          {
            subheading: 'Stage 5 — Ongoing Review, Where Wanted',
            items: [
              'A recurring review cycle — typically monthly or quarterly — where we assess which faults recurred, which were closed, which rules need retuning, and what the programme has saved. This is where FDD and continuous commissioning become the same activity.',
            ],
          },
        ],
      },
      {
        heading: 'An Honest Word About Limits',
        paragraphs: [
          'FDD does not fix anything. It tells you what is wrong. Someone still has to hold a spanner, and if nobody is resourced to act on the output, the deployment will fail no matter how good the rules are. We would rather say this before you buy than after.',
          'It also cannot detect what your instrumentation cannot see. It will not compensate for a sensor you do not have, and it will not manufacture history that was never trended. Where we find those gaps in the readiness assessment, we will tell you what it would cost to close them and let you decide whether it is worth it.',
          'Finally, no rule set is perfect on day one. Expect a tuning period. Any supplier who tells you their FDD works out of the box on your estate has not looked at your estate.',
        ],
      },
      {
        heading: 'Deliverables',
        list: [
          'Data readiness report, with instrumentation and trending gaps identified and costed',
          'Tagged equipment model in an open schema',
          'Documented fault rule set, with the logic and parameters for every rule written down',
          'Fault dashboard and scheduled reporting',
          'Ranked fault register with probable cause and, where derivable, estimated cost of inaction',
          'CMMS or helpdesk integration, where in scope',
          'Tuning record from the commissioning period',
          'Operator training and handover documentation',
        ],
      },
    ],
    technical: 'FDD needs three things: reliable historical data at a sensible interval, a data model that describes what each point is, and somewhere to run the rules. We can provide all three, or work with what you already have.',
    faq: [
      ['Do we need to replace our BMS to use this?', 'No. FDD runs on the data your existing system already produces. If anything, it is most valuable on older estates, because those are the ones that have drifted furthest. What matters is trend coverage and history retention, not the age of the platform.'],
      ['How is this different from the continuous commissioning service?', 'They overlap deliberately. Continuous commissioning is an engineering programme delivered by people: review, rewrite, tune, verify. FDD is the automated layer that watches between those visits and tells you when something has drifted again. Most clients who take both find the commissioning visits get shorter, because the faults have already been identified.'],
      ['Where does our data go?', 'Wherever you want it to. Rules can run entirely on-premise with nothing leaving the building, at the edge, or in your own cloud tenancy. We do not require you to host data on our infrastructure, and if you do choose a hosted option it is your tenancy and your account.'],
      ['How long before it is useful?', 'The readiness assessment usually returns findings immediately — dead sensors, missing history and standing overrides tend to surface on the first pass, and those are fixable straight away. A tuned rule set typically takes 4-8 weeks from data access to operational handover, depending on estate size and how much modelling is required.'],
      ['What happens if the rules produce too many faults?', 'That is expected in the first weeks, which is why the commissioning stage exists. Rules are tuned against confirmed and dismissed faults until the output is something a team can actually work through. We treat a persistently noisy rule as our defect, not your problem.'],
    ],
  },
];

export default services;
