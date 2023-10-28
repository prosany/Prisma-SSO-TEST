const response = (res, data) => {
  res.status(200);
  res.json({
    status: 'success',
    message: 'Your request was successfully processed',
    results: data,
  });
};

const errorResponse = (res, data) => {
  res.status(data.status);
  delete data.status;
  res.json({
    status: 'error',
    message: 'Your request was not successfully processed',
    results: data,
  });
};

module.exports = { response, errorResponse };
