// /var/your-nextjs-app/ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "/var/everything-auto",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
