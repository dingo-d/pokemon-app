export function errorHandler(errorObject) {
  let errorMessage = '';
  for (const error in errorObject) {
    if (errorObject.hasOwnProperty(error)) {
      const pointer = errorObject[error].source.pointer.split('/').pop();
      const detail = errorObject[error].detail;
      errorMessage += `${pointer} ${detail}; `;
    }
  }
  errorMessage = errorMessage.slice(0, -2);
  return errorMessage;
}
