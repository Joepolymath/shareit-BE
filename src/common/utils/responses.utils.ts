export function successResponse(message, data) {
  if (!data) {
    return {
      message,
      success: true,
      statusCode: 200,
    };
  }
  return {
    message,
    data,
    success: true,
    statusCode: 200,
  };
}
