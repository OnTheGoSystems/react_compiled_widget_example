import StateDashboard from "../components/states/dashboard";
import StateNotification from "../components/states/notification";

import { MicroRouter } from "@tarvit/micro_router";
const CrwRouter = new MicroRouter();
CrwRouter.logsEnabled = true;

CrwRouter.setDefaultRoute('notification/example');
CrwRouter.addRoute('dashboard', StateDashboard);
CrwRouter.addRoute('notification/:text', StateNotification);

CrwRouter.nav = {
  toDashboard: () => {
    CrwRouter.navigate({ view: StateDashboard});
  },
  toNotification: (message) => {
    CrwRouter.navigate({ view: StateNotification, text: message})
  }
};

global.CrwRouter = CrwRouter;
export default CrwRouter;
