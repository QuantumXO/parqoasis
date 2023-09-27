module.exports = {
  extends: '@parcel/config-default',
  resolvers: ['...', 'parcel-resolver-tspaths'],
  reporters: ['...', 'parcel-reporter-static-files-copy'],
  packager: {
    'transforms': ['@parcel/transformer-js']
  },
  staticFiles: {
    'staticPath': 'src/static'
  },
};