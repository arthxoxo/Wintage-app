
import "./globals.css";
import UserProvider from './context/user'
import CartProvider from './context/cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



export const metadata = {
  title: "Wintage",
  description: "project app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />

        <UserProvider>
          <CartProvider>
            {children}
          </CartProvider>
          

        </UserProvider>
        
        </body>
    </html>
  );
}
