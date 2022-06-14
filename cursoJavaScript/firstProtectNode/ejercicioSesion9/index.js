const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

function saludo(message){
  if (typeof message === 'string'){
  return console.info(message)
  }throw new Error("dato incorrecto")
}
try {
  saludo(5)
} catch (error) {
  logger.log("error",error.toString());
}
