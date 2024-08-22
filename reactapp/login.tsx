const LoginPage = ()=>{
    const [formData,setfromData] = React.useState({
        email: '',
        password: '',

    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData, [name]: value, });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Form submitted with data:", formData);
    };

    return(
        <div className="login-page">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"
                value={formData.email}
                onChange={handleChange}
                 />

                 <label htmlFor="password">Password</label>
                 <input type="password" 
                 id="password" 
                 name="password"
                 value={formData.password}
                 onChange={handleChange}/>

            </form>
            
        </div>
    )
}