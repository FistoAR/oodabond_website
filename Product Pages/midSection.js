$(document).ready(() => {

  const isMobile = window.matchMedia("(max-width: 1200px)").matches;
  if (!isMobile) {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".Mid-section",
      start: "top 10%",
      end: "+=50%",
      pin: true,
      pinSpacing: true
    });
  }

  gsap.from(".product-title", {
    scrollTrigger: {
      trigger: ".Mid-section",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.25,
    ease: "power2.out"
  });

  gsap.from(".section-title", {
    scrollTrigger: {
      trigger: ".Mid-section",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.50,
    ease: "power2.out"
  });

  gsap.from(".content-img", {
    scrollTrigger: {
      trigger: ".Mid-section",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.75,
    ease: "power2.out"
  });

  gsap.from(".right-content", {
    scrollTrigger: {
      trigger: ".Mid-section",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.25,
    ease: "power2.out"
  });


  const productImages = {
    "109 Ultra Clear": "./assets/images/Application Images/109.webp",
    "109 UV Ultra Clear": "./assets/images/Application Images/109 UV.webp",
    "TG 109": "./assets/images/Application Images/109 TG.webp",
    "Preekkote 85 – S": "./assets/images/Application Images/Preekkote 85-s.webp",
    "1k Single part epoxy": "./assets/images/Application Images/1k single part epoxy.webp",
    "11116 Metal Epoxy": "./assets/images/Application Images/11116 Metal Epoxy.webp",
    "MOS2-W Dry Coating": "./assets/images/Application Images/Mos2 Liquid powder.webp",
    "High Temperature Ptfe Grease": "./assets/images/Application Images/High temperature PTFE .webp",
    "V52 Aluminium Putty": "./assets/images/Application Images/v52 Aluminium putty.webp",
    "6838 High Strength": "./assets/images/Application Images/6838 High strength.webp",
    "Nylon-11 Liquid Powder": "./assets/images/Application Images/Nylon 11.webp",
    "2870 thread locker": "./assets/images/Application Images/Nylon 11.webp",
  };

  const Ultra_Clear_109 = {
    technicalProperties: {
      "Product Color": "Clear, Unclear",
      "Operating temperature range": "-40°C to 175°C",
      "Mixing Ratio": "2:1 (Clear), 100:40 (Ultra-clear)",
      "Tensile Strength": "6-9 KN",
      "Curing time": "30 to 40 minutes",
      "Open pot life mixed": "30 to 35 minutes"
    },
    applications: {
      "./assets/images/application_image/electric_potting.webp": "Electronic potting",
      "./assets/images/application_image/pcb _coating.webp": "PCB coating",
      "./assets/images/application_image/glassware_products.webp": "Glassware products",
      "./assets/images/application_image/motor.webp": "Motors and Bonding of Rigid surfaces",
      "./assets/images/application_image/electric_vehicle_coating.webp": "Electric Vehicle's coatings"

    },
    benefits: [
      "Extreme protection against heat build up in electronic equipment",
      "Excellent thermal conductor",
      "Strong chemical resistance to brine, acids, bases, and aliphatic hydrocarbons",
      "Non-silicone based Grease formulation",
      "Adheres to Most Surfaces",
      "30 to 35 minutes working time suitable for large production runs",
      "Adheres to Most Surfaces",
      "30 to 35 minutes working time suitable for large production runs"
    ],
    title: "109 Ultra Clear"
  };

  const Ultra_Clear_109_UV = {
    technicalProperties: {
      "Product color": "Colourless liquid (custom colors available)",
      "Electrical properties": "Dielectric Strength: > 400 V/mil, Withstand Voltage: > 1500 V",
      "UV1 type": "Cures under UV light (365–410 nm) using UV LED",
      "Temperature": "-50°C to +175°C",
      "Strength": "Lap Shear Strength: 120 psi, Tensile Strength: 5100 psi",
      "Curing time": "Flood Lamp: 1–2 min, Conveyor: 0.5–4 min",
      "Viscosity": "2000–4000 cP @ 25°C, 20 RPM"
    },
    applications: {
      "./assets/images/109 UV Altra clear/Lens bonding.webp": "Lens bonding",
      "./assets/images/109 UV Altra clear/Electric Encapsulation.webp": "Electronic encapsulation",
      "./assets/images/109 UV Altra clear/Bonding of all metals.webp": "Bonding of metals,Plastics",
      "./assets/images/109 UV Altra clear/Coating.webp": "Coating",
      "./assets/images/109 UV Altra clear/Medical device assemblies.webp": "Medical device assemblies"
    },
    benefits: [
      "Cure on Demand",
      "Excellent Adhesion to Plastics",
      "Fast Curing with Low-Power Lamps",
      "Solvent-Free & Low Odour",
      "High Shear Strength",
      "Easily Automated"
    ],
    title: "109 UV Ultra Clear"
  };

  const TG_109 = {
    technicalProperties: {
      "Product color": "White, silvery, grey",
      "Electrical properties": "Dielectric Strength: 4700V/mm Volume Resistivity: 1.36 × 10⁹ Ω-cm",
      "Temperature": "Continuous: 200°C (392°F)  Drop point: >260°C (572°F)",
      "Mixing Ratio": "No mixing required",
      "Curing time": "No curing needed",
      "Viscosity": "Thixotropic paste",
      "Open pot life mixed": "Not applicable"
    },
    applications: {
      "./assets/images/TG-109 THERMAL/Heat sink.webp": "Heat sink",
      "./assets/images/TG-109 THERMAL/LED Modules.webp": "LED Modules",
      "./assets/images/TG-109 THERMAL/Electronic assemblies.webp": "Electronic assemblies",
      "./assets/images/TG-109 THERMAL/Thin film RTD.webp": "Thin film RTD",
      "./assets/images/TG-109 THERMAL/Power components.webp": "Power components"
    },
    benefits: [
      "High thermal conductivity",
      "Silicone free Grease paste and non-bleeding",
      "Excellent corrosion resistance—Passed ASTM B 117 1 000 hours",
      "Lowers the contact resistance between irregular surfaces",
      "Continuous Temperature to 200°C (392°F)",
      "Non-silicone based Grease formulation"
    ],
    title: "TG 109"
  };


  const Preekkote_85 = {
    technicalProperties: {
      "Product color": "Various colors available",
      "Temperature": "-54°C to 150°C",
      "Strength": "Breakaway Torque (Steel): 100–200 in-lb",
      "Curing time": "2–3 minutes (with activator)",
    },
    applications: {
      "./assets/images/Preekkote 85–S/Transmission nuts.webp": "Transmission nuts",
      "./assets/images/Preekkote 85–S/Marine.webp": "Marine",
      "./assets/images/Preekkote 85–S/Constrcution.webp": "Construction",
      "./assets/images/Preekkote 85–S/Pipe plugs and fittings.webp": "Pipe plugs and fittings",
      "./assets/images/Preekkote 85–S/Automobile.webp": "Automobile"
    },
    benefits: [
      "Prevents loosening of bolts due to vibration",
      "Seals against leakage",
      "Pre-coated parts can be packaged and shipped in normal fashion",
      "Bonds using lightweight polymers",
      "Prevents threads from corroding",
      "Easily visible for inspection"
    ],

    title: "Preekkote 85 – S"
  };

  const Single_part_epoxy = {

    technicalProperties: {
      "Product color": "Colourless liquid (custom colors available)",
      "Electrical properties": "Dielectric Strength: >400 V/mil Withstand Voltage: >1500 V",
      "Temperature": " -50°C to +175°C",
      "Mixing Ratio": "No mixing required",
      "Strength": "Lap Shear Strength: 120 psi Tensile Strength: 5100 psi",
      "Curing time": "ood Lamp: 1–2 min Conveyor: 0.5–4 min",
      "Viscosity": "2000–4000 cP @ 25°C, 20 RPM",
    },
    applications: {
      "./assets/images/1K Single part/Magnet & Motor Assembly.webp": "Magnet & Motor Assembly",
      "./assets/images/1K Single part/Bonding of ferrites.webp": "Bonding of ferrites",
      "./assets/images/1K Single part/Speaker assembly.webp": "Speaker assembly",
      "./assets/images/1K Single part/Bonding of ceramics.webp": "Bonding of ceramics",
      "./assets/images/1K Single part/Electronic Component Bonding.webp": "Electronic Component Bonding"
    },
    benefits: [
      "Excellent adhesive strength",
      "Excellent resistance to vibration",
      "Extremely high tensile and compressive Strength ",
      "Excellent adhesion to metals and composites",
      "Strong bonding with glass and ceramics",
      "Compatible with many types of plastics"
    ],

    title: "1k Single part epoxy"
  };

  const Metal_epoxy = {

    technicalProperties: {
      "Product color": "Part A: Black, Part B: Off White Mixed: Grey",
      "Temperature": "Curing at Room Temperature (24 hours)",
      "Mixing Ratio": "1:1 by weight",
      "Lap Shear Strength": "≥ 100 kg/cm² (≥ 10 MPa)",
      "Curing time": "24 hours @ Room Temperature",
      "Open pot life mixed": "Maximum 4 minutes",
    },
    applications: {
      "./assets/images/Metal_epoxy/05.webp": "Pipe Sealant",
      "./assets/images/Metal_epoxy/04.webp": "Leather",
      "./assets/images/Metal_epoxy/08.webp": "phenolic laminates",
      "./assets/images/Metal_epoxy/01.webp": "Epoxy",
      "./assets/images/Metal_epoxy/07.webp": "Wood"
    },
    benefits: [
      "Excellent adhesive strength",
      "Non-sag, thixotropic",
      "Excellent adhesion to metals and composites ",
      "Strong bonding with glass and ceramics",
      "High temperature resistance",
      "Compatible with many types of plastics"
    ],

    title: "11116 Metal Epoxy"
  };


  const mos2_dry_coating = {

    technicalProperties: {
      "Product color": "Dark Grey to Black",
      "Temperature": "Usable up to 800°F (427°C)",
      "Mixing Ratio": "No mixing required",
      "Curing time": "2–3 minutes (air dry)",
    },
    applications: {
      "./assets/images/MOSw-2/Bushings.webp": "Bushings",
      "./assets/images/MOSw-2/Automotive.webp": "Automotive",
      "./assets/images/MOSw-2/Bond of Rubber.webp": "Bond of Rubber",
      "./assets/images/MOSw-2/AerospaceAviation.webp": "Aerospace/Aviation",
      "./assets/images/MOSw-2/Bond to ferrous and nonferrous metals.webp": "Bond to ferrous and nonferrous metals"
    },
    benefits: [
      "Quick-Dry Bonding Dries to the touch in seconds; no heating or baking required",
      "Universal Surface Compatibility Bonds to ferrous and non-ferrous metals, plastics, ceramics, rubber, and wood",
      "Enhances Machined Surfaces Fills microscopic irregularities, reducing friction and wear",
      "Environmentally Safe Lead-free and water-based for safer handling and reduced environmental impact",
      "Ideal for Preassembly Use Perfect during the break-in period to smooth contact surfaces and extend part life",
      "Excellent Chemical & Thermal Stability Maintains performance in extreme temperatures"
    ],

    title: "MOS2-W Dry Coating"
  };


  const high_temperature_ptfe = {

    technicalProperties: {
      "Product color": "Red",
      "Temperature": "-20°C to +280°C",
      "Mixing Ratio": "Not applicable",
      "Strength": "Four Ball Weld Load: 280 kg",
      "Curing time": "Not applicable",
      "Open pot life mixed": "Not applicable",
    },
    applications: {
      "./assets/images/High_temp_grease/Marine Equipment.webp": "Marine Equipment",
      "./assets/images/High_temp_grease/Universal Joints.webp": "Universal Joints",
      "./assets/images/High_temp_grease/Boat Trailer Bearings.webp": "Boat Trailer Bearings",
      "./assets/images/High_temp_grease/Water Pumps.webp": "Water Pumps",
      "./assets/images/High_temp_grease/Anchor Winches.webp": "Anchor Winches"
    },
    benefits: [
      "Activated PTFE forms a protective film on metal surfaces, minimizing metal-to-metal contact",
      "Prevents direct contact between parts, reducing mechanical degradation",
      "PTFE is chemically inert and non-staining — safe for varied environments",
      "Reduces wear, allowing bearings to be reused and last significantly longer",
      "Maintains friction surfaces in optimal condition, avoiding damage",
      "Lower lubricant usage, fewer re-greasing intervals, and less equipment failure"
    ],

    title: "High Temperature Ptfe Grease"
  };

  const V52_Aluminium_Putty = {

    technicalProperties: {
      "Product color": "Aluminium",
      "Electrical properties": "Dielectric Strength: 3937 V/mm, Dielectric Constant: 21.4",
      "Temperature": "(Maximum) Wet: 49°C, Dry: 210°C",
      "Mixing Ratio": "1:1 by weight and volume",
      "Strength": "Tensile Strength: 22.2 MPa, Compressive Strength: 58 MPa",
      "Curing time": "16 to 24 hours",
      "Viscosity": "Putty",
      "Open pot life mixed": "Work time: 20 minutes (500g @ 24°C)",
    },
    applications: {
      "./assets/images/Aluminum_putty/Casting Repairs.webp": "Casting Repairs",
      "./assets/images/Aluminum_putty/Large Gap Bridging.webp": "Large Gap Bridging",
      "./assets/images/Aluminum_putty/Jigs, Dies & Fixtures.webp": "Jigs, Dies & Fixtures",
      "./assets/images/Aluminum_putty/Post-Cure Machining.webp": "Post-Cure Machining",
      "./assets/images/Aluminum_putty/Patching & Filling.webp": "Patching & Filling"
    },
    benefits: [
      "Can be machined, drilled or tapped using conventional metalworking tools    ",
      "Bonds to aluminium, steel and many other metals, as well as concrete",
      "Fills voids or pores in castings",
      "Makes repairs that are non-rusting",
      "Qualified under many MRO Industries reports and casting customer satisfactions",
    ],

    title: "V52 Aluminium Putty"
  };


  const High_strength = {

    technicalProperties: {
      "Product color": "Green",
      "Temperature": "-55°C to 150°C",
      "Curing time": "Functional: 1–3 hours, Full Cure: 24 hours",
      "Viscosity": "2,500 cps @ 25°C (Brookfield RVT Spindle 4 @ 25 rpm)",
    },
    applications: {
      "./assets/images/High_strength/Motor shafts and gears.webp": "Motor shafts and gears",
      "./assets/images/High_strength/Bushings in housings.webp": "Bushings in housings",
      "./assets/images/High_strength/Pipe plugs and fittings.webp": "Pipe plugs and fittings",
      "./assets/images/High_strength/Electric motors.webp": "Electric motors",
      "./assets/images/High_strength/Pump and compressor assemblies.webp": "Pump and compressor assemblies"
    },
    benefits: [
      "Excellent adhesive strength",
      "Non-sag, thixotropic",
      "Excellent resistance to vibration",
      "Makes repairs that are non-rustingMinimum cure temperature of start from 80 °C",
      "Extremely high tensile and compressive Strength",
      "Excellent chemical resistance",
    ],

    title: "6838 High Strength"
  };

  const Nylon_Liquid_Powder = {

    technicalProperties: {
      "Product color": "Blue, Green, Black, Red, Yellow, Orange, White, Grey",
      "Dielectric Stress ": "≥10 kV/mm",
      "Temperature": "Curing at Room Temperature (24 hours)",
      "Tensile Strength": "6000 psi",
      "Curing time": "Preheat: 650°F for 6 min Postheat: 475°F for 1 minute",
    },
    applications: {
      "./assets/images/nylon_powder/Valves.png": "Valves",
      "./assets/images/nylon_powder/Construction.png": "Construction",
      "./assets/images/nylon_powder/Automotive parts.webp": "Automotive parts",
      "./assets/images/nylon_powder/Claddings.png": "Claddings",
      "./assets/images/nylon_powder/Engineering components.webp": "Engineering components"
    },
    benefits: [
      "Excellent adhesive strength",
      "Non-sag, thixotropic",
      "Excellent resistance to vibration",
      "Makes repairs that are non-rustingMinimum cure temperature of start from 80 °C",
      "Ready to dispense—no mixing is required ",
      "Excellent chemical resistance",
    ],

    title: "Nylon-11 Liquid Powder"
  };

  const thread_locker = {

    technicalProperties: {
      "Product color": "Blue, Green, Black, Red, Yellow, Orange, White, Grey",
      "Dielectric Stress ": "≥10 kV/mm",
      "Temperature": "Curing at Room Temperature (24 hours)",
      "Tensile Strength": "6000 psi",
      "Curing time": "Preheat: 650°F for 6 min Postheat: 475°F for 1 minute",
    },
    applications: {
      "./assets/images/Thread_locker/Transmission nuts.webp": "Transmission nuts",
      "./assets/images/Thread_locker/Truck axle bolts.webp": "Truck axle bolts",
      "./assets/images/Thread_locker/Aviation.webp": "Aerospace/Aviation",
      "./assets/images/Thread_locker/Larger threaded fasteners and studs.webp": "Larger threaded fasteners and studs",
      "./assets/images/Thread_locker/Pipe plugs and fittings.webp": "Pipe plugs and fittings"
    },
    benefits: [
      "Excellent adhesive strength",
      "Non-sag, thixotropic",
      "Excellent resistance to vibration",
      "Makes repairs that are non-rustingMinimum cure temperature of start from 80 °C",
      "Ready to dispense—no mixing is required ",
      "Excellent chemical resistance",
    ],

    title: "2870 thread locker"
  };

  const mapping = {
    "109_Ultra_Clear": Ultra_Clear_109,
    "109_UV_Ultra_Clear": Ultra_Clear_109_UV,
    "TG-109_Thermal_Conductive_Grease": TG_109,
    "Preekkote_85%E2%80%93S": Preekkote_85,
    "1K_Single_Part_Epoxy": Single_part_epoxy,
    "11116_Metal_Expoxy": Metal_epoxy,
    "MOS2-W_Dry_Coating": mos2_dry_coating,
    "High_Temperature_Ptfe_Grease": high_temperature_ptfe,
    "V52_Aluminium_Putty": V52_Aluminium_Putty,
    "High_Strength": High_strength,
    "Nylon-11_Liquid_Powder": Nylon_Liquid_Powder,
    "2870_Thread_Locker": thread_locker,
  };

  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf("/") + 1).split(".")[0];
  const product = mapping[filename];

  if (product) {
    $(".left-content .content-title p:first").text(product.title);
    const src = productImages[product.title];
    $(".left-content .content-img").html(`<img src="${src}" alt="${product.title}" >`);

    if (isMobile) {
      $(".btns").hide();
      loadAllSections(product);
    } else {
      loadTechnicalProperties(product);

      $(".btns button").on("click", function () {
        $(".btns button").removeClass("active");
        $(this).addClass("active");

        const index = $(this).data("index");
        if (index === 0) loadTechnicalProperties(product);
        if (index === 1) loadApplications(product);
        if (index === 2) loadBenefits(product);
      });
    }
  }

  function loadTechnicalProperties(product) {
    let html = `<div class="tech-container">`;
    for (let key in product.technicalProperties) {
      html += `
        <div class="tech-item">
          <img src="./assets/images/pin_image.svg" alt="bullet" class="benefit-icon">
          <div class="tech-text"> 
            <span class="tech-title">${key} :</span>  
            <span>${product.technicalProperties[key]}</span> 
          </div>
        </div>
      `;
    }
    html += `</div>`;
    $(".left-content .content-title p:eq(1)").text("Technical Properties");
    $(".right-content").html(html);
  }

  function loadApplications(product) {
    let html = `<div class="left-top-main-container">`;
    let entries = Object.entries(product.applications);

    html += `<div class="left-top-container container1"><div class="left-top-1-container-holder">`;
    for (let i = 0; i < 2 && i < entries.length; i++) {
      html += `
        <div class="left-top-1-card-container">
          <div class="application-card-container">
            <div class="application-card-image">
              <img src="${entries[i][0]}" alt="image">
            </div>
            <div class="application-card-content-container">
              <img src="./assets/images/pin_image.svg" alt="pin">
              <p class="application-card-text">${entries[i][1]}</p>
            </div>
          </div>
        </div>
      `;
    }
    html += `</div></div>`;

    html += `<div class="left-top-container container3"><div class="left-top-3-container-1">`;
    for (let i = 2; i < 4 && i < entries.length; i++) {
      html += `
        <div class="left-top-3-card-container">
          <div class="application-card-container">
            <div class="application-card-image">
              <img src="${entries[i][0]}" alt="image">
            </div>
            <div class="application-card-content-container">
              <img src="./assets/images/pin_image.svg" alt="pin">
              <p class="application-card-text">${entries[i][1]}</p>
            </div>
          </div>
        </div>
      `;
    }
    html += `</div>`;

    if (entries.length > 4) {
      html += `
        <div class="left-top-3-container">
          <div class="application-card-container">
            <div class="application-card-image">
              <img src="${entries[4][0]}" alt="image">
            </div>
            <div class="application-card-content-container">
              <img src="./assets/images/pin_image.svg" alt="pin">
              <p class="application-card-text">${entries[4][1]}</p>
            </div>
          </div>
        </div>
      `;
    }
    html += `</div></div>`;
    $(".left-content .content-title p:eq(1)").text("Applications");
    $(".right-content").html(html);
  }

  function loadBenefits(product) {
    let html = `<div class="benefits-container">`;
    product.benefits.forEach(b => {
      html += `
        <div class="benefit-item">
          <img src="./assets/images/pin_image.svg" alt="bullet" class="benefit-icon">
          <span>${b}</span>
        </div>
      `;
    });
    html += `</div>`;
    $(".left-content .content-title p:eq(1)").text("Benefits & Features");
    $(".right-content").html(html);
  }

  function loadAllSections(product) {
    let html = "";

    html += `<h2>Technical Properties</h2>`;
    html += `<div class="tech-container">`;
    for (let key in product.technicalProperties) {
      html += `
        <div class="tech-item">
          <img src="./assets/images/pin_image.svg" alt="bullet" class="benefit-icon">
          <div class="tech-text"> 
            <span class="tech-title">${key} :</span>  
            <span>${product.technicalProperties[key]}</span> 
          </div>
        </div>`;
    }
    html += `</div>`;

    html += `<h2>Applications</h2>`;
    html += `<div class="mob-sec-card-grid mob-panel">`;
    let entries = Object.entries(product.applications);
    entries.forEach(([src, label], index) => {
      const fullWidthClass = (index === entries.length - 1) ? " mob-sec-full-width-card" : "";
      html += `
        <div class="mob-sec-grid-card${fullWidthClass}">
          <div class="mob-application-card-container">
            <div class="mob-application-card-image">
              <img src="${src}" alt="${label}">
            </div>
            <div class="mob-application-card-content-container">
              <img src="./assets/images/pin_image.svg" alt="pin">
              <p class="mob-application-card-text">${label}</p>
            </div>
          </div>
        </div>`;
    });
    html += `</div>`;

    html += `<h2>Benefits & Features</h2>`;
    html += `<div class="benefits-container">`;
    product.benefits.forEach(b => {
      html += `
        <div class="benefit-item">
          <img src="./assets/images/pin_image.svg" alt="bullet" class="benefit-icon">
          <span>${b}</span>
        </div>`;
    });
    html += `</div>`;

    $(".left-content .content-title p:eq(1)").text("");
    $(".right-content").html(html);
  }

});
