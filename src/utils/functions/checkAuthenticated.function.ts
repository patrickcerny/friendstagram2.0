const checkAuthenticated = (): boolean => {
  if (localStorage.getItem('token')) return true;
  return false;
};

export default checkAuthenticated;
