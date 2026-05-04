import { createContext, useState } from "react";
import Swal from "sweetalert2";


export const CardContext = createContext()
export const CardProvider = ({ children }) => {
    const [cardItem, setCardItem] = useState([]);
    const addToCard = (product) => {
        if (cardItem.some((item) => item.id === product.id)) {
            Swal.fire({
                title: "Opps!",
                text: "This product is already in your card!",
                icon: "error",
                draggable: true
            });
        }
        else {
            setCardItem(prevItem => [...prevItem, product])
            Swal.fire({
                title: "Added!",
                text: "This product is added in your card!",
                icon: "success",
                draggable: true
            });
        }

    }
    const cardCound = cardItem.length;
    return (
        <CardContext.Provider value={{ cardItem, addToCard, cardCound }}>
            {children}
        </CardContext.Provider>
    )
}