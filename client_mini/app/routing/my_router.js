import StateDashboard from "../components/states/dashboard";
import StateNotification from "../components/states/notification";

import { MicroRouter } from "@tarvit/micro_router";
const MyRouter = new MicroRouter();
MyRouter.logsEnabled = true;

MyRouter.setDefaultRoute('notification/example');
MyRouter.addRoute('dashboard', StateDashboard);
MyRouter.addRoute('notification/:text', StateNotification);

MyRouter.nav = {
  toDashboard: () => {
    MyRouter.navigate({ view: StateDashboard});
  },
  toNotification: (message) => {
    MyRouter.navigate({ view: StateNotification, text: message})
  }
};

global.MyRouter = MyRouter;
export default MyRouter;
