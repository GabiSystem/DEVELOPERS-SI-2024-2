export default function handler(req, res) {
    const apiID = process.env.SERVICE_ID;
    const templateID = process.env.TEMPLATE_ID;
    const processID = process.env.SERVICE_ID;

    res.status(200).json({ apiID, templateID, processID });
}