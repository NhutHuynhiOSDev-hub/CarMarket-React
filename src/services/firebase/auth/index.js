import {
  signOut,
  getAuth,
  firebaseAuth,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "..";

export const doCreateUserWithEmailAnPassword = async (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = GoogleAuthProvider();
  const response = await signInWithPopup(firebaseAuth, provider);

  return response;
};

export const doSignOut = async () => {
  const auth = getAuth();
  return signOut(auth);
};

export const doVerifyEmail = async (email) => {
  return sendEmailVerification(firebaseAuth, email);
};

export const doPasswordReset = async (email) => {
  return sendPasswordResetEmail(firebaseAuth, email);
};

export const doUpdatePassword = async (password) => {
  return updatePassword(firebaseAuth.currentUser, password);
};
