import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInit from "../Firebase/FirebaseInit";

FirebaseInit();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	const auth = getAuth();

	// User Register
	const Register = (email, password, name, location, history) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const newUser = { email, displayName: name };
				setUser(newUser);
				updateProfile(auth.currentUser, {
					displayName: "Jane Q. User",
					photoURL: "https://example.com/jane-q-user/profile.jpg",
				})
					.then(() => {
						setSuccess(true);
					})
					.catch((error) => {
						setError(error.message);
					});
				const path = location?.state?.from || "/";
				history.replace(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	// Login user
	const Login = (email, password, location, history) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const path = location?.state?.from || "/";
				history.replace(path);
			})
			.catch((error) => {
				setError(error.message);
				setSuccess(false);
			})
			.finally(() => setLoading(false));
	};

	// LogOut
	const LogOut = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};
	// OnState Change
	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setLoading(false);
			setError("");
		});
		return unsubscribe;
	}, []);
	return { Register, Login, LogOut, user, error, loading, success };
};
export default useFirebase;
