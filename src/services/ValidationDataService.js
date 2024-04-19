const ValidationDataService = {
  validateUsername(username) {
    return username.length >= 6;
  },
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  },
  validatePassword(password) {
    return password.length >= 6;
  },
  validateTcNo(tcNo) {
    const tcNoRegex = /^\d{11}$/;
    return tcNoRegex.test(tcNo);
  }
};


export default ValidationDataService;


