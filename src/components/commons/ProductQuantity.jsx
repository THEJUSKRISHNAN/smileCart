import { paths } from "ramda";
import useCartItemsStore from "../../stores/useCartItemsStore";
import { shallow } from "zustand/shallow";



const ProductQuantity = ({ slug }) => {
    const [selectedQuantity, setSelectedQuantity] = useCartItemsStore(
        paths([["cartItems", slug], ["setSelectedQuantity"]]),
        shallow
    );

    const preventNavigation = e => {
        e.stopPropagation();
        e.preventDefault();
    };


    return (
        <div className="font-bold flex w-[6rem] justify-between  text-xl">
            <button className="font-bold pl-1" onClick={e => {
                preventNavigation(e);
                setSelectedQuantity(slug, selectedQuantity - 1);
            }}>-</button>
            {selectedQuantity}
            <button className="font-bold pr-1" onClick={e => {
                preventNavigation(e);
                setSelectedQuantity(slug, selectedQuantity + 1);
            }}>+</button>
        </div>
    )
}

export default ProductQuantity
