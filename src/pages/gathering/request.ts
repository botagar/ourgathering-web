/* eslint-disable @typescript-eslint/no-unused-vars */
async function request<TResponse> (url: string, config: RequestInit = {}): Promise<TResponse> {
  return await fetch(url, config)
    .then(async (response) => await response.json())
    .then((data) => data as TResponse)
}

export default request
