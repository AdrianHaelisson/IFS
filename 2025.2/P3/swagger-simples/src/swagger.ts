import swaggerJSDoc from "swagger-jsdoc";
export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Swagger",
      version: "1.0.0",
      description: "Introdução ao Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  // aqui você lista onde estão os comentários JSDoc das rotas
  apis: ["./src/app.ts"],
});
