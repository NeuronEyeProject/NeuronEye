var whitelist = ['https://neuroneye.net/', 'https://app.neuroneye.net', 'localhost']

export var corsOpt = {

   origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }


}

export var morganOpt = {
    setting: combined
}