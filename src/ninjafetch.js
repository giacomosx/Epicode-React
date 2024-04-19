const ninjaFetch = async (endpoint, options = {}) => {
const APIKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxYzgwN2QwYjM3MTAwMWFhODk0YTEiLCJpYXQiOjE3MTM1MTgzMzMsImV4cCI6MTcxNDcyNzkzM30.zldkCTA8Vpo0zUOyBD_6EgIzqd1cVNivraSJiWet7aQ'
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