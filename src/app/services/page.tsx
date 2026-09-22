import { Metadata } from "next";
import ServicesPage from "./components/Services";

export const metadata : Metadata= {
  title: "Automotive Services | Everything Auto Repair Franklin Square NY",
  description:
    "Explore comprehensive automotive services at Everything Auto Repair in Franklin Square, NY — from engine diagnostics and transmission repair to tire service, brake replacement, air conditioning repair, and preventative maintenance.",
  keywords: `
Auto repair
Car maintenance
Engine diagnostics
Transmission repair
Brake service
Oil change
Car air conditioning
Tire service
Wheel balancing
Suspension repair
Steering repair
Electrical system repair
Battery service
Car inspection
State inspection
Preventative maintenance
Vehicle tune-up
Check engine light
Car troubleshooting
Auto diagnostics
Car repair Franklin Square
Mechanic near me
Engine tune-up
Car service shop
Vehicle maintenance
Fleet maintenance
Hybrid repair
Electric car service
Cooling system repair
Radiator replacement
AC recharge
Fuel system cleaning
Brake fluid replacement
Transmission flush
Exhaust repair
Muffler repair
Catalytic converter service
Car safety inspection
Emissions testing
Clutch replacement
Alternator repair
Starter repair
Battery testing
Car charging system
Timing belt replacement
Water pump repair
Power steering repair
Suspension alignment
Shock absorber replacement
Strut repair
Wheel alignment
Tire rotation
Flat tire repair
Auto tire replacement
Engine rebuild
Oil filter replacement
Fuel pump repair
Air filter replacement
Cabin filter replacement
Spark plug replacement
Ignition coil repair
Headlight restoration
Car lighting repair
Electrical wiring repair
Fuses and relays
Dashboard warning lights
ABS repair
Brake pad replacement
Brake rotor replacement
Hydraulic brake repair
Brake line inspection
Emergency brake adjustment
Transmission rebuild
Gearbox repair
CV joint replacement
Axle repair
Driveshaft repair
Differential service
Car noise inspection
Overheating repair
Coolant flush
Heater core repair
Thermostat replacement
Car AC compressor repair
Refrigerant leak fix
Auto detailing
Interior repair
Car wash service
Fleet vehicle repair
Auto service Franklin Square NY
Everything Auto Franklin Square
Car mechanic Franklin Square
Auto electrical Franklin Square
NY state vehicle inspection
Local car repair shop
Affordable car repair
Top-rated auto shop
Certified mechanics
Professional auto repair
Full-service auto repair
Auto diagnostics shop
Vehicle safety check
Emission inspection NY
Luxury car repair
European car repair
Japanese car repair
Domestic car repair
SUV repair
Truck service
Minivan repair
Hybrid system repair
Engine performance testing
Car fluid check
Transmission oil change
Clutch adjustment
Battery charging
Alternator replacement
Starter motor testing
Drive belt replacement
Serpentine belt repair
Air conditioning recharge
Auto HVAC service
Windshield repair
Wiper replacement
Headlamp repair
Tail light repair
Turn signal repair
Car horn repair
Fuel efficiency inspection
Engine oil leak fix
Car gasket repair
Cylinder head service
Piston ring replacement
Engine mount repair
Timing chain replacement
Exhaust leak repair
Emission system repair
Fuel injector cleaning
Throttle body service
Oxygen sensor replacement
Catalytic converter replacement
EGR valve cleaning
PCV valve service
Car computer diagnostics
OBD2 scan
Auto repair diagnostics Franklin Square
Preventive car care
Car maintenance packages
Routine oil changes
Tire balancing and alignment
Seasonal maintenance
Battery replacement near me
Car AC service near me
Check engine light service
Car repair Long Island
Auto repair near Franklin Square NY
Trusted car service NY
Local auto mechanic
Experienced car technicians
Engine troubleshooting
Auto repair experts
Top car repair services
Comprehensive vehicle diagnostics
Car repair specialists
Car care packages
Professional maintenance
Auto repair booking online
Book auto appointment
Call auto repair shop
24/7 car repair assistance
Car towing available
Affordable car service plans
Certified auto technicians
Reliable automotive repair
Full diagnostics report
Vehicle checkup NY
Expert automotive solutions
Complete car care
Auto repair shop Franklin Square
Auto maintenance NY
Licensed auto repair center
Quick car service
Car performance tuning
Complete mechanical service
Drivetrain repair
Car care Franklin Square
Car service packages NY
Auto specialists Franklin Square
All-brand car repair
Vehicle diagnostics testing
Auto checkup Franklin Square
Brake and clutch repair
Steering alignment
Suspension checkup
Tire balancing NY
Fuel economy inspection
Auto emission testing
Car AC maintenance
Battery health check
Car repair solutions
Expert vehicle repair
Long-lasting auto repair
Engine replacement NY
Transmission service NY
Auto workshop Franklin Square
Vehicle service center NY
Maintenance experts NY
Car repair professionals NY
Car health inspection
Affordable auto diagnostics
Certified repair workshop
Auto repair Franklin Square experts
Reliable mechanic shop
Automotive repair Franklin Square NY
  `,
};

export default async function Home() {
  return (
    <>
      <ServicesPage />
    </>
  );
}
