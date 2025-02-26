import React from 'react'

function Register() {
return (
    <body className="bg-gradient-primary" style={{ padding: '9.3%', margin: '0' }}>
    <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form className="user">
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                            placeholder="First Name"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user" id="exampleLastName"
                                            placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Email Address"/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Repeat Password"/>
                                    </div>
                                </div>
                                <a href="login.html" className="btn btn-primary btn-user btn-block">
                                    Register Account
                                </a>
                            </form>
                            <hr/>
                            <div className="text-center">
                                <a className="small" href="/">Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
)
}

export default Register
