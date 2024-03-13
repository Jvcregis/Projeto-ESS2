import GetCart from "../../Components/Carrinho/getCart";
import GoToItemPageButton from "../../Components/Carrinho/GoToItemPageButton";
import GoToHomeButton from "../../Components/Carrinho/GoToHomeButton";
import './index.css';

const ViewCart = () => {
    return (
        <div className="cartPage">
            <div className="cabeçalhoCarrinho">
                <div className="goToItemPageContainer">
                    <GoToItemPageButton />
                </div>
                <div className="goToHomeButtonContainer">
                    <GoToHomeButton />
                </div>
            </div>
            <div className="cartContainer">
                <div className="getCartContainer">
                    <GetCart />
                </div>
            </div>
        </div>
    );
};

export default ViewCart;
