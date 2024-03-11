import { CAPACITY_URLS } from "../router";
import CNCMachining from "./capacities/CNCMachining";
import Material from "./capacities/Material";
import SheetMetalFabrication from "./capacities/SheetMetalFabrication";

const Capabilitiy = () => {
  return (
    <div className="flex flex-col gap-8 pb-5">
      <CNCMachining id={CAPACITY_URLS.CNC_MACHINING.key} />
      <Material id={CAPACITY_URLS.MATERIAL.key} />
      <SheetMetalFabrication id={CAPACITY_URLS.SHEET_METAL_FABRICATION.key} />
    </div>
  );
};

export default Capabilitiy;
