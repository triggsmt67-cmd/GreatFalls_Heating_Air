import type { FAQItem } from "@/content/faqs";
import { siteConfig } from "@/content/site";

export const emergencyFaqs: FAQItem[] = [
  {
    question: "My furnace stopped in the middle of the night. Can it wait until morning?",
    answer: `If your home is losing heat in freezing weather, call rather than waiting for morning or a form reply. We offer 24/7 emergency service and repair at ${siteConfig.phoneDisplay}. Tell us the indoor temperature, who is in the home, and what the furnace is doing. Ask about the arrival window and next steps; repair timing depends on the diagnosis and available parts. If the home is becoming unsafe, move to a warm location. For gas odor or a CO alarm, leave immediately and call 911 from outside before contacting us.`,
  },
  {
    question: "Should I call a furnace company or 911 if I smell gas or hear a CO alarm?",
    answer: "Leave the building immediately with everyone in your household. Don’t use switches, a phone, or anything that could create a spark inside, and don’t stop to troubleshoot the furnace. From a safe location outside, call 911. Report a suspected gas leak to your gas utility or propane supplier as well. Don’t re-enter until responders say it is safe. Call us after the immediate danger has been addressed.",
    sources: [
      { label: "NorthWestern Energy: natural gas emergencies", url: "https://www.northwesternenergy.com/safety/natural-gas-propane-safety/natural-gas-emergency" },
      { label: "CPSC: winter heating and CO safety", url: "https://www.cpsc.gov/Newsroom/News-Releases/2026/Keep-Warm-and-Safe-This-Winter-Tips-for-Using-Generators-Furnaces-and-Space-Heaters" },
    ],
  },
  {
    question: "How much does an emergency furnace repair cost?",
    answer: "Call to confirm the diagnostic fee, any emergency or after-hours charges, and what the visit includes. Angi’s 2026 guide reports a $318 national average for furnace repair overall; that is not an emergency-specific average. It is a general budgeting reference, not a quote, advertised rate, or price cap from Great Falls Heating and Air. Your repair may cost less or substantially more depending on the fault, parts, access, labor, warranty coverage, and service timing. Review the price for the proposed work before approving the repair.",
    sources: [
      { label: "Angi: national furnace repair costs (September 2026)", url: "https://www.angi.com/articles/how-much-does-common-furnace-repair-cost.htm" },
    ],
  },
  {
    question: "My furnace works after a reset, then stops again. Should I keep resetting it?",
    answer: "No. A reset may restart the furnace without resolving the fault that shut it down. If it locks out again, stop troubleshooting and call. Follow only the homeowner instructions for your exact model; don’t bypass safety switches, reset rollout switches, or remove panels. Note any code visible through a sight glass before interrupting power. If you smell gas, see smoke, or hear a CO alarm, leave immediately and call 911 from a safe location.",
    sources: [
      { label: "Trane: furnace lockout causes and service", url: "https://www.trane.com/residential/en/resources/troubleshooting/gas-furnaces/furnace-hard-lock-out/" },
    ],
  },
  {
    question: "What do the blinking red or amber lights on my furnace mean?",
    answer: "The meaning depends on the furnace’s brand, model, and blink pattern. There isn’t one universal three-flash or four-flash diagnosis. If the light is visible through a sight glass without opening the cabinet, note or photograph the pattern and share it with the model number when you call. Keep panels in place and don’t hold down a door switch to read a code. A code helps guide testing; it doesn’t prove which part needs replacing.",
    sources: [
      { label: "Trane: furnace blinking lights and model-specific codes", url: "https://www.trane.com/residential/en/resources/troubleshooting/gas-furnaces/furnace-light-blinking/" },
    ],
  },
  {
    question: "Can I use a space heater while waiting for furnace repair?",
    answer: "A portable electric heater can provide temporary warmth if you follow its instructions. Put it on a stable, level, nonflammable surface and keep it at least three feet from bedding, curtains, furniture, and other things that can burn. Keep children and pets away. Plug it directly into a suitable wall outlet, never an extension cord or power strip. Stop using it if the plug or outlet gets hot or a breaker trips. Turn it off before sleeping or leaving the room. Never use an oven, grill, outdoor heater, or generator indoors for heat.",
    sources: [
      { label: "CPSC: portable-heater safety", url: "https://www.cpsc.gov/Newsroom/News-Releases/2026/Keep-Warm-and-Safe-This-Winter-Tips-for-Using-Generators-Furnaces-and-Space-Heaters" },
      { label: "American Red Cross: heating your home safely", url: "https://www.redcross.org/about-us/news-and-events/news/heat-your-home-safely-during-cold-weather.html" },
    ],
  },
  {
    question: "How do I keep my pipes from freezing while the furnace is out?",
    answer: "Open kitchen and bathroom sink-cabinet doors so any remaining warmer room air can reach the plumbing. Move cleaning products out of children’s and pets’ reach, and keep garage doors closed if water lines run through the garage. These steps can reduce exposure but won’t guarantee pipes stay unfrozen as the house cools. Follow your water utility’s guidance and call a plumber for suspected frozen or burst pipes. Never use an open flame to thaw a pipe. If you need to leave the house, ask about protecting the plumbing before you go; don’t leave a portable heater running unattended.",
    sources: [
      { label: "American Red Cross: preventing and responding to frozen pipes", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm/frozen-pipes.html" },
    ],
  },
  {
    question: "Can you repair a furnace another company installed?",
    answer: "Yes. We service major residential forced-air furnace brands, including Lennox, Trane, Carrier, Goodman, and Rheem, even if another company installed the unit. Call with the brand, model number, approximate age, and symptoms so we can discuss service options. The diagnosis, equipment condition, compatible parts, and any warranty terms affect what can be repaired and when. A 24/7 service offer doesn’t guarantee every repair can be completed on the first visit.",
  },
];

export const emergencyFailures = [
  ["Ignitor or flame-sensor trouble", "The inducer starts, but the burners do not light—or they light briefly and shut off. An ignitor, flame sensor, gas-supply issue, or control fault may be involved. Testing identifies the cause before parts are replaced."],
  ["Condensate or pressure-switch faults", "A blocked drain, restricted vent, wind-related venting issue, or pressure-switch circuit fault can interrupt operation. A pressure-switch code needs diagnosis; it does not automatically mean the switch itself has failed."],
  ["Inducer or blower problems", "Humming without normal airflow, grinding, or weak circulation can point to a motor, capacitor where fitted, or another mechanical or electrical issue. Stop using equipment that makes new grinding or scraping sounds and arrange an inspection."],
  ["High-limit or rollout safety shutdowns", "Restricted airflow or an unsafe combustion condition can trigger a protective shutdown. A running blower does not identify which safety control is involved. Never bypass these switches or attempt to reset a rollout switch yourself."],
];

export const homeownerChecks = [
  ["Check accessible exterior vents", "From ground level, look for loose snow blocking intake or exhaust openings. Clear only loose snow you can safely reach. Do not climb, chip ice, disconnect pipes, or alter the vent termination; call if ice or a blockage remains."],
  ["Inspect the air filter", "Turn the system off according to its instructions before changing the filter. Replace a clogged filter with the specified size and type, and reinstall the cover. Do not run the furnace without its filter or open combustion compartments."],
  ["Look at the external power switch and breaker", "Check whether the furnace’s external switch was accidentally turned off or the breaker has tripped. Do not open electrical compartments or repeatedly reset a tripping breaker. Burning odors, sparks, or repeated trips need professional attention."],
  ["Confirm thermostat settings", "Set the thermostat to HEAT and above room temperature. Replace batteries if your model uses them. Check whether a schedule or fan-only setting explains what you are seeing."],
  ["Record fault codes before considering a reset", "If a diagnostic light is visible through a sight glass, note the blink pattern without removing panels. Follow only your model’s homeowner instructions for any reset. Do not repeatedly power-cycle a furnace, reset safety switches, or restart equipment showing danger signs. If it locks out again, stop and call."],
];
