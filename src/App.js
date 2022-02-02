import "./App.css";
import img from "./cards.png"
import React from 'react';


import { Navbar, Nav, NavDropdown,} from 'react-bootstrap';

import {FaShoppingCart} from 'react-icons/fa'

class App extends React.Component {
  state = { a: 0, cart: [] };
  
  

  render() {
    const increment = (item) => {
  
      this.state.cart.push(item);

      this.setState({ a: this.state.a + 1});
      
    };
    const decrement = (item1) => {
      
      let temp = this.state.cart;
      
      temp.splice(temp.indexOf(item1),1);

      this.setState({ a: this.state.a - 1, cart: temp });
      
    };
    

    console.log(this.state.cart)
    

  return (
    <div className="App">
      <div className="App2">
      <header >
        <Navbar expand="lg" >
          
          <Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
                  <NavDropdown title="Shop" id="basic-nav-dropdown">
                    
                    <NavDropdown.Item>All Products</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Popular Item</NavDropdown.Item>
                    <NavDropdown.Item>New Arrivals</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              </Navbar.Collapse>


              <Navbar.Collapse alignRight>
              <form class="d-flex">
                  <button style={{float:"right", padding:"5px", overflow:"hidden", borderRadius:"5px"}}className="btn btn-outline-dark mr-auto" id="right" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            <i class="fas fa-shopping-cart"></i>
                            <FaShoppingCart />  Cart &nbsp;&nbsp;&nbsp;
                            <span className="Zero"><span className="badge bg-dark text-white ms-1 rounded-pill">{this.state.a}</span></span>
                        </button>
                        </form>
                        </Navbar.Collapse>
                        </Navbar>
                        

                       
                       
                        
                         

                        
              
          
      </header>
      </div>

      <div className="container-fluid">
        
        <div className="row foot">
          <div className="col-lg-12">
            <div className="bg-dark">
          <h1 class="display-4 fw-bolder text-center text-white">Shop in style</h1>
            <p class="lead fw-normal text-center text-white-50 mb-0">With this shop homepage template</p>
            </div>
          </div>
      </div>
      </div>
      <div className="App3">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col-lg-3 mb-4 grid-margin">
              <div className="card h-100">
                <img src={img}></img>
                  <div className="card-body">
                    <h4 className="card-text"><b>Fancy Product</b></h4>
                    <p>$40.00 - $80.00</p>
                  </div>
                  <div className="card-footer">
                  <a class="btn btn-outline-dark mt-auto" href="#">View options</a>
                  </div>  
              </div>
            </div>
            <div className="col-lg-3 mb-4 grid-margin">
              <div className="card h-100">
              <div class="badge bg-dark text-white position-absolute pos" >Sale</div>
              <img src={img}></img>
                  <div className="card-body">
                    <h4 className="card-text"><b>Special Item</b></h4>
                    <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p><strike>$20.00</strike> $18.00</p>
                  </div>
                  
                  {this.state.cart.includes(2) ? (
                    <button class="btn btn-outline-dark mt-auto" onClick={() => decrement(2)}>
                      Remove from cart
                    </button>
                  ) : (
                  <div className="card-footer">
                  <a href="#" class="btn btn-outline-dark mt-auto"  onClick={()=> increment (2) }>Add to Cart</a>
                  </div>
                  )}
              </div>
            </div>

            <div className="col-lg-3 mb-4 grid-margin">
              <div className="card h-100">
                 <div class="badge bg-dark text-white position-absolute pos" >Sale</div>
                  <img src={img}></img>
                  <div className="card-body">
                    <h4 className="card-text"><b>Sale Item</b></h4>
                    <p><strike>$50.00</strike> $25.00</p>
                  </div>
                  {this.state.cart.includes(3) ? (
                    <button class="btn btn-outline-dark mt-auto" onClick={() => decrement(3)}>
                      Remove from cart
                    </button>
                  ) : (
                  <div className="card-footer">
                  <a href="#" class="btn btn-outline-dark mt-auto"  onClick={()=> increment (3) }>Add to Cart</a>
                  </div>
                  )}
              </div>
            </div>
            <div className="col-lg-3 mb-4 grid-margin">
              <div className="card h-100">
              <img src={img}></img>
                  
                  <div className="card-body">
                    <h4 className="card-text"><b>Popular Item</b></h4>
                    <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p>$40.00</p>
                  </div>
                  {this.state.cart.includes(4) ? (
                    <button class="btn btn-outline-dark mt-auto" onClick={() => decrement(4)}>
                      Remove from cart
                    </button>
                  ) : (
                  <div className="card-footer">
                  <a href="#" class="btn btn-outline-dark mt-auto"  onClick={()=> increment (4) }>Add to Cart</a>
                  </div>
                  )}
              </div>
            </div>

            

        </div>
        
                
        </div>
        <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col-lg-3 mb-4 grid-margin">
              <div className="card h-100">
              <div class="badge bg-dark text-white position-absolute pos" >Sale</div>
                <img src={img}></img>
                  <div className="card-body">
                    <h4 className="card-text"><b>Sale Item</b></h4>
                    <p><strike>$50.00</strike> $25.00</p>
                  </div>
                  <div className="card-footer">
                  <a class="btn btn-outline-dark mt-auto" href="#">View options</a>
                  </div>
              </div>
            </div>
            

            <div className="col-lg-3 mb-4 grid-margin">
              <div className="card h-100">
                <img src={img}></img>
                  <div className="card-body">
                  <h4 className="card-text"><b>Fancy Product</b></h4>
                    <p>$40.00 - $80.00</p> 
                  </div>
                  {this.state.cart.includes(5) ? (
                    <button class="btn btn-outline-dark mt-auto" onClick={() => decrement(5)}>
                      Remove from cart
                    </button>
                  ) : (
                  <div className="card-footer">
                  <a href="#" class="btn btn-outline-dark mt-auto"  onClick={()=> increment (5) }>Add to Cart</a>
                  </div>
                  )}
              </div>
            </div>
            

            <div className="col-lg-3 mb-4 grid-margin">
              <div className="card h-100">
              <div class="badge bg-dark text-white position-absolute pos" >Sale</div>
                <img src={img}></img>
                  <div className="card-body">
                  <h4 className="card-text"><b>Special Item</b></h4>
                    <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p><strike>$20.00</strike> $18.00</p>
                  </div>
                  {this.state.cart.includes(6) ? (
                    <button class="btn btn-outline-dark mt-auto" onClick={() => decrement(6)}>
                      Remove from cart
                    </button>
                  ) : (
                  <div className="card-footer">
                  <a href="#" class="btn btn-outline-dark mt-auto"  onClick={()=> increment (6) }>Add to Cart</a>
                  </div>
                  )}
              </div>
            </div>
            

            <div className="col-lg-3 mb-4 grid-margin">
              <div className="card h-100">
                <img src={img}></img>
                  <div className="card-body">
                  <h4 className="card-text"><b>Popular Item</b></h4>
                    <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p>$40.00</p>
                  </div>
                  {this.state.cart.includes(7) ? (
                    <button class="btn btn-outline-dark mt-auto" onClick={() => decrement(7)}>
                      Remove from cart
                    </button>
                  ) : (
                  <div className="card-footer">
                  <a href="#" class="btn btn-outline-dark mt-auto"  onClick={()=> increment (7) }>Add to Cart</a>
                  </div>
                  )}
              </div>
            </div>
            
         
            </div>



            </div>
            </div>

            <p className="text-center foot">
          Copyrights <i class="fa fa-copyright" aria-hidden="true"></i> Your
          Website 2021
        </p>
      </div>


      
      
    
    

  );
                }
              }
                
    

export default App;

                
