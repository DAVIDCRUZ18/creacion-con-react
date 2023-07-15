import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-light'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='https://www.facebook.com/YourPage/' className='me-4 text-reset'>
                        <MDBIcon fab icon='facebook-f' />
                    </a>
                    <a href='https://twitter.com/YourPage/' className='me-4 text-reset'>
                        <MDBIcon fab icon='twitter' />
                    </a>
                    <a href='https://www.instagram.com/YourPage/' className='me-4 text-reset'>
                        <MDBIcon fab icon='instagram' />
                    </a>
                    <a href='https://www.linkedin.com/company/yourpage/' className='me-4 text-reset'>
                        <MDBIcon fab icon='linkedin' />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon='motorcycle' className='me-3' />
                                MotoStore
                            </h6>
                            <p>
                                Your one-stop-shop for all motorcycle needs. Offering a wide range of helmets, jackets, gloves, and other motorcycle gear.
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <a href='/helmets' className='text-reset'>
                                    Helmets
                                </a>
                            </p>
                            <p>
                                <a href='/jackets' className='text-reset'>
                                    Jackets
                                </a>
                            </p>
                            <p>
                                <a href='/gloves' className='text-reset'>
                                    Gloves
                                </a>
                            </p>
                            <p>
                                <a href='/accessories' className='text-reset'>
                                    Accessories
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='/pricing' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='/orders' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='/help' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon='home' className='me-2' />
                                New York, NY 10012, US
                            </p>
                            <p>
                                <MDBIcon icon='envelope' className='me-3' />
                                contact@motostore.com
                            </p>
                            <p>
                                <MDBIcon icon='phone' className='me-3' />
                                + 01 234 567 88
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 MotoStore. All rights reserved.
            </div>
        </MDBFooter>
    );
}

export default Footer;
