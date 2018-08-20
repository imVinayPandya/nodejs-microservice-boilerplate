const { NODE_ENV, HOST, PORT, DB_HOST, DB_PORT, DB_USER, DB_PASS } = process.env;

let env = NODE_ENV === 'development' || NODE_ENV === 'dev' ? 'dev' : 'dev';
env = NODE_ENV === 'staging' || NODE_ENV === 'stag' ? 'stag' : env;
env = NODE_ENV === 'production' || NODE_ENV === 'prod' ? 'prod' : env;

// development config
const dev = {
  env,
  host: HOST || '127.0.0.1',
  port: parseInt(PORT, 10) || 8080,
  dbConfig: {
    host: DB_HOST || 'localhost',
    port: DB_PORT || '29015',
    user: DB_USER || 'root',
    password: DB_PASS || '',
  },
};

// staging config
const stag = {
  env,
  host: HOST || '127.0.0.1',
  port: parseInt(PORT, 10) || 8080,
  dbConfig: {
    host: DB_HOST || 'staging',
    port: DB_PORT || '29015',
    user: DB_USER || 'root',
    password: DB_PASS || '',
  },
};

// production config
const prod = {
  env,
  host: HOST || '127.0.0.1',
  port: parseInt(PORT, 10) || 8080,
  dbConfig: {
    host: DB_HOST || 'production',
    port: DB_PORT || '29015',
    user: DB_USER || 'root',
    password: DB_PASS || '',
  },
};

let config = dev;

if (NODE_ENV === 'stag') {
  config = stag;
} else if (NODE_ENV === 'prod') {
  config = prod;
}

module.exports = config;
