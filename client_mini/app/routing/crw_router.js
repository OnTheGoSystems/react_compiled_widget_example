import StateLocalStorageRouter from "../vendor/state_local_storage_router";
import StateDashboard from "../components/states/dashboard";
import StateNotification from "../components/states/notification";

const CrwRouter = new StateLocalStorageRouter();

// TODO: replace with real routes
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
