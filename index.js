const validation = {
  isEmail: (email) => {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(String(email).toLowerCase().match(emailRegex)) return true;
    else return false;
  },

  isMinString: (string, length) => {
    if (string && string.length >= length) return true;
    else return false;
  },

  isMaxString: (string, length) => {
    if (string && string.length <= length) return true;
    else return false;
  }
}

module.exports = validation;
