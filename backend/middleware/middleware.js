const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(400)
  next(error)  
}

const errHandler = (err, req, res, next) => {
  // sometimes we get status 200-ok even it's an err: to fix it - res.statusCode === 200 ? 500

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
}

export { notFound, errHandler }