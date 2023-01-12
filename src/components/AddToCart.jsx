import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal, removeIcon,icrement,dcrement} from "../features/Slice"


function AddToCart() {

  const { cart, totalQuantity, totalamount } = useSelector((state) => state.allcarts);
  const dispatch = useDispatch();
  dispatch(getCartTotal())

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {totalQuantity} items</h5>
                </div>
                <div className="card-body">
                  {cart.map((data) => (

                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                          <img src={data.img}
                            className="w-100" alt="Blue Jeans Jacket" />
                          <a href="#!">
                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p><strong>{data.title}</strong></p>
                        <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                          title="Remove item" onClick={() =>dispatch(removeIcon(data.id))}>
                          <i class="fas fa-trash"></i>
                        </button>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                          <button className="btn btn-primary px-3 me-2"
                           onClick={() =>dispatch(dcrement(data))}>
                            <i className="fas fa-minus"></i>
                          </button>
                                 {/* <p>uantity</p> */}
                          <div className="form-outline">
                           
                            <input id="form1" min="0" name="quantity"  value={data.quantity} type="number" className="form-control" 
                            onChange={() => null}/>
                            {/* <label className="form-label" for="form1">Quantity</label> */}
                          </div>

                          <button className="btn btn-primary px-3 ms-2"
                            onClick={() =>dispatch(icrement(data))}>
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>{data.totalPrice}</strong>
                        </p>
                      </div>
                    </div>
                  ))

                  }



                  <hr className="my-4" />
                </div>
              </div>

            </div>
            <div className="col-md-4 position-sticky" >
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span> {totalQuantity}</span>
                    </li>
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total Amount</strong>
                      </div>
                      <span><strong>{totalamount}</strong></span>
                    </li>
                  </ul>

                  <button type="button" className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddToCart