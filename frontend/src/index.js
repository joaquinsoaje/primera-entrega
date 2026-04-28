import Express from "express";
 
const app = Express();
const PORT = process.env.PORT || 3001;

app.use(Express.json());

app.get("/healthcheck" , (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en el puerto ${PORT}`);
});