import styles from '../../styles/admin.module.sass'



export default function Login() {
    return (
        <div className={styles["auth"]}>
            <h1>Sign In</h1>
            <form>
                <label>
                    <input type="text" name="login" />
                </label>
                <label>
                    <input type="password" name="password" />
                </label>
            </form>
            <button className="button">Login</button>
        </div>
    )
}