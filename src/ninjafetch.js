const ninjaFetch = async (endpoint, options = {}) => {
const APIKEY = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxYzgwN2QwYjM3MTAwMWFhODk0YTEiLCJpYXQiOjE3MTM3OTU3MTIsImV4cCI6MTcxNTAwNTMxMn0.7oRDb0oNzyyBd9z6l4oXh7lzg39fpVFebWJCeR_adZs'
  const reqOptions = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': APIKEY, 
    }, ...options
  }

  if (reqOptions.body) {
    reqOptions.body = JSON.stringify(options.body);
  }

  try {
    const response = await fetch(endpoint, reqOptions);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return await response.json()

  } catch (error) {
    console.error(error)
    throw error;
  }
}

export default ninjaFetch