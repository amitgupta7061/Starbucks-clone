import { createContext, useState } from "react";
import { OrderMenu } from "../assets/data";
import { Barista } from "../assets/assets";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});
    const [mainItem, setMainItem] = useState({});


    const showSuccessToast = (message, emoji) => {
        toast.success(`${message} ${emoji}`, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                background: "white", // Dark gradient
                color: "#1e3932", // Soft white
                fontSize: "15px",
                width: "20vw",
                paddingLeft: "20px",
                borderRadius: "8px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                textAlign: "center",

            },
            closeButton: (
                <button style={{
                    display:'none',
                }}>
                    &times;
                </button>
            ),
        });
    }
    

    const addToCart = (itemId) => {
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev, [itemId]:1})); 
        } else{
            setCartItem((prev)=>({...prev, [itemId]:prev[itemId]+1}));
        }
        showSuccessToast("Item added to cart", "😊");
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}));
        showSuccessToast("Item removed from cart", "😞")
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = OrderMenu.find((product) => String(product.idd) === String(item));
                if (itemInfo) {
                    totalAmount += parseFloat(itemInfo.price) * cartItem[item];
                }
            }
        }
        return totalAmount.toFixed(2);
    };

    // -------------------------------------------------------------------------------------------------------
    const addToCart_2 = (itemId) => {
        if(!mainItem[itemId]){
            setMainItem((prev)=>({...prev, [itemId]:1})); 
        } else{
            setMainItem((prev)=>({...prev, [itemId]:prev[itemId]+1}));
        }
        showSuccessToast("Item added to cart", "😊");
    }
    const removeFromCart_2 = (itemId) => {
        setMainItem((prev)=>({...prev, [itemId]:prev[itemId]-1}));
        showSuccessToast("Item removed from cart", "😞")
    }
    const getTotalCartAmount_2 = () => {
        let totalAmount = 0;
        for (const item in mainItem) {
            if (mainItem[item] > 0) {
                let itemInfo = Barista.find((product) => String(product.idd) === String(item));
                if (itemInfo) {
                    totalAmount += parseFloat(itemInfo.price) * mainItem[item];
                }
            }
        }
        return totalAmount.toFixed(2);
    };
    

    const contextValue = {
        OrderMenu,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        mainItem,
        Barista,
        setMainItem,
        addToCart_2,
        removeFromCart_2,
        getTotalCartAmount_2,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;