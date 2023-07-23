import { Layout } from "components/layout";
import { Router } from "./routes/router";
import { toastsStore } from "shared/stores/toast";
import { ToastContainer } from "components/toast";


const App = () => {

  return (
    <Layout>
      <ToastContainer toastStore={toastsStore} />
      <Router />
    </Layout>
  );
}

export default App;
