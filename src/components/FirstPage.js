import React from "react";
import '../styles/FirstPage.css';

function FirstPage() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg  navbar-dark indigo">
                <div class="container-fluid ">
                    <a class="navbar-brand text-white font-weight-bold" href="#">Juro</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item mr-2">
                                <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown mr-2">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Solution
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Test 1</a></li>
                                    <li><a class="dropdown-item" href="#">Test 2</a></li>
                                    <li><a class="dropdown-item" href="#">Test 3</a></li>
                                </ul>
                            </li>
                            <li class="nav-item mr-2">
                                <a class="nav-link text-white" href="#">Case Studies</a>
                            </li>
                            <li class="nav-item dropdown mr-2">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink2" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                    <li><a class="dropdown-item" href="#">Test 4</a></li>
                                    <li><a class="dropdown-item" href="#">Test 5</a></li>
                                    <li><a class="dropdown-item" href="#">Test 6</a></li>
                                </ul>
                            </li>
                            <li class="nav-item mr-2">
                                <a class="nav-link text-white" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown ml-4 mr-2">
                                <a class="btn btn-outline-light" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="d-md-flex flex-md-equal">
                <div class="col-md-6 col-sm-12 p-3 p-md-5 text-left text-white overflow-hidden indigo">
                    <h1 class="display-4 font-weight-bolder">Make contracts the start of something great.</h1>
                    <p class="lead font-weight-light my-5">Contract management software your whole team will love.</p>
                    <a class="btn btn-primary font-weight-bold p-3" href="#">Request demo</a>
                </div>
                <div class="col-md-6 col-sm-12 px-3 px-md-5 text-center overflow-hidden indigo">
                    <div class="mx-auto w-100">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89f9adda-0ce2-41ca-bd0a-629c69bba8e5/dapuv77-136f3b3e-66ea-4d43-9bbd-e38008c80c4f.png/v1/fill/w_1024,h_1191,strp/deadpool_png__3_by_anna_x_anarchy_dapuv77-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMTkxIiwicGF0aCI6IlwvZlwvODlmOWFkZGEtMGNlMi00MWNhLWJkMGEtNjI5YzY5YmJhOGU1XC9kYXB1djc3LTEzNmYzYjNlLTY2ZWEtNGQ0My05YmJkLWUzODAwOGM4MGM0Zi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BiRn7SyNFJkkS4i8V8-fz8P0YqoC1zKWjbF5dsbMVJM" class="img-fluid" alt="Responsive" />
                    </div>
                </div>
            </div>

            <div class="row m-0">
                <div class="col-md-2 col-sm-4 p-0">
                    <div class="card border-0 rounded-0">
                        <img src="https://cdn.custom-cursor.com/packs/347/pack308.png" class="img-fluid" alt=" "/>
                    </div>
                </div>
                <div class="col-md-2 col-sm-4 p-0">
                    <div class="card border-0 rounded-0">
                        <img src="https://cdn.custom-cursor.com/packs/347/pack308.png" class="img-fluid" alt=" "/>
                    </div>
                </div>
                <div class="col-md-2 col-sm-4 p-0">
                    <div class="card border-0 rounded-0">
                        <img src="https://cdn.custom-cursor.com/packs/347/pack308.png" class="img-fluid" alt=" "/>
                    </div>
                </div>
                <div class="col-md-2 col-sm-4 p-0">
                    <div class="card border-0 rounded-0">
                        <img src="https://cdn.custom-cursor.com/packs/347/pack308.png" class="img-fluid" alt=" "/>
                    </div>
                </div>
                <div class="col-md-2 col-sm-4 p-0">
                    <div class="card border-0 rounded-0">
                        <img src="https://cdn.custom-cursor.com/packs/347/pack308.png" class="img-fluid" alt=" "/>
                    </div>
                </div>
                <div class="col-md-2 col-sm-4 p-0">
                    <div class="card border-0 rounded-0">
                        <img src="https://cdn.custom-cursor.com/packs/347/pack308.png" class="img-fluid" alt=" "/>
                    </div>
                </div>
            </div>

            <div class="container-fluid my-3">
                <h1 class="display-4 font-weight-bolder text-left">Create contract magic.</h1>
                <div class="container-fluid w-25 border-top border-danger text-left ml-0 my-3" />
                <p class="text-left w-50 text-break">Contracts are agreed at the happiest point in your business life. Don't let legacy systems and pdfs get in the way of managing your most important business relationships</p>
            </div>
            <div class="container-fluid my-3">
                <img src="https://revistapantallas.files.wordpress.com/2018/02/886.jpg?w=1280&h=720&crop=1" class="img-fluid" alt="Responsive image" />
            </div>

            <div class="d-md-flex flex-md-equal">
                <div class="col-md-4 col-sm-12 p-3 p-md-5 text-left overflow-hidden">
                    <h1 class="display-4 font-weight-bolder">Collaborate better.</h1>
                    <div class="container-fluid w-25 border-top border-danger text-left ml-0 my-3" />
                    <p class="lead font-weight-light my-5">Work smarter with inline commenting, versioning and seamless approval workflow within your browser</p>
                    <a class="btn btn-primary font-weight-bold p-3" href="#">Learn more</a>
                </div>
                <div class="col-md-8 col-sm-12 px-3 px-md-5 text-center overflow-hidden">
                    <div class="mx-auto w-100 my-5">
                        <img src="https://i.dlpng.com/static/png/5514611-png-deadpool-png-world-dead-pool-png-268_562_preview.png" class="img-fluid" alt="Responsive" />
                    </div>
                </div>
            </div>

            <div class="d-md-flex flex-md-equal">
                <div class="col-md-8 col-sm-12 px-3 px-md-5 text-center overflow-hidden">
                    <div class="mx-auto w-100 my-5">
                        <img src="https://fondos.io/wp-content/uploads/2019/01/deadpool-wallpapers-hd_4816-640x360.jpg" class="img-fluid" alt="Responsive" />
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 p-3 p-md-5 text-left overflow-hidden">
                    <h1 class="display-4 font-weight-bolder">Get to yes faster.</h1>
                    <div class="container-fluid w-25 border-top border-danger text-left ml-0 my-3" />
                    <p class="lead font-weight-light my-5">Accelerate agreements with mobile-responsive documents and legally binding e-signature on any device to take the paper and the work out of paperwork</p>
                    <a class="btn btn-primary font-weight-bold p-3" href="#">Learn more</a>
                </div>
            </div>

            <div class="d-md-flex flex-md-equal wolt p-5">
                <div class="col-md-4 col-sm-12 p-3 p-md-5 mx-5 text-left overflow-hidden">
                    <h1 class="display-3 font-weight-bolder font-italic">Wolt</h1>
                    <p class="lead font-weight-light">Creating business partnerships in minutes with frictionless contract management</p>
                    <a class="font-weight-bold" href="#">Learn more &#8227;</a>
                </div>
                <div class="col-md-8 col-sm-12 px-3 px-md-5 text-center overflow-hidden">
                    
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner m-3">
                            <div class="carousel-item active">
                                <p class="font-weight-light">Juro is the best thing ever (Deadpool approved)</p>
                                <img src="https://www.cachicha.com/wp-content/uploads/03202c8f589af1b5-600x338.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <p class="font-weight-light">Juro is the best thing ever (Deadpool approved x2)</p>
                                <img src="https://pulpfictioncine.com/download/multimedia.miniatura.adb9b0f82ac46581.63696e6573636170652d363033783333362d3330333038395f6d696e6961747572612e6a706567.jpeg" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    
                </div>
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

export default FirstPage;