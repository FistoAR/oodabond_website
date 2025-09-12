
$(document).ready(function () {
    const imageGroups = {
        1: [
            './Images/01/ThreadLockerService-1.webp',
            './Images/01/ThreadLockerService-2.webp',
            './Images/01/ThreadLockerService-3.webp',
            './Images/01/ThreadLockerService-4.webp',
            './Images/01/ThreadLockerService-5.webp',
            './Images/01/ThreadLockerService-6.webp',
            './Images/01/ThreadLockerService-7.webp',
            './Images/01/ThreadLockerService-8.webp',
        ],
        2: [
            './Images/02/Pre_applied-thread_locker_1.webp',
            './Images/02/Pre_applied-thread_locker_2.webp',
            './Images/02/Pre_applied-thread_locker_3.webp',
            './Images/02/Pre_applied-thread_locker_4.webp',
            './Images/02/Pre_applied-thread_locker_5.webp',
            './Images/02/Pre_applied-thread_locker_6.webp',
            './Images/02/Pre_applied-thread_locker_7.webp',
            './Images/02/Pre_applied-thread_locker_8.webp',
        ],
        3: [
            './Images/01/ThreadLockerService-1.webp',
            './Images/01/ThreadLockerService-2.webp',
            './Images/01/ThreadLockerService-3.webp',
            './Images/01/ThreadLockerService-4.webp',
            './Images/01/ThreadLockerService-5.webp',
            './Images/01/ThreadLockerService-6.webp',
            './Images/01/ThreadLockerService-7.webp',
            './Images/01/ThreadLockerService-8.webp',
        ],
        4: [
            './Images/04/Metalepoxy_1.webp',
            './Images/04/Metalepoxy_2.webp',
            './Images/04/Metalepoxy_3.webp',
            './Images/04/Metalepoxy_4.webp',
            './Images/04/Metalepoxy_5.webp',
            './Images/04/Metalepoxy_6.webp',
            './Images/04/Metalepoxy_7.webp',
            './Images/04/Metalepoxy_7.webp',
        ],
        5: [
            './Images/05/UvGlue_1.webp',
            './Images/05/UvGlue_2.webp',
            './Images/05/UvGlue_3.webp',
            './Images/05/UvGlue_4.webp',
            './Images/05/UvGlue_5.webp',
            './Images/05/UvGlue_6.webp',
            './Images/05/UvGlue_7.webp',
            './Images/05/UvGlue_8.webp',
        ],
        6: [
            './Images/08/Magner_Bonding_services_1.webp',
            './Images/08/Magner_Bonding_services_2.webp',
            './Images/08/Magner_Bonding_services_3.webp',
            './Images/08/Magner_Bonding_services_4.webp',
            './Images/08/Magner_Bonding_services_5.webp',
            './Images/08/Magner_Bonding_services_6.webp',
            './Images/08/Magner_Bonding_services_7.webp',
            './Images/08/Magner_Bonding_services_8.webp',
        ],
        7: [
            './Images/07/Nylon_power_coatingservices_1.webp',
            './Images/07/Nylon_power_coatingservices_2.webp',
            './Images/07/Nylon_power_coatingservices_3.webp',
            './Images/07/Nylon_power_coatingservices_4.webp',
            './Images/07/Nylon_power_coatingservices_5.webp',
            './Images/07/Nylon_power_coatingservices_6.webp',
            './Images/07/Nylon_power_coatingservices_7.webp',
            './Images/07/Nylon_power_coatingservices_8.webp',
        ],
        8: [
            './Images/08/Magner_Bonding_services_1.webp',
            './Images/08/Magner_Bonding_services_2.webp',
            './Images/08/Magner_Bonding_services_3.webp',
            './Images/08/Magner_Bonding_services_4.webp',
            './Images/08/Magner_Bonding_services_5.webp',
            './Images/08/Magner_Bonding_services_6.webp',
            './Images/08/Magner_Bonding_services_7.webp',
            './Images/08/Magner_Bonding_services_8.webp',
        ],
        9: [
            './Images/09/Electric_Pcb_potting_services_1.webp',
            './Images/09/Electric_Pcb_potting_services_2.webp',
            './Images/09/Electric_Pcb_potting_services_3.webp',
            './Images/09/Electric_Pcb_potting_services_4.webp',
            './Images/09/Electric_Pcb_potting_services_5.webp',
            './Images/09/Electric_Pcb_potting_services_6.webp',
            './Images/09/Electric_Pcb_potting_services_7.webp',
            './Images/09/Electric_Pcb_potting_services_8.webp',
        ],
        10: [
            './Images/10/Bearing_retainer_services_1.webp',
            './Images/10/Bearing_retainer_services_2.webp',
            './Images/10/Bearing_retainer_services_3.webp',
            './Images/10/Bearing_retainer_services_4.webp',
            './Images/10/Bearing_retainer_services_5.webp',
            './Images/10/Bearing_retainer_services_6.webp',
            './Images/10/Bearing_retainer_services_7.webp',
            './Images/10/Bearing_retainer_services_8.webp',
        ],
        11: [
            './Images/11/CCTV_camera_bonding Services_1.webp',
            './Images/11/CCTV_camera_bonding Services_2.webp',
            './Images/11/CCTV_camera_bonding Services_3.webp',
            './Images/11/CCTV_camera_bonding Services_4.webp',
            './Images/11/CCTV_camera_bonding Services_5.webp',
            './Images/11/CCTV_camera_bonding Services_6.webp',
            './Images/11/CCTV_camera_bonding Services_7.webp',
            './Images/11/CCTV_camera_bonding Services_8.webp'
        ],
        12: [
            './Images/12/lift_adhesives_services_1.webp',
            './Images/12/lift_adhesives_services_2.webp',
            './Images/12/lift_adhesives_services_3.webp',
            './Images/12/lift_adhesives_services_4.webp',
            './Images/12/lift_adhesives_services_5.webp',
            './Images/12/lift_adhesives_services_6.webp',
            './Images/12/lift_adhesives_services_7.webp',
            './Images/12/lift_adhesives_services_8.webp'
        ],
        13: [
            './Images/13/medical_bonding_glue_services_1.webp',
            './Images/13/medical_bonding_glue_services_2.webp',
            './Images/13/medical_bonding_glue_services_3.webp',
            './Images/13/medical_bonding_glue_services_4.webp',
            './Images/13/medical_bonding_glue_services_5.webp',
            './Images/13/medical_bonding_glue_services_6.webp',
            './Images/13/medical_bonding_glue_services_7.webp',
            './Images/13/medical_bonding_glue_services_8.webp',
        ],
        14: [
            './Images/14/gasketing_sealing_services_1.webp',
            './Images/14/gasketing_sealing_services_2.webp',
            './Images/14/gasketing_sealing_services_3.webp',
            './Images/14/gasketing_sealing_services_4.webp',
            './Images/14/gasketing_sealing_services_5.webp',
            './Images/14/gasketing_sealing_services_6.webp',
            './Images/14/gasketing_sealing_services_7.webp',
            './Images/14/gasketing_sealing_services_8.webp',
        ],
        15: [
            './Images/15/AeroSpace_coating_services_1.webp',
            './Images/15/AeroSpace_coating_services_2.webp',
            './Images/15/AeroSpace_coating_services_3.webp',
            './Images/15/AeroSpace_coating_services_4.webp',
            './Images/15/AeroSpace_coating_services_5.webp',
            './Images/15/AeroSpace_coating_services_6.webp',
            './Images/15/AeroSpace_coating_services_7.webp',
            './Images/15/AeroSpace_coating_services_8.webp',
        ],
        16: [
            './Images/16/homeappliance_adhesive_Services_1.webp',
            './Images/16/homeappliance_adhesive_Services_2.webp',
            './Images/16/homeappliance_adhesive_Services_3.webp',
            './Images/16/homeappliance_adhesive_Services_4.webp',
            './Images/16/homeappliance_adhesive_Services_5.webp',
            './Images/16/homeappliance_adhesive_Services_6.webp',
            './Images/16/homeappliance_adhesive_Services_7.webp',
            './Images/16/homeappliance_adhesive_Services_8.webp',
        ],
        17: [
            './Images/17/electrical_motor_services_1.webp',
            './Images/17/electrical_motor_services_2.webp',
            './Images/17/electrical_motor_services_3.webp',
            './Images/17/electrical_motor_services_4.webp',
            './Images/17/electrical_motor_services_5.webp',
            './Images/17/electrical_motor_services_6.webp',
            './Images/17/electrical_motor_services_7.webp',
            './Images/17/electrical_motor_services_8.webp',
        ],
        18: [
            './Images/18/FRP_services_1.webp',
            './Images/18/FRP_services_2.webp',
            './Images/18/FRP_services_3.webp',
            './Images/18/FRP_services_4.webp',
            './Images/18/FRP_services_5.webp',
            './Images/18/FRP_services_6.webp',
            './Images/18/FRP_services_7.webp',

        ],
        19: [
            './Images/25/nano_coating_services_1.webp',
            './Images/25/nano_coating_services_2.webp',
            './Images/25/nano_coating_services_3.webp',
            './Images/25/nano_coating_services_4.webp',
            './Images/25/nano_coating_services_5.webp',
            './Images/25/nano_coating_services_6.webp',
            './Images/25/nano_coating_services_7.webp',
            './Images/25/nano_coating_services_8.webp',
        ],
        20: [
            './Images/20/paint_rust_remover_services_1.webp',
            './Images/20/paint_rust_remover_services_2.webp',
            './Images/20/paint_rust_remover_services_3.webp',
            './Images/20/paint_rust_remover_services_4.webp',
            './Images/20/paint_rust_remover_services_5.webp',
            './Images/20/paint_rust_remover_services_6.webp',

        ],
        21: [
            './Images/26/automotive_Engine_services_1.webp',
            './Images/26/automotive_Engine_services_2.webp',
            './Images/26/automotive_Engine_services_3.webp',
            './Images/26/automotive_Engine_services_4.webp',
            './Images/26/automotive_Engine_services_5.webp',
            './Images/26/automotive_Engine_services_6.webp',
            './Images/26/automotive_Engine_services_7.webp',
            './Images/26/automotive_Engine_services_8.webp',
        ],

        22: [
            './Images/22/Foundary_1.webp',
            './Images/22/Foundary_2.webp',

        ],
        23: [
            './Images/23/Rubber_mold-Services_1.webp',
            './Images/23/Rubber_mold-Services_2.webp',
            './Images/23/Rubber_mold-Services_3.webp',
            './Images/23/Rubber_mold-Services_4.webp',
            './Images/23/Rubber_mold-Services_5.webp',
            './Images/23/Rubber_mold-Services_6.webp',
            './Images/23/Rubber_mold-Services_7.webp',
            './Images/23/Rubber_mold-Services_8.webp',
        ],
        24: [
            './Images/24/cyno_adheives_services_1.webp',
            './Images/24/cyno_adheives_services_2.webp',
            './Images/24/cyno_adheives_services_3.webp',
            './Images/24/cyno_adheives_services_4.webp',
            './Images/24/cyno_adheives_services_5.webp',
            './Images/24/cyno_adheives_services_6.webp',
            './Images/24/cyno_adheives_services_7.webp',
            './Images/24/cyno_adheives_services_8.webp',
        ],
        25: [
            './Images/25/nano_coating_services_1.webp',
            './Images/25/nano_coating_services_2.webp',
            './Images/25/nano_coating_services_3.webp',
            './Images/25/nano_coating_services_4.webp',
            './Images/25/nano_coating_services_5.webp',
            './Images/25/nano_coating_services_6.webp',
            './Images/25/nano_coating_services_7.webp',
            './Images/25/nano_coating_services_8.webp',
        ],
        26: [
            './Images/26/automotive_Engine_services_1.webp',
            './Images/26/automotive_Engine_services_2.webp',
            './Images/26/automotive_Engine_services_3.webp',
            './Images/26/automotive_Engine_services_4.webp',
            './Images/26/automotive_Engine_services_5.webp',
            './Images/26/automotive_Engine_services_6.webp',
            './Images/26/automotive_Engine_services_7.webp',
            './Images/26/automotive_Engine_services_8.webp',
        ],
        27: [
            './Images/27/injection_mold_ejector_services_1.webp',
            './Images/27/injection_mold_ejector_services_2.webp',
            './Images/27/injection_mold_ejector_services_3.webp',
            './Images/27/injection_mold_ejector_services_4.webp',
            './Images/27/injection_mold_ejector_services_5.webp',
            './Images/27/injection_mold_ejector_services_6.webp',
            './Images/27/injection_mold_ejector_services_7.webp',
            './Images/27/injection_mold_ejector_services_8.webp',
        ],
        28: [
            './Images/27/injection_mold_ejector_services_1.webp',
            './Images/27/injection_mold_ejector_services_2.webp',
            './Images/27/injection_mold_ejector_services_3.webp',
            './Images/27/injection_mold_ejector_services_4.webp',
            './Images/27/injection_mold_ejector_services_5.webp',
            './Images/27/injection_mold_ejector_services_6.webp',
            './Images/27/injection_mold_ejector_services_7.webp',
            './Images/27/injection_mold_ejector_services_8.webp',
        ],


    };

    const content = {
        1: ["Threadlocker is a liquid adhesive used to secure threaded fasteners against loosening from vibration, shock, or thermal changes. It cures anaerobically between metal surfaces, offering both removable and permanent grades. Commonly used in automotive, aerospace, and machinery applications, it ensures reliability, reduces maintenance, and prevents failures caused by loose bolts or screws."],

        2: ["Pre-applied threadlockers are dry-to-touch adhesives factory-coated onto fasteners. They activate during assembly, eliminating the need for liquid application on-site. Ideal for mass production, they improve efficiency, reduce waste, and ensure uniform performance. Used in automotive, electronics, and machinery manufacturing, they prevent loosening in high-vibration environments while providing consistent, long-term fastening security."],

        3: ["Thread sealing involves applying specialized sealants—like PTFE tape, liquid compounds, or anaerobic materials—to threaded joints to prevent leaks of liquids or gases. It ensures a pressure-resistant, durable seal for plumbing, hydraulic, pneumatic, and gas systems. By enhancing joint integrity, it boosts safety, efficiency, and reliability in both industrial installations and domestic applications."],

        4: ["Metal epoxy putty is a two-part compound designed for repairing, bonding, and rebuilding metal parts such as steel, stainless steel, mild steel, cast iron, aluminum, copper, and bronze. It sets quickly, resists chemicals, and withstands extreme temperatures. Ideal for machinery repairs, plumbing, automotive maintenance, and industrial applications where welding is not feasible."],

        5: ["UV glues are adhesives that cure when exposed to ultraviolet light, allowing precise positioning before bonding. They form strong, clear, and durable bonds, making them perfect for glass, electronics, medical devices, and jewelry. With rapid curing times and excellent transparency, they are widely used in applications requiring both speed and visual clarity."],

        6: ["1K single part epoxy adhesives are ready-to-use, heat or moisture-cured bonding agents offering high strength, chemical resistance, and thermal stability. They require no mixing, making application easy and consistent. Used in electronics, automotive, and industrial manufacturing, they provide excellent adhesion to metals, plastics, and ceramics for both structural and protective purposes."],

        7: ["Nylon Polyamide 11 powder coating and nylon liquid coatings provide high-performance, corrosion-resistant protective layers. They offer abrasion resistance, chemical stability, and low friction, making them ideal for metal, plastic, and wire protection. Widely used in automotive, industrial, and marine environments, they enhance durability and extend the lifespan of coated components."],

        8: ["Magnet bonding adhesives are engineered for securely attaching magnets to metal or plastic substrates without affecting magnetic properties. They offer high shear strength, impact resistance, and temperature stability. Commonly used in electric motors, sensors, loudspeakers, and automotive components, they ensure long-term reliability in demanding industrial and consumer product applications."],

        9: ["Electronics PCB potting and SMT adhesives provide mechanical protection and environmental sealing for electronic components. Potting compounds insulate against moisture, dust, and vibration, while SMT adhesives secure parts during soldering. These materials improve reliability, extend product life, and are widely used in automotive electronics, telecommunications, consumer devices, and industrial control systems."],

        10: ["Bearing retainers are anaerobic adhesives formulated to bond cylindrical assemblies like bearings, bushings, and sleeves into housings or shafts. They prevent loosening, fretting, and wear under high loads or vibration. Common in automotive, heavy machinery, and aerospace applications, they improve load distribution, extend service life, and simplify mechanical assembly processes."],

        11: ["CCTV camera lens bonding adhesives provide secure, precise attachment of lenses to camera modules. They resist vibration, temperature changes, and environmental exposure while maintaining optical clarity. Used in surveillance, automotive vision systems, and consumer electronics, they ensure stable image alignment and long-term performance in both indoor and outdoor environments."],

        12: ["Lifts and elevator assembly adhesives replace or supplement mechanical fasteners for structural panels, control systems, and decorative fittings. They provide high strength, vibration resistance, and noise reduction. Suitable for bonding metals, composites, and glass, these adhesives improve safety, aesthetics, and durability while reducing weight and assembly time in vertical transport systems."],

        13: ["Medical device bonding glues for syringes, needles, and catheter tubes provide biocompatible, sterile, and secure joints. They offer rapid curing, strong adhesion to plastics and metals, and resistance to sterilization processes. Used in high-volume production, these adhesives meet strict medical regulations to ensure patient safety and device performance in healthcare environments."],

        14: ["Gasketing sealing adhesives create in-place gaskets that seal flanges and joints against leakage of liquids or gases. They cure to form flexible, chemical-resistant seals, replacing pre-cut gaskets. Commonly used in engines, pumps, and industrial equipment, they improve sealing reliability, reduce inventory needs, and compensate for surface irregularities in metal assemblies."],

        15: ["Aerospace sealing and coatings provide advanced protection against extreme temperatures, chemical exposure, and pressure changes. These materials are designed for structural bonding, fuel system sealing, and environmental protection. They meet rigorous aerospace standards, ensuring safety, performance, and longevity for aircraft components, spacecraft systems, and other high-reliability aerospace applications."],

        16: ["Home appliance adhesives are used in gas stoves, mixer grinders, and motors for assembly and repair. They offer heat resistance, vibration damping, and strong bonding to metals, plastics, and ceramics. These adhesives enhance product durability, improve safety, and enable lightweight, aesthetically pleasing designs in modern kitchen and household appliances."],

        17: ["Electrical motor adhesives and coatings are used for bonding, sealing, and insulating components such as stators, rotors, and windings. They provide thermal stability, vibration resistance, and dielectric strength. Used in automotive, industrial, and appliance motors, they improve energy efficiency, extend service life, and protect against dust, moisture, and mechanical wear."],

        18: ["FRP mold release agents are coatings applied to molds to prevent fiberglass-reinforced plastic parts from sticking during manufacturing. They ensure smooth part removal, reduce defects, and extend mold life. Suitable for automotive, marine, and construction industries, they improve production efficiency and maintain high surface quality in composite part manufacturing."],

        19: ["Injection molding nano coatings for scoring mark avoidance prevent wear and marking on mold surfaces. These ultra-thin, durable coatings reduce friction, improve mold release, and extend tooling life. Used in precision plastic manufacturing, they help maintain product aesthetics, reduce maintenance, and improve cycle times for high-volume injection molding operations."],

        20: ["Paint and rust removers are chemical or gel formulations designed to strip coatings and corrosion from metal surfaces. They work without damaging the underlying material, preparing it for repainting or repair. Used in automotive restoration, marine maintenance, and industrial refurbishment, they improve adhesion of new coatings and extend component lifespan."],

        21: ["Oil parts cleaners and degreasers remove oils, grease, and contaminants from mechanical components. They improve assembly quality, reduce wear, and prepare surfaces for coating or bonding. Common in automotive, aerospace, and manufacturing industries, they ensure precision performance, enhance safety, and extend the life of machinery and equipment by maintaining cleanliness."],

        22: ["Foundry sand core model bonding glues secure sand cores and molds used in metal casting. They provide high strength, quick setting, and resistance to molten metal temperatures. By preventing core shifting and breakage, these adhesives improve casting accuracy, reduce scrap rates, and increase production efficiency in foundry operations."],

        23: ["Tyre, rubber, and FRP mold release agents prevent materials from sticking to molds during manufacturing. They enable smooth release, reduce defects, and improve surface finish. Common in automotive, construction, and sports equipment production, they extend mold life, enhance product quality, and improve efficiency in high-volume molding operations."],

        24: ["Cyanoacrylate instant adhesives and rubber-based adhesives provide fast, strong bonds for a wide variety of substrates. Cyanoacrylates cure in seconds, ideal for quick repairs and precision assembly, while rubber-based adhesives offer flexibility and impact resistance. Used in electronics, automotive, medical devices, and household goods, they deliver reliability in demanding conditions."],

        25: ["Nano coatings are ultra-thin surface treatments that enhance resistance to water, oil, dirt, and corrosion. They improve durability, reduce cleaning needs, and provide protective properties without altering appearance. Used in automotive, electronics, glass, and industrial equipment, they offer advanced performance benefits in both consumer and industrial applications."],

        26: ["Automotive engine adhesives and sealants are engineered for high-temperature, vibration-resistant bonding and sealing in engine assemblies. They withstand fuels, oils, and thermal cycling. Used for gasketing, threadlocking, and structural bonding, they improve reliability, reduce leaks, and enhance performance in cars, trucks, and heavy-duty vehicle engines."],

        27: ["Injection molding ejector pin high-temperature grease is a non-melting, non-dripping lubricant designed for extreme heat. It ensures smooth pin movement, reduces wear, and prevents sticking during molding cycles. Suitable for demanding plastic manufacturing, it extends tool life, maintains production efficiency, and performs reliably under continuous high-temperature conditions."],

        28: ["Injection molding ejector pin high-temperature grease is a non-melting, non-dripping lubricant designed for extreme heat. It ensures smooth pin movement, reduces wear, and prevents sticking during molding cycles. Suitable for demanding plastic manufacturing, it extends tool life, maintains production efficiency, and performs reliably under continuous high-temperature conditions."],


    };

    const appCards = document.querySelectorAll('.application-card-container');
    const mobappCards = document.querySelectorAll('.mob-sec-grid-card');

    const allCards = [...appCards, ...mobappCards];

    allCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate-in');
        }, index * 250);
    });

    $('.div-button').each(function () {
        $(this).on('click', function () {

            $('.div-button').removeClass('active');
            $(this).addClass('active');

            const dataID = $(this).data('id');
            const images = imageGroups[dataID];
            const contents = content[dataID];
            $('.service-content')
                .removeClass('visible')
                .html(contents);

            setTimeout(() => {
                $('.service-content').addClass('visible');
            }, 400);


            if (images && images.length > 0) {
                const targetImgs = document.querySelectorAll('.application-card-container img');
                const mobtargetImgs = document.querySelectorAll('.mob-sec-grid-card img');
                targetImgs.forEach((imgEl, idx) => {
                    if (images[idx]) {
                        imgEl.src = images[idx];
                    }
                });

                mobtargetImgs.forEach((imgEl, idx) => {
                    if (images[idx]) {
                        imgEl.src = images[idx];
                    }
                });

                const headingText = $(this).text().trim();
                $('.top-cont h1').text(headingText);
            }

            if (mobappCards) {
                for (let i = 0; i < appCards.length; i++) {
                    mobappCards[i].classList.remove('animate-in');
                }
                mobappCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, index * 250);
                });
            }

            for (let i = 0; i < appCards.length; i++) {
                appCards[i].classList.remove('animate-in');
            }

            appCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 250);
            });



            document.querySelector('.sidebar').classList.toggle('sidebar-show');
        });
    });
});


const menubtn = document.getElementById('menu');
menubtn.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-show');
});


const closebtn = document.getElementById('close-btn');
closebtn.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-show');
});


