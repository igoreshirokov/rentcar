export default (req, res) => {
    const u = process.env.AUTH_USERNAME
    res.status(200).json({ name: u })
}
