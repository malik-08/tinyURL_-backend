import { URLs } from "../Models/url.js";

export const RedirectURL = async (req, res) => {
    const { shortId } = req.params;
    try {
        const url = await URLs.find({shortId: shortId});
        const element = url[0];
        res.redirect(element.longURL);
    }catch (err) {
        res.status(500).json({
            ok :false,
            err : err,
        });
    }
    };