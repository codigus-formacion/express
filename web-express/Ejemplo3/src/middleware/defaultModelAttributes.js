export function defaultModelAttributes(req, res, next) {
    res.locals.username = "Juan";
    next();
}