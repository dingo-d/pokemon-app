export function errorHandler(errorObject) {
  let errorMessage = '';
  let pointer = '';
  let detail = '';
  for (const error in errorObject) {
    if (errorObject.hasOwnProperty(error)) {
      if (typeof errorObject[error].source !== 'undefined') {
        pointer = errorObject[error].source.pointer.split('/').pop();
        detail = errorObject[error].detail;
      } else  {
        pointer = errorObject[error].title;
        detail = errorObject[error].detail;
      }
      errorMessage += `${pointer}: ${detail}; `;
    }
  }
  errorMessage = errorMessage.slice(0, -2);
  return errorMessage;
}
