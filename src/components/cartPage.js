import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div>
      <section className="h-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
            <div className="col-span-2">
              <div className="card bg-white text-black mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cart.length} items</h5>
                </div>
                <div className="card-body">
                  {cart?.map((data) => (
                    <div key={data.id} className="mb-4">
                      <div className="flex items-center mb-4">
                        <div className="w-1/4">
                          <img
                            src={data.img}
                            className="w-full h-auto"
                            alt="Product"
                          />
                        </div>
                        <div className="w-1/2">
                          <p className="font-bold">{data.title}</p>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => dispatch(removeItem(data.id))}
                          >
                            <i className="fas fa-trash"></i> Remove
                          </button>
                        </div>
                        <div className="w-1/4">
                          <div className="flex items-center">
                            <button
                              className="btn btn-primary px-3 me-2"
                              onClick={() =>
                                dispatch(decreaseItemQuantity(data.id))
                              }
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <input
                              type="number"
                              min="0"
                              value={data.quantity}
                              readOnly
                              className="form-input w-16 text-center"
                            />
                            <button
                              className="btn btn-primary px-3 ms-2"
                              onClick={() =>
                                dispatch(increaseItemQuantity(data.id))
                              }
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <p className="text-end">
                            <strong>₹{data.price}</strong>
                          </p>
                        </div>
                      </div>
                      <hr className="my-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="card bg-white text-black mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>₹{totalPrice}</strong>
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
