module.exports = {
  apps : [
    {
    name: "rentcart",
    script: './node_modules/next/dist/bin/next',
    args: "start -p 9995",
  //  env_staging: {
//	API: 'staging',
//	NODE_ENV: 'production',
//	PORT: 9996,
   //   }
    }
  ]
};


