import { useState } from "react";

export const Register = () =>{

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });
    //handling the input fields
    const handleInput= (e) =>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    //handling form submit
    const handleSubmit= (e) =>{
        e.preventDefault();  //prevent default behaviuor of form like refresh.
        console.log(user);
    };

    return (
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/register.png" alt="registration image" width="500" height="500"/>
                        </div>

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input type="text" name="username" placeholder="usernamr" id="username" required autoComplete="off"
                                    value={user.username} onChange={handleInput} />

                                </div>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input type="email" name="email" placeholder="enter email" id="email" required autoComplete="off"
                                    value={user.email} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="phone">phone</label>
                                    <input type="number" name="phone" placeholder="enter phone" id="phone" required autoComplete="off"
                                    value={user.phone} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input type="password" name="password" placeholder="enter password" id="password" required autoComplete="off" 
                                    value={user.password} onChange={handleInput}/>
                                </div>

                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Register Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
};