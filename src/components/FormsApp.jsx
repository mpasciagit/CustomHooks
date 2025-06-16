import { useForm } from "../hooks/useForm"

export const FormsApp = () => {

    const initialForm = {
        username: '',
        email: '',
        password: ''
    }

    const { username, email, password, onInputChange } = useForm(initialForm)
    // destructuración de un objeto:
    // toma objeto de useForm, crea 4 variables, y les asigna el valor correspondiente de ese objeto.
    // useForm es nuestro custom-hook. Le pasamos initialForm como argumento.
    // initialForm es simplemente un objeto inicial que usamos dentro del hook. 

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username, email, password)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name='username' 
                        // como username es variable (gracias a la desestructuración), no necesitamos 'formState.username'
                        value={username}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password1"
                        name='password'
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
