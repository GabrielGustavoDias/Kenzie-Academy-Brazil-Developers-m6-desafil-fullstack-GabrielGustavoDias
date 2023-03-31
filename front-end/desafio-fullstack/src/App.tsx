import { ToastContainer } from "react-toastify";
import DefaultTemplate from "./components/template";
import { ClientProvider } from "./context/ClientContext";
import { ContactProvider } from "./context/ContactContext";
import AppRoutes from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ClientProvider>
          <ContactProvider>
            <DefaultTemplate>
              <AppRoutes />
              <ToastContainer
                position="bottom-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </DefaultTemplate>
          </ContactProvider>
        </ClientProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
