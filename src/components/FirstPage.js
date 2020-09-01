import React from "react";
import '../styles/FirstPage.css';

function FirstPage() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg  navbar-dark indigo">
                <div class="container-fluid ">
                    <a class="navbar-brand text-white" href="#">Juro</a>
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
                    <a class="btn btn-primary font-weight-bold" href="#">Request demo</a>
                </div>
                <div class="col-md-6 col-sm-12 px-3 px-md-5 text-center overflow-hidden indigo">
                    <div class="my-0 mx-auto ">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89f9adda-0ce2-41ca-bd0a-629c69bba8e5/dapuv77-136f3b3e-66ea-4d43-9bbd-e38008c80c4f.png/v1/fill/w_1024,h_1191,strp/deadpool_png__3_by_anna_x_anarchy_dapuv77-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMTkxIiwicGF0aCI6IlwvZlwvODlmOWFkZGEtMGNlMi00MWNhLWJkMGEtNjI5YzY5YmJhOGU1XC9kYXB1djc3LTEzNmYzYjNlLTY2ZWEtNGQ0My05YmJkLWUzODAwOGM4MGM0Zi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BiRn7SyNFJkkS4i8V8-fz8P0YqoC1zKWjbF5dsbMVJM" class="img-fluid" alt="Responsive image" />
                    </div>
                    <div class="bg-dark shadow-sm mx-auto"></div>
                </div>
            </div>

        </div>
    );
}

export default FirstPage;