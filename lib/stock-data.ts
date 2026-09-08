export interface StockItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  brand?: string;
  condition: 'Unused' | 'Refurbished' | 'Tested' | 'OEM Genuine' | 'Used';
  specifications: Record<string, string>;
}

export const stockInventory: StockItem[] = [
  {
    id: "mooring-winch-01",
    name: "Heavy Duty Mooring Winch",
    category: "Deck Machinery",
    image: "/stock/mooring-winch.jpg",
    description: "Marine heavy-duty mooring winch, designed for reliable operation in harsh maritime environments. Includes robust braking system.",
    condition: "Tested",
    specifications: {
      "Type": "Mooring Winch",
      "Application": "Deck Machinery / Towing",
    }
  },
  {
    id: "diesel-generator-cat",
    name: "CAT Marine Diesel Generator Set",
    category: "Engines & Generators",
    image: "/stock/diesel-generator-cat.jpg",
    description: "Caterpillar marine auxiliary diesel generator set. Provides reliable shipboard electrical power.",
    brand: "Caterpillar",
    condition: "Tested",
    specifications: {
      "Type": "Generator Set",
      "Application": "Auxiliary Power",
      "Cooling": "Water Cooled"
    }
  },
  {
    id: "mitsubishi-hydraulic-motor",
    name: "Mitsubishi RM Series Radial Piston Motor",
    category: "Hydraulic Equipment",
    image: "/stock/radial-piston-hydraulic-motor-1.jpg",
    description: "Mitsubishi heavy industries RM Series radial piston hydraulic motor. High torque, low speed operation ideal for heavy deck machinery.",
    brand: "Mitsubishi Heavy Industries, Ltd.",
    condition: "Refurbished",
    specifications: {
      "Type": "RMC-350A-L-22Y",
      "Motor Type": "Radial Piston",
      "Application": "Deck Crane / Winch Drive"
    }
  },
  {
    id: "cylinder-head-cooling-jackets",
    name: "Cylinder Head Cooling Jackets",
    category: "Engine Components",
    image: "/stock/cylinder-head-cooling-jackets.jpg",
    description: "Marine diesel engine cylinder head cooling jackets. Essential for optimal temperature regulation in large bore engines.",
    condition: "Tested",
    specifications: {
      "Material": "Cast Iron",
      "Application": "Main Engine Cooling System"
    }
  },
  {
    id: "marine-engine-crankshaft",
    name: "Heavy Marine Engine Crankshaft",
    category: "Engine Components",
    image: "/stock/marine-engine-crankshaft.jpg",
    description: "Forged steel crankshaft for large marine diesel engines. Precision machined and inspected for alignment and bearing surface integrity.",
    condition: "Tested",
    specifications: {
      "Component": "Main Crankshaft",
      "Material": "Forged Steel"
    }
  },
  {
    id: "quick-closing-valves",
    name: "Pneumatic Quick Closing Valves",
    category: "Valves & Instrumentation",
    image: "/stock/quick-closing-valves.jpg",
    description: "Emergency quick-closing valves for marine fuel oil systems. Essential for SOLAS compliance and fire safety aboard vessels.",
    condition: "Refurbished",
    specifications: {
      "Actuation": "Pneumatic / Manual",
      "Application": "Fuel Oil System Safety",
      "Gauges": "Dual Pressure Indication"
    }
  },
  {
    id: "hermetic-uti-meter",
    name: "HERMetic UTI Meter",
    category: "Valves & Instrumentation",
    image: "/stock/hermetic-uti-meter.jpg",
    description: "Portable electronic gauge for measuring ullage, temperature, and oil-water interface level in tanker vessels.",
    condition: "Tested",
    specifications: {
      "Measurement": "Ullage, Temperature, Interface",
      "Application": "Tanker Cargo Monitoring",
      "Approvals": "Intrinsically Safe (Ex)"
    }
  },
  {
    id: "yanmar-genuine-parts",
    name: "Yanmar Genuine Spare Parts",
    category: "Genuine Spares",
    image: "/stock/yanmar-genuine-parts.jpg",
    description: "Assorted original Yanmar genuine parts including washers, lock screws, and cooling nozzle boots.",
    brand: "Yanmar",
    condition: "OEM Genuine",
    specifications: {
      "Origin": "Made in Japan",
      "Part Numbers": "138613-52222, 26911-080102, 141616-39521"
    }
  },
  {
    id: "marine-diesel-engines-twin",
    name: "Marine Auxiliary Diesel Engines",
    category: "Engines & Generators",
    image: "/stock/marine-diesel-engines.jpg",
    description: "Heavy duty marine diesel engines suitable for propulsion or auxiliary power generation. Fully overhauled and painted.",
    condition: "Refurbished",
    specifications: {
      "Configuration": "V-Type",
      "Application": "Marine Propulsion / Auxiliary"
    }
  },
  {
    id: "hydraulic-deck-winch-motor",
    name: "Hydraulic Deck Winch Drive",
    category: "Hydraulic Equipment",
    image: "/stock/hydraulic-deck-winch-motor.jpg",
    description: "Complete hydraulic drive assembly for marine deck winches, providing reliable high-torque pulling power.",
    condition: "Tested",
    specifications: {
      "System": "Hydraulic Drive",
      "Application": "Deck Machinery"
    }
  },
  {
    id: "valve-position-indicator",
    name: "ITS-102 Position Monitoring Switch",
    category: "Valves & Instrumentation",
    image: "/stock/valve-position-indicator.jpg",
    description: "Valve position monitoring switch box with visual open/close indicator dome. IP67 enclosure for marine use.",
    condition: "Tested",
    specifications: {
      "Model": "ITS-102",
      "Enclosure": "IP67 Weatherproof",
      "Switches": "4 x SPDT Mechanical"
    }
  }
];

export const stockCategories = [
  "All",
  "Engines & Generators",
  "Engine Components",
  "Deck Machinery",
  "Hydraulic Equipment",
  "Valves & Instrumentation",
  "Genuine Spares"
];
