export const swaggerOptions = {
  definition: {
    info: {
      title: 'XenElectronic API',
      description: 'XenElectronic API Information',
      contact: {
        name: 'Robert Kolsek',
      },
      servers: ['http://localhost:3000'],
      version: '1.0.0',
    },
  },
  apis: ['app.js'],
};
