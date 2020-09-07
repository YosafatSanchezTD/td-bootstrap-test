import React from "react";
import '../styles/SecondPage.css';

function SecondPage() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg  navbar-light lightBlue">
                <div class="container-fluid ">
                    <a class="navbar-brand font-weight-bold" href="#">Juro</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item mr-2">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown mr-2">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Solution
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Test 1</a></li>
                                    <li><a class="dropdown-item" href="#">Test 2</a></li>
                                    <li><a class="dropdown-item" href="#">Test 3</a></li>
                                </ul>
                            </li>
                            <li class="nav-item mr-2">
                                <a class="nav-link" href="#">Case Studies</a>
                            </li>
                            <li class="nav-item dropdown mr-2">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                    <li><a class="dropdown-item" href="#">Test 4</a></li>
                                    <li><a class="dropdown-item" href="#">Test 5</a></li>
                                    <li><a class="dropdown-item" href="#">Test 6</a></li>
                                </ul>
                            </li>
                            <li class="nav-item mr-2">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown ml-4 mr-2">
                                <a class="btn btn-outline-dark" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="d-md-flex flex-md-equal">
                <div class="col-md-6 col-sm-12 px-3 px-md-5 text-center overflow-hidden lightBlue">
                    <div class="mx-auto w-100">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89f9adda-0ce2-41ca-bd0a-629c69bba8e5/dapuv77-136f3b3e-66ea-4d43-9bbd-e38008c80c4f.png/v1/fill/w_1024,h_1191,strp/deadpool_png__3_by_anna_x_anarchy_dapuv77-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMTkxIiwicGF0aCI6IlwvZlwvODlmOWFkZGEtMGNlMi00MWNhLWJkMGEtNjI5YzY5YmJhOGU1XC9kYXB1djc3LTEzNmYzYjNlLTY2ZWEtNGQ0My05YmJkLWUzODAwOGM4MGM0Zi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BiRn7SyNFJkkS4i8V8-fz8P0YqoC1zKWjbF5dsbMVJM" class="img-fluid" alt="Responsive" />
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 p-3 p-md-5 text-left overflow-hidden lightBlue">
                    <p class="text-muted small">For legal teams &#8212;</p>
                    <h1 class="display-2 font-weight-bolder">Become an enabler, not a blocker.</h1>
                    <div class="container-fluid w-25 border-top border-danger text-left ml-0 my-3" />
                    <p class="lead my-5 font-weight-bold">Free up a legal team to do more high value work, while helping the business close contracts faster.</p>
                    <a class="btn btn-primary font-weight-bold p-3" href="#">Request demo</a>
                </div>
            </div>

            <div class="d-md-flex flex-md-equal">
                <div class="col-md-4 col-sm-12 p-3 p-md-5 text-left overflow-hidden">
                    <h1 class="display-3 font-weight-bolder">An editor designed for contracts.</h1>
                    <div class="container-fluid w-25 border-top border-danger text-left ml-0 my-3" />
                    <p class="lead font-weight-light my-5">Put the joy back into contracts with a unique editor designed from the ground up for legal teams. Effortlessly scale your legal workflows with self-serve templates and conversational forms.</p>
                    <a class="btn btn-primary font-weight-bold p-3" href="#">Learn more</a>
                </div>
                <div class="col-md-8 col-sm-12 px-3 px-md-5 text-center overflow-hidden">
                    <div class="mx-auto w-100 my-5">
                        <img src="http://pngimg.com/uploads/deadpool/deadpool_PNG68.png" class="img-fluid" alt="Responsive" />
                    </div>
                </div>
            </div>

            <div class="container-fluid mt-3 lightBlue">
                <h1 class="display-3 font-weight-bolder">Secure collaboration.</h1>
                <div class="mx-auto w-25 border-top border-danger text-left my-3" />
                <p class="mx-auto my-0 text-left w-50 text-break">Gain internal approvals and get to yes faster with commenting, redlining and legally-binding e-signature. With a full audit trail of activity, you will never lose control of contracts again.</p>
            </div>
            <div class="container-fluid mb-3 py-4 lightBlue">
                <img src="http://pngimg.com/uploads/deadpool/deadpool_PNG43.png" class="img-fluid" alt="Responsive image" />
            </div>

            <div class="d-md-flex flex-md-equal">
                <div class="col-md-4 col-sm-12 p-3 p-md-5 text-left overflow-hidden">
                    <h1 class="display-3 font-weight-bolder">One source of truth.</h1>
                    <div class="container-fluid w-25 border-top border-danger text-left ml-0 my-3" />
                    <p class="lead font-weight-light my-5">Stay in control and track all your documents with a dashboard for your constract pipeline. Deploy powerful search capabilities to find exactly what you need, right when you need it.</p>
                    <a class="btn btn-primary font-weight-bold p-3" href="#">Learn more</a>
                </div>
                <div class="col-md-8 col-sm-12 px-3 px-md-5 text-center overflow-hidden">
                    <div class="mx-auto w-100 my-5">
                        <img src="https://fondos.io/wp-content/uploads/2019/01/deadpool-wallpapers-hd_4816-640x360.jpg" class="img-fluid" alt="Responsive" />
                    </div>
                </div>
            </div>

            <div class="container-fluid mt-3 lightBlue">
                <h1 class="display-3 font-weight-bolder">Learn from contract data.</h1>
                <div class="mx-auto w-25 border-top border-danger text-left my-3" />
                <p class="mx-auto my-0 pb-5 text-left w-50 text-break">Become more data-driven with Juro's AI-enabled analytics. Improve completion rates, identify bottlenecks and establish patterns in contract negotiations. And with data export, report back to management on how you're hitting yoyr goals.</p>
            </div>
            <div class="container-fluid mb-3 py-4 lightBlue">
                <img src="http://pngimg.com/uploads/deadpool/deadpool_PNG97.png" class="img-fluid" alt="Responsive image" />
            </div>

            <div class="row m-2 text-left pt-4">
                <div class="col-md-6">
                    <div class="row overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div class="col-auto d-block">
                            <img src="https://www.squatties.com/images/avatars/avatar-deadpool-256.png" class="img-fluid" alt=" "/>
                        </div>
                        <div class="col px-4 py-5 d-flex flex-column position-static">
                            <h5><a class="font-weight-bold" href="#">Juro for legal teams &#8227;</a></h5>
                            <p class="card-text">Scale contract workflow, enable the business and get the insights you need.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div class="col-auto d-block">
                            <img src="https://www.squatties.com/images/avatars/avatar-deadpool-256.png" class="img-fluid" alt=" "/>
                        </div>
                        <div class="col px-4 py-5 d-flex flex-column position-static">
                            <h5><a class="font-weight-bold" href="#">Juro for sales teams &#8227;</a></h5>
                            <p class="card-text">Close deals faster than ever before and delight your customers when it matters most.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div class="col-auto d-block">
                            <img src="https://www.squatties.com/images/avatars/avatar-deadpool-256.png" class="img-fluid" alt=" "/>
                        </div>
                        <div class="col px-4 py-5 d-flex flex-column position-static">
                            <h5><a class="font-weight-bold" href="#">Juro for developers &#8227;</a></h5>
                            <p class="card-text">Embed contracts usind Juro's REST API and webhooks and do less support work.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div class="col-auto d-block">
                            <img src="https://www.squatties.com/images/avatars/avatar-deadpool-256.png" class="img-fluid" alt=" "/>
                        </div>
                        <div class="col px-4 py-5 d-flex flex-column position-static">
                            <h5><a class="font-weight-bold" href="#">Juro for HR teams &#8227;</a></h5>
                            <p class="card-text">Make the right impression with the onboarding experience your people deserve.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-md-flex flex-md-equal lightBlue">
                <div class="col-md-6 col-sm-12 p-3 p-md-5 text-left overflow-hidden">
                    <img src="https://mundoxdescubrir.com/wp-content/uploads/2019/02/logo-skyscanner-1.png" class="img-fluid" alt=" "/>
                    <p class="lead font-weight-bolder">Forward-looking legal teams are supercharging contracts whit Juro.</p>
                    <h5><a class="font-weight-bold" href="#">See our case studies &#8227;</a></h5>
                </div>
                <div class="row col-md-6 col-sm-12 px-3 px-md-5 overflow-hidden">
                    <div class="m-auto col-md-8 offset-md-3">
                        <h3 class="text-left font-weight-bolder">"Before it took between 15 and 25 minutes in Word to set up a contract for one costumer. With Juro it takes less than a minute"</h3>
                        <div class="text-left pt-4" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGjTlpQ4m8fWjwuEI0QVExXRqCVddpj9Gv3w&usqp=CAU" class="img-fluid rounded-circle float-left" alt=" "/>
                            <p class="my-5 small font-weight-bold">  Deadpool </p>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="footer mt-auto py-3 indigo">
                <div class="container-fluid mb-3">
                    <div class="row text-white">
                        <div class="col-md-2 mx-auto my-3"><button type="button" class="btn btn-primary font-weight-bold p-4">Request demo</button></div>
                        <div class="col-md-2 mx-auto my-3"><button type="button" class="btn btn-outline-primary font-weight-bold p-4">Log in</button></div>
                        <div class="col-md-1 mx-auto">
                            <ul class="list-unstyled text-left text-nowrap font-weight-light small">
                                <li><p class="text-muted text-left">Company</p></li>
                                <li><p>About us</p></li>
                                <li><p>Media assets</p></li>
                                <li><p>Careers</p></li>
                                <li><p>Contact</p></li>
                            </ul>
                        </div>
                        <div class="col-md-1 mx-auto">
                            <ul class="list-unstyled text-left text-nowrap font-weight-light small">
                                <li><p class="text-muted text-left">Product</p></li>
                                <li><p>Pricing</p></li>
                                <li><p>Roadmap</p></li>
                                <li><p>Changelog</p></li>
                                <li><p>API docs</p></li>
                            </ul>
                        </div>
                        <div class="col-md-1 mx-auto">
                            <ul class="list-unstyled text-left text-nowrap font-weight-light small">
                                <li><p class="text-muted text-left">Solutions</p></li>
                                <li><p>Legal teams</p></li>
                                <li><p>Sales teams</p></li>
                                <li><p>HR teams</p></li>
                                <li><p>Developers</p></li>
                            </ul>
                        </div>
                        <div class="col-md-1 mx-auto">
                            <ul class="list-unstyled text-left text-nowrap font-weight-light small">
                                <li><p class="text-muted text-left">Resources</p></li>
                                <li><p>Blog</p></li>
                                <li><p>Case studies</p></li>
                                <li><p>Legal ops eBook</p></li>
                                <li><p>Templates</p></li>
                                <li><p>Help Center</p></li>
                            </ul>
                        </div>
                        <div class="col-md-1 mx-auto"><h5 class="text-white font-weight-bold">Juro</h5></div>
                    </div>
                </div>
                <div class="container border-top" />
                <div class="container clearfix mt-3">
                    <p class="text-muted text-white float-left small">&copy; Juro 2018 All rights reserved</p>
                    <p class="text-white float-right mx-3">Terms</p>
                    <p class="text-white float-right">Privacy</p>
                </div>
            </footer>

        </div>
    );
}

export default SecondPage;